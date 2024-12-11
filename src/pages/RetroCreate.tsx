import styled from '@emotion/styled'
import MarkdownEditor from '../components/MarkdownEditor'
import { useEffect, useState } from 'react'
import DefaultButton from '../components/DefaultButton'
import { useLocation, useNavigate } from 'react-router'
import { RETRO_TEMPLATE } from '../constants/retroTemplate'
import { useMutation } from '@tanstack/react-query'
import putRetrospects from '../api/putRetrospects'
import GptAdvice from '../components/GptAdvice'
import postRetroAdvice from '../api/postRetroAdvice'

const RetroCreate = () => {

  const navigate = useNavigate()

  // 이전 화면(회고록 선택 화면)에서 navigate시 회고록 유형 이름 넘겨받음 (KPT, CSS, 4Ls)
  const location = useLocation()
  const projectId = location.state?.projectId
  const sprintId = location.state?.sprintId
  const retroType = location.state?.retroType as keyof typeof RETRO_TEMPLATE || 'KPT'
  const retroId = location.state?.retroId
  const [value, setValue] = useState(RETRO_TEMPLATE[retroType].content)
  const [isCheck, setIsCheck] = useState(false)
  const [error, setError] = useState(false)
  const [advice, setAdvice] = useState<string>('')
  const [loading, setLoding] = useState(false)

  const retroCreateMutation = useMutation({
    mutationFn: putRetrospects
  })

  const adviceMutation = useMutation({
    mutationFn: postRetroAdvice
  })

  useEffect(() => {
    if (sprintId) {
      setValue(RETRO_TEMPLATE[retroType].content.replace('# 스프린트1', `# 스프린트${sprintId}`))
    }
  }, [sprintId, retroType])

  const handleMdChange = (newValue: string | undefined) => {
      setValue(newValue || '')
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked)
    if (e.target.checked) {
      setError(false)
    }
  }


  const handleSubmit = () => {
    if (!isCheck) {
      setError(true)
    } else {
      console.log('회고록 작성 완료\n', value)
      retroCreateMutation.mutate({ retroId, tempName: retroType, answer: value }, {
        onSuccess: () => {
          navigate(`/retro/${projectId}`, { state: { projectId } })
        }
      })
    }
  }

  const handleGpt = () => {
    setLoding(true)
    adviceMutation.mutate({ tempName: retroType, fieldValue: value }, {
      onSuccess: (data) => {
        setAdvice(data.response.advice)
        setLoding(false)
      },
      onError: () => {
        setLoding(false)
      }
    })
  }

  return (
    <RetroWrapper>
      <Title>회고록 작성 ({retroType})</Title>
      <Container>
        <MarkdownEditor value={value} onChange={handleMdChange} />
        <GptAdvice onClick={handleGpt} advice={loading ? '로딩중입니다...' : advice} />
        <Options>
          <OptionLine>
            <Checkbox type='checkbox' checked={isCheck} onChange={handleCheckboxChange} />
            <CheckboxLabel>회고 내용을 외부에 유출하지 않을 것임에 동의합니다</CheckboxLabel>
          </OptionLine>
          <OptionLine>
            {error && (
              <ErrorMessage>회고 내용 비밀 유지 서약에 동의해주세요</ErrorMessage>
            )}
          </OptionLine>
        </Options>
        <BtnContainer>
          <DefaultButton text='작성 완료' fontSize='1.1rem' width='8rem' height='2.7rem' onClick={handleSubmit} />
        </BtnContainer>
      </Container>
    </RetroWrapper>
  )
}

const RetroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 5rem);
  position: relative;
  padding: 6rem 7.5rem;
  box-sizing: border-box;
  overflow-y: auto;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  line-height: 1.85rem;
`

const BtnContainer = styled.div`
  margin-top: 1.5rem;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 78rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`

const OptionLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Checkbox = styled.input`
  margin-right: 0.7rem;
  width: 1rem;
`

const CheckboxLabel = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
`

const ErrorMessage = styled.div`
  color: #E52B2B;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 78rem;
  margin-right: 6.3rem;
`

export default RetroCreate