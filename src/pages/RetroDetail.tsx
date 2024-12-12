import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import MarkdownViewer from '../components/MarkdownViewer'
import RetroSummary from '../components/RetroSummary'
import { useQuery } from '@tanstack/react-query'
import getRetroDetail from '../api/getRetroDetail'
import { useParams } from 'react-router'

const RetroDetail = () => {

  const { retroId } = useParams<{ retroId: string }>()
  const retroIdNum = Number(retroId)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['retroDetail'],
    queryFn: () => getRetroDetail({ retroId: retroIdNum }),
    retry: 1
  })

  useEffect(() => {
    console.log('retroId: ', retroIdNum)

  }, [retroIdNum])

  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError || !data || !data.response) {
    return <p>Error</p>
  }

  return (
    <RetroWrapper>
      <Title>회고록 상세보기</Title>
      <Container>
        <RetroSummary content={data.response.retro} width='54.5rem' />
        <Space />
        <MarkdownViewer text={data.response.answer} />
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