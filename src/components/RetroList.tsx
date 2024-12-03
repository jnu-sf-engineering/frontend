import styled from '@emotion/styled'
import React from 'react'
import RetroListMock from '../mocks/RetroListMock'

interface RetroListProps {
    width?: string
}

const RetroList = () => {
  return (
    <RetroListWrapper>
        <RetroListHeader>
            <RetroListTitle>제목</RetroListTitle>
            <RetroListTitle>기간</RetroListTitle>
            <RetroListTitle>작성자</RetroListTitle>
            <RetroListTitle>회고록 유형</RetroListTitle>
        </RetroListHeader>
        <RetroListContent>
            {RetroListMock.response.retrospects.map((item) =>  (
                <RetroListElement key={item.retro_id}>
                    <RetroListItem>{item.sprint_name}</RetroListItem>
                    <RetroListItem>{`${item.start_date} ~ ${item.end_date}`}</RetroListItem>
                    <RetroListItem>{item.manager}</RetroListItem>
                    <RetroListItem>{item.temp_name}</RetroListItem>
                </RetroListElement>
            ))}
        </RetroListContent>
    </RetroListWrapper>
  )
}

const RetroListWrapper = styled.div<RetroListProps>`
    border-radius: 0.8rem;
    border: 0.13rem solid #D4D4DB;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: ${({ width }) => width || '60rem'}
`

const RetroListHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border-bottom: 0.1rem solid #D4D4DB;
`

const RetroListTitle = styled.div`
    display: flex;
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #545669;
    font-size: 1.15rem;
`

const RetroListContent = styled.div`

`

const RetroListElement = styled.div`
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

const RetroListItem = styled.div<{ flexGrow?: number }>`
    flex: 1;
    text-align: center;
`

export default RetroList