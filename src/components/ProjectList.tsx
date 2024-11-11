import styled from '@emotion/styled'
import React from 'react'
import ProjectListMock from '../mocks/ProjectListMock'

interface ProjectListProps {
    width?: string
}

const ProjectList = () => {
  return (
    <ProjectListWrapper>
        <ProjectListHeader>
            <ProjectListTitle flex={1.2}>제목</ProjectListTitle>
            <ProjectListTitle flex={1}>스프린트 개수</ProjectListTitle>
            <ProjectListTitle flex={1}>담당자</ProjectListTitle>
        </ProjectListHeader>
        <ProjectListContent>
            {ProjectListMock.response.map((item) =>  (
                <ProjectListElement key={item.projectId}>
                    <ProjectListItem flex={1.2}>{item.projectName}</ProjectListItem>
                    <ProjectListItem flex={1}>{item.sprintCount || 0}개</ProjectListItem>
                    <ProjectListItem flex={1}>{item.manager}</ProjectListItem>
                </ProjectListElement>
            ))}
        </ProjectListContent>
    </ProjectListWrapper>
  )
}

const ProjectListWrapper = styled.div<ProjectListProps>`
    border-radius: 0.8rem;
    border: 0.1rem solid #D4D4DB;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: ${({ width }) => width || '80rem'}
`

const ProjectListHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border-bottom: 0.1rem solid #D4D4DB;
`

const ProjectListTitle = styled.div<{ flex: number }>`
    display: flex;
    text-align: center;
    flex: ${({ flex }) => flex};
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #545669;
    font-size: 1.15rem;
    box-sizing: border-box;

`

const ProjectListContent = styled.div`

`

const ProjectListElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem;
    color: #555555;
    border-bottom: 0.1rem solid #D4D4DB;

    &:last-child {
        border-bottom: none;
    }
`

const ProjectListItem = styled.div<{ flex: number }>`
    flex: ${({ flex }) => flex};
    text-align: center;
    padding: 2px 0;
`

export default ProjectList
