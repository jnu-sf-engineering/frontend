import styled from '@emotion/styled'
import React from 'react'
import gptIcon from '../assets/gptIcon.png'

interface gptAdiveProps {
  advice?: string
  onClick: () => void
}

const GptAdvice = ({ advice, onClick }: gptAdiveProps) => {
  return (
    <AdviceContainer>
      <GptIcon onClick={onClick} src={gptIcon} />
      <AdviceContent>
        {advice ? advice : 'gpt에게 회고록 작성에 대해 조언을 받아보세요!'}
      </AdviceContent>
    </AdviceContainer>
  )
}

const AdviceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`


const GptIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`

const AdviceContent = styled.div`
  position: relative;
  background: #D4E7E8; /* 말풍선 본체 색상 */
  border-radius: 10px; /* 모서리 둥글게 */
  padding: 6px 20px; /* 내부 여백 */
  max-width: 30rem; /* 최대 너비 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  font-size: 0.9rem;
  margin-left: 2rem;
  margin-top: 0.3rem;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px; /* 본체에서 아래로 10px */
    left: -20px; /* 본체 왼쪽에서 20px */
    border-width: 20px; /* 삼각형 크기 */
    border-style: solid; /* 삼각형 만들기 */
    border-color: #D4E7E8 transparent transparent transparent; /* 색상 지정 */
  }
`


export default GptAdvice