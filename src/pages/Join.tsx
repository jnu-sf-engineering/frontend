import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import postRegister from '../api/postRegister'

const Join = () => {

  const navigate = useNavigate()

  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pwCheck, setPwCheck] = useState('')
  const [idError, setIdError] = useState('')
  const [isPwVisible, setIsPwVisible] = useState(false)
  const [isPwCheckVisible, setIsPwCheckVisible] = useState(false)

  const [errorMessages, setErrorMessages] = useState({
    nickname: '',
    email: '',
    pw: '',
    pwCheck: ''
  })

  const postJoin = useMutation({
    mutationFn: postRegister,
  })

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
    setErrorMessages((prev) => ({ ...prev, nickname: '' }))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, '');
    setEmail(value)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setIdError('* 유효한 이메일 형식이 아닙니다.')
    } else {
      setIdError('')
    }
    setErrorMessages((prev) => ({ ...prev, email: '' }))
  }

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g, '')
    setPw(filteredValue)
    setErrorMessages((prev) => ({ ...prev, pw: '' }))
  }

  const handlePwCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g, '')
    setPwCheck(filteredValue)
    setErrorMessages((prev) => ({ ...prev, pwCheck: '' }))
  }

  const handleJoinSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const errors = {
      nickname: !nickname ? '* 닉네임을 입력해주세요' : '',
      email: !email ? '* 이메일을 입력해주세요' : '',
      pw: !pw ? '* 비밀번호를 입력해주세요' : '',
      pwCheck: !pwCheck ? '* 비밀번호 확인을 입력해주세요' : '',
    }

    // 회원가입 통신 코드
    // if (!nickname || !email || !pw || !pwCheck) {
    //   alert('모든 입력값을 입력해주세요')
    //   return
    // }
    if (pw !== pwCheck) {
      errors.pwCheck = '* 비밀번호와 비밀번호 확인 값이 일치하지 않습니다'
    }
    setErrorMessages(errors)

    if (Object.values(errors).some((msg) => msg)) return

    await postJoin.mutateAsync({email, password: pw, nickname})
    alert('회원가입에 성공하였습니다! 로그인해주세요')
    navigate('/login')
  }

  return (
    <JoinWrapper>
      <Logo>momentum</Logo>
      <Title>회원가입</Title>
      <InputWrapper>
        <Line>
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </Line>
        {errorMessages.nickname && <ErrorMessage>{errorMessages.nickname}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Line>
          <Label>이메일</Label>
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmailChange}
          />
        </Line>
        {idError && <ErrorMessage>{idError}</ErrorMessage>}
        {errorMessages.email && <ErrorMessage>{errorMessages.email}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Line>
          <Label>비밀번호</Label>
          <PwWrapper>
            <Input
              type={isPwVisible ? 'text' : 'password'}
              placeholder="비밀번호를 입력하세요"
              required
              value={pw}
              onChange={handlePwChange}
            />
            <EyeIcon className="material-symbols-outlined" onClick={() => setIsPwVisible((prev) => !prev)}>
              {isPwVisible ? 'visibility_off' : 'visibility'}
            </EyeIcon>
          </PwWrapper>
        </Line>
        {errorMessages.pw && <ErrorMessage>{errorMessages.pw}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Line>
          <Label>비밀번호 확인</Label>
          <PwWrapper>
            <Input
              type={isPwCheckVisible ? 'text' : 'password'}
              placeholder="비밀번호 확인"
              required
              value={pwCheck}
              onChange={handlePwCheckChange}
            />
            <EyeIcon className="material-symbols-outlined" onClick={() => setIsPwCheckVisible((prev) => !prev)}>
              {isPwCheckVisible ? 'visibility_off' : 'visibility'}
            </EyeIcon>
          </PwWrapper>
        </Line>
        {errorMessages.pwCheck && <ErrorMessage>{errorMessages.pwCheck}</ErrorMessage>}
      </InputWrapper>
      <Button onClick={handleJoinSubmit}>회원가입</Button>
      <Login>
        이미 계정이 있으신가요? <StyledLink to={'/login'}>로그인</StyledLink>
      </Login>
    </JoinWrapper>
  )
}

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 3rem);
  margin-top: 2rem;
`

const Logo = styled.div`
  font-size: 2.5rem;
  color: #54689F;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Label = styled.div`
  width: 5.5rem;
  margin-right: 2rem;
`

const Input = styled.input`
  width: 21rem;
  margin-bottom: 0.5rem;
  outline: none;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
`

const ErrorMessage = styled.div`
  color: #E52B2B;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  font-size: 0.9rem;
  left: 8rem;
  margin-bottom: 0.7rem;
`

const PwWrapper = styled.div`
  position: relative;
`

const EyeIcon = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  color: #6F6F6F;
  font-weight: 200;
  cursor: pointer;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #445EA2;
  color: #ffffff;
  width: 28.5rem;
  border-radius: 0.5rem;
  height: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
`

const Login = styled.div`
  margin-top: 2.3rem;
  color: #515151;
  white-space: pre;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  display: inline;
  color: inherit;
`

export default Join