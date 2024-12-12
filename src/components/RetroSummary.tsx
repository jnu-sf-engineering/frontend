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
    <RetroWrapper>
      <RetroNoticeTitle>회고 요약</RetroNoticeTitle>
      <RetroNoticeWrapper width={width}>
        <RetroNoticeContent>{content}</RetroNoticeContent>
      </RetroNoticeWrapper>
    </RetroWrapper>
  );
};


const RetroWrapper = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
`

const RetroNoticeWrapper = styled.div<RetroSummaryDesignProps>`
  border-radius: 0.8rem;
  border: 0.13rem solid #D4D4DB;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: ${({ width }) => width || '60rem'};
  position: relative;
`;

const RetroNoticeTitle = styled.div`
  display: flex;
  width: 7rem;
  height: 2rem;
  position: absolute;
  background-color: white;
  z-index: 1;
  left: 3.5rem;
  top: -1rem;
  font-size: 1.3rem;
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
  padding: 2rem 3.2rem;
  font-size: 1rem;
  color: #505050;
  justify-content: space-between;
  white-space: pre-line;
  margin-top: 0.3rem;
`;

export default RetroSummary;
