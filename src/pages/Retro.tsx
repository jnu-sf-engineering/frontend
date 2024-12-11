import styled from '@emotion/styled'
import RetroList from '../components/RetroList'
import RetroSummary from '../components/RetroSummary'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import getRetro from '../api/getRetro'
import Loading from '../components/Loading'

const Retro = () => {

  const { projectId } = useParams<{ projectId: string }>()
  const projectIdNumber = Number(projectId)
  const errorText = '회고가 존재하지 않습니다\n회고를 작성해주세요'
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['retroList', projectId],
    queryFn: () => getRetro({projectId: projectIdNumber}),
    retry: 1
  })

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (isError || !data || !data.retrospects) {
    return (
      <ErrorWrapper>
        <ErrorIcon className='material-symbols-outlined'>error</ErrorIcon>
        <Error>{errorText}</Error>
      </ErrorWrapper>
    )
  }

  return (
    <RetroWrapper>
      <Title>회고 리스트</Title>
      <Container>
        <DataContainer>
          <RetroSummary content={data?.summary} />
          <RetroList data={data?.retrospects} />
        </DataContainer>
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
  margin-bottom: 2rem;
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

const DataContainer = styled.div`
  position: absolute;
  top: 3rem;
`

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(80vh);
  position: relative;
`

const ErrorIcon = styled.div`
  color: #6A7AAC;
  margin-bottom: 1.4rem;
  font-size: 2.5rem;
  font-weight: 300;
`

const Error = styled.div`
  white-space: pre-line;
  text-align: center;
  line-height: 1.9rem;
  color: #6A7AAC;
  font-size: 1.15rem;
`

export default Retro