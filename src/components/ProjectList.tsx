import styled from '@emotion/styled'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import putProject from '../api/putProject'
import ProjectCreateModal from './ProjectCreateModal'

interface ProjectDesign {
  width?: string
}

interface Projects {
  projectId: number
  projectName: string
  sprintCount?: number
  manager: string
}
interface ProjectProps {
  projects: Projects[]
}

type ProjectListProps = ProjectDesign & ProjectProps

const ProjectList: React.FC<ProjectListProps> = ({ width, projects }) => {

  const queryClient = useQueryClient()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [newValue, setNewValue] = useState('')
  const manager = localStorage.getItem('nickname')
  const [editId, setEditId] = useState<number | null>(null)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const mutationPutProject = useMutation({
    mutationFn: putProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project'] })
      setIsEditModalOpen(false)
    }
  })

  const handleEdit = (projectId: number) => {
    setEditId(projectId)
    setIsEditModalOpen(true)
  }

  const handleConfirmEdit = () => {
    if (editId === null) {
      return
    }
    mutationPutProject.mutate({ projectId: editId, projectName: newValue, manager: manager || '' })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event?.target.value)
  }


  return (
    <ProjectListWrapper width={width} projects={projects}>
      <ProjectListHeader>
        <ProjectListTitle flex={1.2}>제목</ProjectListTitle>
        <ProjectListTitle flex={1}>스프린트 개수</ProjectListTitle>
        <ProjectListTitle flex={1}>담당자</ProjectListTitle>
      </ProjectListHeader>
      <ProjectListContent>
        {projects?.map((item) => (
          <ProjectListElement key={item.projectId}>
            <ProjectListItem flex={1.2}>
              {item.projectName}
              <ProjectItemOption className='project-item-option'>
                <ProjectModifyIcon onClick={() => handleEdit(item.projectId)} className='material-symbols-outlined'>edit</ProjectModifyIcon>
                <ProjectDeleteIcon className='material-symbols-outlined'>delete</ProjectDeleteIcon>
              </ProjectItemOption>
            </ProjectListItem>
            <ProjectListItem flex={1}>{item.sprintCount || 0}개</ProjectListItem>
            <ProjectListItem flex={1}>{item.manager}</ProjectListItem>
          </ProjectListElement>
        ))}
      </ProjectListContent>
      {isEditModalOpen && (
        <ProjectCreateModal title='프로젝트 수정' isOpen={isEditModalOpen} onClose={() => {setIsEditModalOpen(false); setEditId(null);}} onConfirm={handleConfirmEdit} value={newValue} onChange={handleInputChange}
        />
      )}
    </ProjectListWrapper>
    
  )
}

const ProjectListWrapper = styled.div<ProjectListProps>`
  border-radius: 0.8rem;
  border: 0.1rem solid #D4D4DB;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: ${({ width }) => width || '60rem'}
`

const ProjectListHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-bottom: 0.1rem solid #D4D4DB;
`

const ProjectListTitle = styled.div<{ flex: number }>`
  display: flex;
  flex: ${({ flex }) => flex || 1};
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #545669;
  font-size: 1.15rem;
  box-sizing: border-box;
`

const ProjectListContent = styled.div``

const ProjectListElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem;
  color: #555555;
  border-bottom: 0.1rem solid #D4D4DB;
  cursor: pointer;
  position: relative;

  &:hover .project-item-option {
    visibility: visible;
    opacity: 1;
  }

  &:last-child {
    border-bottom: none;
  }
`

const ProjectListItem = styled.div<{ flex: number }>`
  flex: ${({ flex }) => flex || 1};
  text-align: center;
  padding: 0.2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`

const ProjectItemOption = styled.div`
  margin-left: 0.8rem;
  visibility: hidden;
  opcatity: 0;
  transition: opacity 0.2s;
  color: #76787B;
`

const ProjectModifyIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 0.4rem;

  &:hover {
    color: #6796D0;
  }
`

const ProjectDeleteIcon = styled.div`
  font-size: 1.2rem;

  &:hover {
    color: #B94A42;
  }
`

export default ProjectList
