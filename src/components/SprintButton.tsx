import styled from '@emotion/styled';
import React from 'react';

interface SprintBtnProps {
  text?: string;
}

const SprintButton: React.FC<SprintBtnProps> = ({ text }) => {
  return <SprintBtn>{text}</SprintBtn>;
};

export default SprintButton;

const SprintBtn = styled.button<SprintBtnProps>`
  box-sizing: border-box;
  width: 7.5rem;
  height: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: #adb0ba;

  &:hover {
    color: black;
    border: 0.1rem solid black;
  }
`;
