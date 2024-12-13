import styled from '@emotion/styled';
import React, { useState } from 'react';
import DefaultButton from './DefaultButton';

interface TaskCardInputProps {
  width?: string;
  height?: string;
  onContentChange: (content: string) => void;
  onParticipantsChange: (participants: string[]) => void;
  onSubmit: () => void;
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

const TaskCardInput: React.FC<TaskCardInputProps> = ({
  width,
  height,
  onContentChange,
  onParticipantsChange,
  onSubmit,
}) => {
  const [content, setContent] = useState('');
  const [participants, setParticipants] = useState('');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onContentChange(e.target.value); // 부모로 내용 전달
  };

  const handleParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParticipants(e.target.value);
    onParticipantsChange(e.target.value.split(',')); // 콤마로 구분된 참여자 리스트
  };

  return (
    <KanbanBox
      width={width}
      height={height}
      onContentChange={onContentChange} // 추가
      onParticipantsChange={onParticipantsChange} // 추가
      onSubmit={onSubmit}
    >
      <ContentBox
        placeholder='할 일을 입력하세요'
        value={content}
        onChange={handleContentChange}
      />
      <NameBox>
        <input
          type='text'
          placeholder='참여자 (콤마로 구분)'
          value={participants}
          onChange={handleParticipantsChange}
        />
      </NameBox>
      {/* onSubmit에 undefined를 전달하지 않고, 실제로 전달된 함수를 사용 */}
      <DefaultButton text='완료' onClick={onSubmit} />
    </KanbanBox>
  );
};

export default TaskCardInput;
