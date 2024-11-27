import styled from '@emotion/styled';
import React from 'react';

const SprintBar = () => {
  return (
    <Container>
      <SprintBtn>스프린트 1</SprintBtn>
      <SprintBtn>스프린트 2</SprintBtn>
      <SprintBtn>스프린트 3</SprintBtn>
      <SprintBtn>스프린트 4</SprintBtn>
      <SprintBtn>스프린트 5</SprintBtn>
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

const SprintBtn = styled.button`
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
