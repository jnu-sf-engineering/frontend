import styled from '@emotion/styled';
import RetroSummary from '../components/RetroSummary';
import RetroNoticeModal from '../components/RetroNoticeModal';
import RetroPickerModal from '../components/RetroPickerModal';

const RetroPick = () => {
  return (
    <RetroWrapper>
      <Title>회고록 템플릿</Title>
      <Container>
        <RetroNoticeModal />
        <RetroContainer>
          <RetroPickerModal retroType='KPT' />
          <RetroPickerModal retroType='CSS' />
          <RetroPickerModal retroType='FourLs' />
        </RetroContainer>
      </Container>
    </RetroWrapper>
  );
};

export default RetroPick;

const RetroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 6rem 7.5rem;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  line-height: 1.85rem;
  gap: 4rem;
  border: 3px solid black;
`;

const RetroContainer = styled.div`
  display: flex;
  width: 72.125rem;
  justify-content: space-between;
  border: 3px solid black;
`;
