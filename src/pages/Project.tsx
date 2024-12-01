import styled from '@emotion/styled'
import React, { useState } from 'react'
import DefaultButton from '../components/DefaultButton'
import ProjectList from '../components/ProjectList'
import ProjectCreateModal from '../components/ProjectCreateModal'
import { useQuery } from '@tanstack/react-query'
import getProject from '../api/getProject'

const Project = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['project'],
    queryFn: getProject,
    retry: 1
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const errorText = '프로젝트가 존재하지 않습니다\n프로젝트를 생성해주세요'

  const handleCreateProject = () => {
    setIsModalOpen(true)
    console.log('모달창 열림')
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  if (isLoading) {
    <p>Loading</p>
  }

  if (isError || !data || !data.response) {
    <p>Error</p>
  }

  return (
    <ProjectWrapper>
      <Title>내 프로젝트</Title>
      <Container>
        <BtnContainer>
          <DefaultButton text='프로젝트 생성하기' width='9.2rem' height='2.5rem' fontSize='1rem' onClick={handleCreateProject} />
        </BtnContainer>
        <DataContainer>
          {data
            ? <ProjectList projects={data.response} />
            : <ErrorWrapper>
                <ErrorIcon className='material-symbols-outlined'>error</ErrorIcon>
                <Error>{errorText}</Error>
              </ErrorWrapper>
          }
        </DataContainer>
      </Container>
      <ProjectCreateModal isOpen={isModalOpen} onClose={handleModalClose} />
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 13rem);
  position: relative;
  padding: 6rem 7.5rem;
  box-sizing: border-box;
  position: relative;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

const BtnContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 0.7rem;
  position: absolute;
  left: 60.5rem;
  top: 0.1rem;
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
  height: calc(100vh - 30rem);
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

export default Project