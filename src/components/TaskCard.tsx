import styled from '@emotion/styled';
import React, { useState } from 'react';
import postTaskCard from '../api/postTaskCard';

interface TaskCardProps {
  width?: string;
  height?: string;
  taskContent?: string;
  authorName?: string;
  card_id: number;
  currentStatus: string;
}

const KanbanBox = styled.div<TaskCardProps>`
  box-sizing: border-box;
  width: ${({ width }) => width || '18.25rem'};
  height: ${({ height }) => height || '9.375rem'};
  background-color: white;
  cursor: pointer;
  color: #505050;
  border: 0.1875rem solid #88afe3;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  height: 80%;
  font-size: 1.25rem;
  color: #505050;
  display: flex;
`;

const NameBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  font-size: 1rem;
  color: #aeaaaa;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SelectBox = styled.div`
  visibility: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? 'visible' : 'hidden'};
  opacity: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  box-sizing: border-box;
  width: 4rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: absolute;
  top: 50%;
`;

const SelectBtn = styled.button`
  width: 100%;
  background-color: #88afe3;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const TaskCard: React.FC<TaskCardProps> = ({
  taskContent,
  authorName,
  width,
  height,
  card_id,
  currentStatus,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(currentStatus);

  const handleClick = () => {
    setIsVisible(!isVisible); // 클릭 시 보이거나 숨김
  };

  const handleStatusChange = async (newStatus: string) => {
    try {
      await postTaskCard({
        content: taskContent || '',
        participants: [authorName || ''],
        status: newStatus,
        card_id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KanbanBox
      width={width}
      height={height}
      card_id={card_id}
      currentStatus={currentStatus}
      onClick={handleClick}
    >
      <ContentBox>{taskContent}</ContentBox>
      <NameBox>{authorName}</NameBox>
      <SelectBox isVisible={isVisible}>
        <SelectBtn onClick={() => handleStatusChange('to_do')}>할 일</SelectBtn>
        <SelectBtn onClick={() => handleStatusChange('in_progress')}>
          진행중
        </SelectBtn>
        <SelectBtn onClick={() => handleStatusChange('done')}>완료</SelectBtn>
      </SelectBox>
    </KanbanBox>
  );
};

export default TaskCard;
