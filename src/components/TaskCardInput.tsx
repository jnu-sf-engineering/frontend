import styled from '@emotion/styled';
import React from 'react';
import DefaultButton from './DefaultButton';

interface TaskCardInputProps {
  width?: string;
  height?: string;
}

const KanbanBox = styled.div<TaskCardInputProps>`
  box-sizing: border-box;
  width: ${({ width }) => width || '18.25rem'};
  height: ${({ height }) => height || '6.625rem'};
  background-color: white;
  cursor: pointer;
  color: #505050;
  border: 0.1875rem solid #88afe3;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.textarea`
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  height: 80%;
  font-size: 1.25rem;
  color: #505050;
  display: flex;
  border: none;
  resize: none;
  ::placeholder {
    color: #c7c8cb;
  }
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

const TaskCardInput: React.FC<TaskCardInputProps> = ({ width, height }) => {
  return (
    <KanbanBox width={width} height={height}>
      <ContentBox placeholder='할 일을 입력하세요'></ContentBox>
      <NameBox>
        <DefaultButton
          text='완료'
          width='3.375rem'
          height='1.5rem'
          fontSize='1rem'
        />
      </NameBox>
    </KanbanBox>
  );
};

export default TaskCardInput;
