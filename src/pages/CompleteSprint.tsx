import styled from '@emotion/styled';
import TaskCard from '../components/TaskCard';
import SprintButton from '../components/SprintButton';
import { FaRegClock } from 'react-icons/fa';

const CompleteSprint = () => {
  return (
    <RetroWrapper>
      <Title>지난 스프린트 확인하기</Title>
      <Container>
        <SprintBox>
          <SprintButton text='스프린트 1' />
          <SprintButton text='스프린트 2' />
          <SprintButton text='스프린트 3' />
          <SprintButton text='스프린트 4' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
          <SprintButton text='스프린트 5' />
        </SprintBox>
        <DetailInfoBox>
          <TimeInfoBox>
            <FaRegClock />
            9.30 ~ 10.13 (4일)
          </TimeInfoBox>
          <TackBox>미완료 5개, 완료 1개</TackBox>
        </DetailInfoBox>
        <RetroContainer>
          <KanbanBox>
            <KanBanListTitle>할 일</KanBanListTitle>
            {/* <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
          </KanbanBox>
          <KanbanBox>
            <KanBanListTitle>진행중</KanBanListTitle>
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
            <KanBanListTitle>완료</KanBanListTitle>
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            />
            <TaskCard
              taskContent='메인화면 컴포넌트 제작'
              authorName='박경준'
            /> */}
          </KanbanBox>
        </RetroContainer>
      </Container>
    </RetroWrapper>
  );
};

export default CompleteSprint;

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

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 3rem;
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

const SprintBox = styled.div`
  display: flex;
  width: 61rem;
  height: 2rem;
  gap: 2.75rem;
  overflow-x: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const DetailInfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 61rem;
  height: 2rem;
  justify-content: space-between;
  padding: 0 1rem;
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

const TackBox = styled.div`
  height: 2rem;
  display: flex;
  font-size: 1.25rem;
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

const KanBanListTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  font-size: 1.6rem;
  color: #524d4d;
  font-weight: 500;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
`;
