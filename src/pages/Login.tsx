import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

const Login = () => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    const savedId = localStorage.getItem('savedId')
    if (savedId) {
      setId(savedId)
      setIsCheck(true)
    }
  }, [])

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z]/g, ''); 
    setId(filteredValue);
  }

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z]/g, '');
    setPw(filteredValue);
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked)
  }

  const handleLoginSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isCheck) {
      localStorage.setItem('savedId', id)
    } else {
      localStorage.removeItem('savedId')
    }

    // 로그인 통신 추가 필요
  }

  return (
    <LoginWrapper>
        <Title>로그인</Title>
        <Input type='text' placeholder='아이디' value={id} onChange={handleIdChange} />
        <Input type='password' placeholder='비밀번호' required value={pw} onChange={handlePwChange} />
        <Options>
          <Checkbox type='checkbox' checked={isCheck} onChange={handleCheckboxChange} />
          <CheckboxLabel>아이디 저장</CheckboxLabel>
        </Options>
        <Button onClick={handleLoginSubmit}>로그인</Button>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 13rem);
`

const Title = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: #484848;
  font-weight: 600;
`

const Input = styled.input`
  width: 24.8rem;
  margin-bottom: 0.5rem;
  outline: none;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 25rem;
  padding-top: 0.3rem;
  padding-left: 0.2rem;
`
const Checkbox = styled.input`
  margin-right: 0.7rem;
`

const CheckboxLabel = styled.label`
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #445EA2;
  color: #ffffff;
  width: 25rem;
  border-radius: 0.5rem;
  height: 2.5rem;
  margin: 1rem;
  border: none;
  font-size: 0.95rem;
`

export default Login