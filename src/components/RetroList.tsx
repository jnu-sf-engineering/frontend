import styled from '@emotion/styled'
import { useNavigate } from 'react-router'

interface RetroListDesignProps {
  width?: string
}

interface retroData {
  retroId: number
  sprintId: number
  sprintName: string
  startDate: string
  endDate: string
  tempName: string
  manager: string
}

interface RetroListProps {
  data: retroData[]
}

const RetroList = ({data}: RetroListProps) => {

  const navigate = useNavigate()

  const handleNavigate = (retroId: number) => {
    navigate(`/retrodetail/${retroId}`)
  }

  return (
    <RetroListWrapper>
      <RetroListHeader>
        <RetroListTitle>제목</RetroListTitle>
        <RetroListTitle>기간</RetroListTitle>
        <RetroListTitle>작성자</RetroListTitle>
        <RetroListTitle>회고록 유형</RetroListTitle>
      </RetroListHeader>
      <RetroListContent>
        {data?.map((item) => (
          <RetroListElement key={item.retroId} onClick={() => handleNavigate(item.retroId)}>
            <RetroListItem>{item.sprintName}</RetroListItem>
            <RetroListItem>{`${item.startDate} ~ ${item.endDate}`}</RetroListItem>
            <RetroListItem>{item.manager}</RetroListItem>
            <RetroListItem>{item.tempName}</RetroListItem>
          </RetroListElement>
        ))}
      </RetroListContent>
    </RetroListWrapper>
  )
}

const RetroListWrapper = styled.div<RetroListDesignProps>`
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
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`

const RetroListItem = styled.div<{ flexGrow?: number }>`
  flex: 1;
  text-align: center;
`

export default RetroList
