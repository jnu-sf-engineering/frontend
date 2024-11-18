import styled from '@emotion/styled'
import MarkdownEditor from '../components/MarkdownEditor'
import { useState } from 'react'
import DefaultButton from '../components/DefaultButton'
import { useLocation, useNavigate } from 'react-router'
import { RETRO_TEMPLATE } from '../constants/retroTemplate'

const RetroCreate = () => {

  const navigate = useNavigate()

  // 이전 화면(회고록 선택 화면)에서 navigate시 회고록 유형 이름 넘겨받도록 하기
  const location = useLocation()
  const retroType = location.state?.retroType as keyof typeof RETRO_TEMPLATE || 'KPT'
  const [value, setValue] = useState(RETRO_TEMPLATE[retroType].content)
  const [isCheck, setIsCheck] = useState(false)
  const [error, setError] = useState(false)

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
      navigate('/retro')
    }
  }


  return (
    <RetroWrapper>
      <Title>회고록 작성 ({retroType})</Title>
      <Container>
        <MarkdownEditor value={value} onChange={handleMdChange} />
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
  height: calc(100vh - 13rem);
  position: relative;
  padding: 6rem 7.5rem;
  box-sizing: border-box;
  margin-bottom: 20rem;
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
  margin-bottom: 3rem;
`

const BtnContainer = styled.div`
  margin-top: 1.5rem;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 78rem;
  margin-top: 1rem;
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