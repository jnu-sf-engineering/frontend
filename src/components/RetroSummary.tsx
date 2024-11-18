import styled from '@emotion/styled';
import React from 'react';

interface RetroSummaryDesignProps {
  width?: string
}

interface RetroSummaryContentProps {
  content: string
}

type RetroSummaryProps = RetroSummaryDesignProps & RetroSummaryContentProps

const RetroSummary = ({ content, width }: RetroSummaryProps) => {
  return (
    <>
      <RetroNoticeTitle>회고 요약</RetroNoticeTitle>
      <RetroNoticeWrapper width={width}>
        <RetroNoticeContent>{content}</RetroNoticeContent>
      </RetroNoticeWrapper>
    </>
  );
};

const RetroNoticeWrapper = styled.div<RetroSummaryDesignProps>`
  border-radius: 0.8rem;
  border: 0.13rem solid #BEBEBE;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  width: ${({ width }) => width || '80rem'};
  position: relative;
`;

const RetroNoticeTitle = styled.div`
  display: flex;
  width: 8rem;
  height: 2rem;
  position: absolute;
  background-color: white;
  z-index: 1;
  left: 30px;
  top: 0px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #878993;
  font-weight: 600;
`;

const RetroNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1.7rem 3.2rem;
  font-size: 1.1rem;
  color: #505050;
  justify-content: space-between;
  white-space: pre-line;
`;

export default RetroSummary;
