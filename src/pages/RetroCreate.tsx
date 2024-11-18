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

  const handleMdChange = (newValue: string | undefined) => {
      setValue(newValue || '')
  }

  const handleSubmit = () => {
    console.log('회고록 작성 완료\n', value)
    navigate('/retro')
  }

  return (
    <RetroWrapper>
      <Title>회고록 작성 ({retroType})</Title>
      <Container>
        <MarkdownEditor value={value} onChange={handleMdChange} />
        <BtnContainer>
          <DefaultButton text='작성 완료' fontSize='1.1rem' width='7rem' height='2.7rem' onClick={handleSubmit} />
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

export default RetroCreate