import styled from '@emotion/styled'
import React, { useState } from 'react'
import DefaultButton from '../components/DefaultButton'
import ProjectList from '../components/ProjectList'
import ProjectCreateModal from '../components/ProjectCreateModal'

const Project = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateProject = () => {
    setIsModalOpen(true)
    console.log('모달창 열림')
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <ProjectWrapper>
      <Title>내 프로젝트</Title>
      <Container>
        <BtnContainer>
          <DefaultButton text='프로젝트 생성하기' width='9.2rem' height='2.5rem' fontSize='1rem' onClick={handleCreateProject} />
        </BtnContainer>
        <ProjectList />
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
  width: 100%
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 0.7rem;
`

export default Project