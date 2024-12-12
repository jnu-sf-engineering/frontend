import styled from '@emotion/styled';
import TaskCard from '../components/TaskCard';
import { FaRegClock } from 'react-icons/fa';
import RetroSummary from '../components/RetroSummary';
import DefaultButton from '../components/DefaultButton';
import SprintBar from '../components/SprintBar';
import { useNavigate } from 'react-router';
const Kanban = () => {
  const navigate = useNavigate()
  const projectId = 3
  const sprintId = 4

  const handleNavigate = () => {
    navigate('/retropick', { state: { projectId, sprintId } })
  }

  const summaryText =
    '회고 내용입니다.\n회고 요약 3줄 내용입니다.\n회고 요약 내용입니다.';
  return (
    <RetroWrapper>
      <SprintBarBox>
        <SprintBar />
      </SprintBarBox>
      <Container>
        <SummartContainer>
          <RetroSummary content={summaryText} width='100%' />
        </SummartContainer>
        <DetailInfoBox>
          <LeftInfoBox>
            <SprintNumber>스프린트 1</SprintNumber>
            <TimeInfoBox>
              <FaRegClock />
              9.30 ~ 10.13 (4일)
            </TimeInfoBox>
          </LeftInfoBox>
          <DefaultButton text='스프린트 완료' onClick={handleNavigate} />
        </DetailInfoBox>
        <RetroContainer>
          <KanbanBox>
            <KanBanListTitleBox>
              <KanBanListTitle>할 일</KanBanListTitle>
              <AddBtn>+</AddBtn>
            </KanBanListTitleBox>
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
          </KanbanBox>
          <KanbanBox>
            <KanBanListTitleBox>
              <KanBanListTitle>진행중</KanBanListTitle>
              <AddBtn>+</AddBtn>
            </KanBanListTitleBox>
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
          </KanbanBox>
          <KanbanBox>
            <KanBanListTitleBox>
              <KanBanListTitle>완료</KanBanListTitle>
              <AddBtn>+</AddBtn>
            </KanBanListTitleBox>
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
          </KanbanBox>
        </RetroContainer>
      </Container>
    </RetroWrapper>
  );
};

export default Kanban;

const RetroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 6rem 7.5rem;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 61rem;
  position: relative;
  line-height: 1.85rem;
  gap: 2rem;
`;

const SummartContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 61rem;
`;

const DetailInfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 61rem;
  height: 2rem;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LeftInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SprintNumber = styled.div`
  display: flex;
  color: #423c3c;
  font-size: 2.25rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const TimeInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2rem;
  font-size: 1.125rem;
  color: #756d6d;
`;

const RetroContainer = styled.div`
  display: flex;
  width: 61rem;
  justify-content: space-between;
`;

const KanbanBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 33%;
  align-items: center;
`;

const KanBanListTitleBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 90%;
  font-size: 1.6rem;
  color: #524d4d;
  font-weight: 500;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const KanBanListTitle = styled.div`
  font-size: 1.6rem;
  color: #524d4d;
  font-weight: 500;
`;

const AddBtn = styled.div`
  cursor: pointer;
  color: #524d4d;
  font-weight: 500;
  font-size: 1.75rem;
`;

const SprintBarBox = styled.div`
  position: fixed;
  left: 12rem;
`;
