import styled from '@emotion/styled';
import React from 'react';

// interface BoxProps {
//   width?: string;
//   height?: string;
// }

interface TaskCardProps {
  width?: string;
  height?: string;
  taskContent?: string;
  authorName?: string;
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

const TaskCard: React.FC<TaskCardProps> = ({
  taskContent,
  authorName,
  width,
  height,
}) => {
  return (
    <KanbanBox width={width} height={height}>
      <ContentBox>{taskContent}</ContentBox>
      <NameBox>{authorName}</NameBox>
    </KanbanBox>
  );
};

export default TaskCard;
