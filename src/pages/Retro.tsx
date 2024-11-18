import styled from '@emotion/styled'
import RetroList from '../components/RetroList'
import RetroSummary from '../components/RetroSummary'

const Retro = () => {

  const summaryText = '회고 내용입니다.\n회고 요약 3줄 내용입니다.\n회고 요약 내용입니다.'

  return (
    <RetroWrapper>
      <Title>회고 리스트</Title>
      <Container>
        <RetroSummary content={summaryText} />
        <RetroList />
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
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 3rem;
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
export default Retro