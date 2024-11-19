import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import postAuthLogin from '../api/postAuthLogin'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

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
    const filteredValue = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
    setId(filteredValue)
  }

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g, '')

    setPw(filteredValue)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked)
  }

  const postLogin = useMutation({
    mutationFn: postAuthLogin,
    // user_id에서 토큰 형식으로 바꾸기로 했으니 백엔드와 얘기해보고 추후 코드 변경 예정
    // onSuccess: (data) => {
    //   if (data.response.token) {
    //     localStorage.setItem('token', data.response.token)
    //   }
    // }
  })

  const handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isCheck) {
      localStorage.setItem('savedId', id)
    } else {
      localStorage.removeItem('savedId')
    }

    // 로그인 통신 코드
    if (id !== null || pw !== null) {
      await postLogin.mutateAsync({email: id, password: pw})
    } else {
      alert('올바른 아이디와 비밀번호를 입력해주세요.')
    }
    
    await postLogin.mutateAsync({ email: id, password: pw })
    navigate('/')
  }

  return (
    <LoginWrapper>
        <Logo>momentum</Logo>
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
    height: calc(100vh - 3rem);
`

const Logo = styled.div`
  font-size: 2.5rem;
  color: #54689F;
  font-weight: 700;
  margin-bottom: 2rem;
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
  cursor: pointer;
`

export default Login