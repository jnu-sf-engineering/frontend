import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TaskCard from '../components/TaskCard';
import { FaRegClock } from 'react-icons/fa';
import RetroSummary from '../components/RetroSummary';
import DefaultButton from '../components/DefaultButton';
import SprintBar from '../components/SprintBar';
import { useNavigate } from 'react-router';
import getSprint from '../api/getSprint';
import postSprint from '../api/postSprint';
import TaskCardInput from '../components/TaskCardInput';
import postCard from '../api/postCard';

interface Card {
  card_id: number;
  content: string;
  participants: string[];
  status: string;
}

interface SprintData {
  sprint_id: number;
  name: string;
  start_date: string;
  end_date: string;
  cards: {
    done: Card[];
    in_progress: Card[];
    to_do: Card[];
  };
}

const Kanban = () => {
  const [sprintData, setSprintData] = useState<SprintData | null>(null);
  const [isInputVisible, setIsInputVisible] = useState(false); // TaskCardInput 보이기/숨기기 상태
  const [newTaskContent, setNewTaskContent] = useState(''); // 새 할 일 내용
  const [newTaskParticipants, setNewTaskParticipants] = useState<string[]>([]); // 새 할 일 참여자

  const navigate = useNavigate();
  const projectId = 3;
  const sprintId = 5;

  useEffect(() => {
    const fetchSprintData = async () => {
      try {
        const data = await getSprint({ sprint_id: sprintId });
        console.log('스프린트 요청중', data.response);
        setSprintData(data.response);
      } catch (error) {
        console.error('스프린트 데이터 요청 중 오류:', error);
        setSprintData(null);
      }
    };

    fetchSprintData();
  }, [sprintId, sprintData]);

  const handleNavigate = () => {
    navigate('/retropick', { state: { projectId, sprintId } });
  };

  const handleTaskCardSubmit = async () => {
    if (newTaskContent && newTaskParticipants.length > 0) {
      try {
        await postCard({
          sprint_id: sprintId,
          content: newTaskContent,
          participants: newTaskParticipants,
          status: 'to_do', // 상태를 'to_do'로 설정
        });
        setSprintData(await getSprint({ sprint_id: sprintId })); // 스프린트 데이터 재요청
        setIsInputVisible(false); // 입력 폼 숨기기
      } catch (error) {
        console.error('할 일 추가 중 오류 발생:', error);
      }
    } else {
      alert('내용과 참여자를 입력하세요.');
    }
  };

  const handlePostSprintClick = async () => {
    try {
      // 스프린트 생성
      await postSprint({
        project_id: 10,
        name: 'Sprint 3',
        start_date: '2024-12-12 10:40:37',
        end_date: '2024-12-12 12:40:37',
      });

      // 스프린트 생성 후 바로 getSprint 호출하여 데이터를 최신 상태로 가져오기
      const data = await getSprint({ sprint_id: sprintId });
      setSprintData(data.response);
    } catch (error) {
      console.error('스프린트 생성 중 오류 발생:', error);
    }
  };

  const summaryText =
    '회고 내용입니다.\n회고 요약 3줄 내용입니다.\n회고 요약 내용입니다.';

  if (sprintData === null) {
    return (
      <CenteredWrapper>
        <DefaultButton text='스프린트 생성' onClick={handlePostSprintClick} />
      </CenteredWrapper>
    );
  }

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
            <SprintNumber>{sprintData?.name || '스프린트 없음'}</SprintNumber>
            <TimeInfoBox>
              <FaRegClock />
              {sprintData
                ? `${sprintData.start_date} ~ ${sprintData.end_date}`
                : '데이터 없음'}
            </TimeInfoBox>
          </LeftInfoBox>
          <DefaultButton
            text='스프린트 완료'
            onClick={() => console.log(sprintData)}
          />
          <DefaultButton text='스프린트 생성' onClick={handlePostSprintClick} />
        </DetailInfoBox>
        <RetroContainer>
          {sprintData && sprintData.cards && (
            <>
              <KanbanBox>
                <KanBanListTitleBox>
                  <KanBanListTitle>할 일</KanBanListTitle>
                  <AddBtn onClick={() => setIsInputVisible(!isInputVisible)}>
                    {isInputVisible ? '-' : '+'}
                  </AddBtn>
                </KanBanListTitleBox>
                {isInputVisible && (
                  <TaskCardInput
                    onContentChange={setNewTaskContent} // 입력된 내용 관리
                    onParticipantsChange={setNewTaskParticipants} // 참여자 관리
                    onSubmit={handleTaskCardSubmit} // 완료 클릭 시 제출
                  />
                )}
                {sprintData.cards.to_do?.map((card) => (
                  <TaskCard
                    key={card.card_id}
                    taskContent={card.content}
                    authorName={card.participants.join(', ')}
                    card_id={card.card_id}
                    currentStatus={card.status}
                  />
                ))}
              </KanbanBox>
              <KanbanBox>
                <KanBanListTitleBox>
                  <KanBanListTitle>진행중</KanBanListTitle>
                </KanBanListTitleBox>
                {sprintData.cards.in_progress?.map((card) => (
                  <TaskCard
                    key={card.card_id}
                    taskContent={card.content}
                    authorName={card.participants.join(', ')}
                    card_id={card.card_id}
                    currentStatus={card.status}
                  />
                ))}
              </KanbanBox>
              <KanbanBox>
                <KanBanListTitleBox>
                  <KanBanListTitle>완료</KanBanListTitle>
                </KanBanListTitleBox>
                {sprintData.cards.done?.map((card) => (
                  <TaskCard
                    key={card.card_id}
                    taskContent={card.content}
                    authorName={card.participants.join(', ')}
                    card_id={card.card_id}
                    currentStatus={card.status}
                  />
                ))}
              </KanbanBox>
            </>
          )}
        </RetroContainer>
      </Container>
    </RetroWrapper>
  );
};

export default Kanban;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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
