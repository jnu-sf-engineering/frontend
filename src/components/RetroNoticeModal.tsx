import styled from '@emotion/styled';
import React from 'react';
import { RETRO_NOTICE_CONTENT } from '../constants/retroNoticeContent';

interface RetroListProps {
  width?: string;
}

const RetroNoticeWrapper = styled.div<RetroListProps>`
  border-radius: 0.8rem;
  border: 0.1875rem solid #d4d4db;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 72.125rem;
  height: 14.25rem;
  position: relative;
`;

const RetroNoticeContent = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2.25rem;
  font-size: 20px;
  color: #505050;
  justify-content: space-between;
`;

const RetroNoticeTitle = styled.div`
  display: flex;
  width: 17.5rem;
  height: 2.125rem;
  position: absolute;
  background-color: white;
  z-index: 1;
  left: 50px;
  top: 0px;
  font-size: 1.75rem;
  align-items: center;
  justify-content: center;
  color: #878993;
  font-weight: 900;
`;

const RetroNoticeModal = () => {
  return (
    <>
      <RetroNoticeTitle>스프린트 회고의 중요성</RetroNoticeTitle>
      <RetroNoticeWrapper>
        <RetroNoticeContent>
          {RETRO_NOTICE_CONTENT.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </RetroNoticeContent>
      </RetroNoticeWrapper>
    </>
  );
};

export default RetroNoticeModal;
