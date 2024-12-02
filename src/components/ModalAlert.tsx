import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
interface ModalProps {
  text: string
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
}

const ModalAlert: React.FC<ModalProps> = ({ text, isOpen, onClose, onConfirm }) => {

  if (!isOpen) return null

  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  const handleConfirmClick = () => {
    if (onConfirm) {
      onConfirm()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalText>{text}</ModalText>
        <ModalBtnContainer>
            <CancelBtn onClick={handleCancel}>취소</CancelBtn>
            <DoneBtn onClick={handleConfirmClick}>확인</DoneBtn>
        </ModalBtnContainer>
      </ModalContainer>
    </ModalBackground>,
    modalRoot
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  width: 350px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #b5c3e9;
`

const ModalText = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  white-space: pre-wrap;
  line-height: 1.5rem;
`

const ModalBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const DoneBtn = styled.div`
  padding: 0 0.3rem;
  color: #6d86cb;
  cursor: pointer;
`

const CancelBtn = styled.div`
  padding: 0 0.8rem;
  color: #636569;
  cursor: pointer;
`

export default ModalAlert
