import styled from '@emotion/styled'
import React from 'react'
import MarkdownViewer from '../components/MarkdownViewer'
import { RETRO_TEXT_KPT } from '../mocks/RetroTextMock'
import RetroSummary from '../components/RetroSummary'

const RetroDetail = () => {

  // 추후 통신 연결시 mdText를 회고록 내용으로 대체 예정
  const mdText = RETRO_TEXT_KPT
  const summaryText = '회고 내용입니다.\n회고 요약 3줄 내용입니다.\n회고 요약 내용입니다.'

  return (
    <RetroWrapper>
      <Title>회고록 상세보기</Title>
      <Container>
        <RetroSummary content={summaryText} width='54.5rem' />
        <Space />
        <MarkdownViewer text={mdText} />
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
  padding: 6rem 20rem;
  box-sizing: border-box;
  margin-bottom: 3rem;
  overflow-y: auto;
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
  margin-top: 0.8rem;
  box-sizing: border-box;
`

const Space = styled.div`
  margin: 15px;
`

export default RetroDetail