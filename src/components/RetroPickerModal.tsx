import styled from '@emotion/styled';
import React from 'react';
import DefaultButton from './DefaultButton';

const Container = styled.div`
  width: 20rem;
  height: 22.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RetroTypeBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const RetroTypeTitle = styled.h1`
  font-size: 2.625rem;
  margin: 0;
  color: #423c3c;
`;

const RetroTypeSubTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: #a1a1a1;
`;

const RetroTypeContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 9.375rem;
  background-color: white;
  color: #505050;
  border: 0.1875rem solid #88afe3;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-size: 1.125rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const RetroPickerModal = () => {
  return (
    <Container>
      <RetroTypeBox>
        <RetroTypeTitle>KPT</RetroTypeTitle>
        <RetroTypeSubTitle>Keep-Problem-Try</RetroTypeSubTitle>
      </RetroTypeBox>
      <RetroTypeContentBox>
        Keep(잘한점, 유지할 점), Problem(문제점, 개선이 필요한 점), Try(앞으로
        시도해볼 점)으로 나누어 회고하는 방식
      </RetroTypeContentBox>
      <ButtonBox>
        <DefaultButton width='10.25rem' height='3.125rem' text='KPT Template' />
      </ButtonBox>
    </Container>
  );
};

export default RetroPickerModal;
