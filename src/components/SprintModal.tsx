import React, { useState } from 'react';
import styled from '@emotion/styled';
import DefaultButton from './DefaultButton';

// Props 타입 정의
interface SprintModalProps {
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    startDate: string;
    endDate: string;
  }) => void;
}

const SprintModal: React.FC<SprintModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  // 이벤트 핸들러 타입 지정
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>스프린트 생성</h2>
        <form>
          <label>
            이름:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            시작일:
            <input
              type='date'
              name='startDate'
              value={formData.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            종료일:
            <input
              type='date'
              name='endDate'
              value={formData.endDate}
              onChange={handleChange}
            />
          </label>
        </form>
        <ButtonContainer>
          <DefaultButton text='취소' onClick={onClose} />
          <DefaultButton text='생성' onClick={handleSubmit} />
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SprintModal;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
