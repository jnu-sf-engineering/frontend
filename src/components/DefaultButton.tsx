import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  width?: string;
  height?: string;
  text?: string;
  fontSize?: string;
}

const MainButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || '10.3125rem'};
  height: ${({ height }) => height || '3.125rem'};
  font-size: ${({ fontSize }) => fontSize || '1.3125rem'};
  background-color: #88afe3;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: white;
    color: black;
    border: 0.1rem solid #88afe3;
  }
`;

const DefaultButton: React.FC<ButtonProps> = ({
  width,
  height,
  text,
  fontSize,
}) => {
  return (
    <MainButton width={width} height={height} fontSize={fontSize}>
      {text}
    </MainButton>
  );
};

export default DefaultButton;
