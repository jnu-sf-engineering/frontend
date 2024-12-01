import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import postProject from '../api/postProject'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const ProjectCreateModal: React.FC<ModalProps> = ({ isOpen, onClose}) => {

  const queryClient = useQueryClient()
  const [newProject, setNewProject] = useState('')
  const manager = localStorage.getItem('nickname')

  const mutationPostProject = useMutation({
    mutationFn: postProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project'] })
    }
  })

  if (!isOpen) return null

  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  const handleConfirm = async () => {
    mutationPostProject.mutate({ projectName: newProject, manager: manager || '' })
    onClose()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject(event?.target.value)
  }

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>프로젝트 생성</ModalTitle>
        <ModalInput value={newProject} onChange={handleInputChange} placeholder='프로젝트 제목을 입력하세요' />
        <ModalBtnContainer>
            <DoneBtn onClick={handleConfirm}>확인</DoneBtn>
        </ModalBtnContainer>
      </ModalContainer>
    </ModalBackground>,
    modalRoot
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #b5c3e9;
`

const ModalTitle = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding: 5px;
  font-weight: 500;
`

const ModalInput = styled.input`
  width: 96%;
  padding: 0px 7px;
  margin: 20px 0px;
  box-sizing: border-box;
  border: none;
  outline: none;
`

const ModalBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const DoneBtn = styled.div`
  padding: 0 5px;
  color: #6d86cb;
  cursor: pointer;
`

export default ProjectCreateModal
