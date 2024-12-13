import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TaskCard from '../components/TaskCard';
import { FaRegClock } from 'react-icons/fa';
import RetroSummary from '../components/RetroSummary';
import DefaultButton from '../components/DefaultButton';
import SprintBar from '../components/SprintBar';
import { useNavigate, useParams } from 'react-router';
import getSprint from '../api/getSprint';
import postSprint from '../api/postSprint';
import TaskCardInput from '../components/TaskCardInput';
import postCard from '../api/postCard';
import deleteTaskCard from '../api/deleteTaskCard';

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
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');
  const [newTaskParticipants, setNewTaskParticipants] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sprintName, setSprintName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sprintId, setSprintId] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId;

  const fetchSprintData = async () => {
    try {
      const data = await getSprint({ sprint_id: sprintId });
      setSprintData(data.response);
    } catch (error) {
      console.error('스프린트 데이터 요청 중 오류:', error);
      setSprintData(null);
    }
  };

  useEffect(() => {
    if (sprintId === null) return; // sprintId가 null일 경우 API 호출 방지

    fetchSprintData();
  }, [sprintId]);

  const handleTaskCardSubmit = async () => {
    if (newTaskContent && newTaskParticipants.length > 0) {
      try {
        await postCard({
          sprint_id: sprintId,
          content: newTaskContent,
          participants: newTaskParticipants,
          status: 'to_do',
        });
        const updatedData = await getSprint({ sprint_id: sprintId });
        setSprintData(updatedData.response);
        setIsInputVisible(false);
      } catch (error) {
        console.error('할 일 추가 중 오류 발생:', error);
      }
    } else {
      alert('내용과 참여자를 입력하세요.');
    }
  };

  const handlePostSprintClick = async () => {
    if (sprintName && startDate && endDate) {
      try {
        const response = await postSprint({
          project_id: Number(projectId),
          name: sprintName,
          start_date: startDate,
          end_date: endDate,
        }); // 생성된 스프린트 ID 설정
        setIsModalOpen(false);

        setSprintId(response.response.sprint_id);
        fetchSprintData();
      } catch (error) {
        console.error('스프린트 생성 중 오류 발생:', error);
      }
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  const handleDeleteCard = async (card_id: number) => {
    try {
      await deleteTaskCard({ card_id });
      setSprintData((prevData) => {
        if (!prevData) return prevData;
        return {
          ...prevData,
          cards: {
            ...prevData.cards,
            to_do: prevData.cards.to_do.filter(
              (card) => card.card_id !== card_id
            ),
            in_progress: prevData.cards.in_progress.filter(
              (card) => card.card_id !== card_id
            ),
            done: prevData.cards.done.filter(
              (card) => card.card_id !== card_id
            ),
          },
        };
      });
    } catch (error) {
      console.error('카드 삭제 중 오류 발생:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const summaryText =
    '회고 내용입니다.\n회고 요약 3줄 내용입니다.\n회고 요약 내용입니다.';

  if (sprintData == null) {
    return (
      <CenteredWrapper>
        <DefaultButton
          text='스프린트 생성'
          onClick={() => setIsModalOpen(true)}
        />
        {isModalOpen && (
          <ModalWrapper>
            <ModalContent>
              <h2>스프린트 생성</h2>
              <InputLabel>
                스프린트 이름:
                <InputField
                  type='text'
                  value={sprintName}
                  onChange={(e) => setSprintName(e.target.value)}
                />
              </InputLabel>
              <InputLabel>
                시작일:
                <InputField
                  type='datetime-local'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </InputLabel>
              <InputLabel>
                종료일:
                <InputField
                  type='datetime-local'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </InputLabel>
              <ModalActions>
                <Button onClick={() => setIsModalOpen(false)}>취소</Button>
                <Button onClick={handlePostSprintClick as any}>생성</Button>
              </ModalActions>
            </ModalContent>
          </ModalWrapper>
        )}
      </CenteredWrapper>
    );
  }

  return (
    <RetroWrapper>
      <SprintBarBox>
        <SprintBar sprintName={sprintData?.name} />
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
                ? `${formatDate(sprintData.start_date)} ~ ${formatDate(
                    sprintData.start_date
                  )}`
                : '데이터 없음'}
            </TimeInfoBox>
          </LeftInfoBox>
          <DefaultButton
            text='스프린트 완료'
            onClick={() => console.log(sprintData)}
          />
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
                    onDeleteCard={handleDeleteCard}
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
                    onDeleteCard={handleDeleteCard}
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
                    onDeleteCard={handleDeleteCard}
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

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  font-size: 1rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  width: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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
