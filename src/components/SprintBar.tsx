import styled from '@emotion/styled';
import React from 'react';

interface BarProps {
  sprintName?: string;
}

const SprintBar: React.FC<BarProps> = ({ sprintName }) => {
  // 함수 선언에서 괄호 위치 수정
  return (
    <Container>
      <SprintBtn>{sprintName}</SprintBtn>
      <SprintBtn>+</SprintBtn>
    </Container>
  );
};

export default SprintBar;

const Container = styled.div`
  width: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1875rem;
`;

const SprintBtn = styled.button<{ color?: string }>`
  // color 속성에 타입 정의 추가
  width: 8.6875rem;
  height: 3.625rem;
  border: none;
  background-color: #dadfee;
  color: ${({ color }) => color || '#7A828D'};
  font-size: 1.25rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #88afe3;
    border: 0.1rem solid #88afe3;
  }
`;
