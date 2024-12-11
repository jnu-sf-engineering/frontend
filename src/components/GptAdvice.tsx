import styled from '@emotion/styled'
import gptVector from '../assets/gptVector.svg'

interface gptAdiveProps {
  advice?: string
  onClick: () => void
}

const GptAdvice = ({ advice, onClick }: gptAdiveProps) => {
  return (
    <AdviceContainer>
      <GptIcon onClick={onClick} src={gptVector} />
      <AdviceContent>
        {advice ||  'gpt에게 회고록 작성에 대해 조언을 받아보세요!'}
      </AdviceContent>
    </AdviceContainer>
  )
}

const AdviceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 1.5rem 0;
`


const GptIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  margin-top: 0.2rem;

  &:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(85%) saturate(147%) hue-rotate(171deg) brightness(101%) contrast(101%);
  }
`

const AdviceContent = styled.div`
  position: relative;
  background: #DEF0F1;
  border-radius: 10px;
  padding: 12px 20px;
  max-width: 50rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  margin-left: 2rem;
  margin-top: 0.3rem;
  white-space: pre-wrap;
  line-height: 1.4rem;

  &:after {
    content: '';
    position: absolute;
    top: 10px; /* 본체에서 아래로 10px */
    left: -20px; /* 본체 왼쪽에서 20px */
    border-width: 20px; /* 삼각형 크기 */
    border-style: solid; /* 삼각형 만들기 */
    border-color: #DEF0F1 transparent transparent transparent; /* 색상 지정 */
  }
`


export default GptAdvice