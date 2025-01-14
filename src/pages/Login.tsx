import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import postAuthLogin from '../api/postAuthLogin'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [isPwVisible, setIsPwVisible] = useState(false)

  useEffect(() => {
    const savedId = localStorage.getItem('savedId')
    if (savedId) {
      setId(savedId)
      setIsCheck(true)
    }
  }, [])

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z0-9@.]/g, '');
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
    onSuccess: (data) => {
      if (data.response.accessToken) {
        localStorage.setItem('token', data.response.accessToken)
      }
      if (data.response.userID) {
        localStorage.setItem('nickname', data.response.userID)
      }
      navigate('/')
    },
    onError: (error: any) => {
      if (error.response) {
        const { status } = error.response
        if (status === 400) {
          alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 시도해주세요')
        } else if (status === 404) {
          alert('존재하지 않는 이메일입니다. 회원가입을 진행해주세요.')
        } else if (status === 422) {
          alert('이메일 형식이 올바르지 않습니다.')
        } else {
          alert('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
        }
      }
    }
  })

  const handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isCheck) {
      localStorage.setItem('savedId', id)
    } else {
      localStorage.removeItem('savedId')
    }

    if (!id || !pw) {
      alert('이메일과 비밀번호를 모두 입력해주세요.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(id)) {
      alert('올바른 이메일 형식으로 입력해주세요.')
      return
    }
    
    await postLogin.mutate({ email: id, password: pw })
  }

  return (
    <LoginWrapper>
        <Logo>momentum</Logo>
        <Title>로그인</Title>
        <Input type='text' placeholder='이메일을 입력하세요' value={id} onChange={handleIdChange} />
        <PwWrapper>
          <Input type={isPwVisible ? 'text' : 'password'} placeholder='비밀번호를 입력하세요' required value={pw} onChange={handlePwChange} />
          <EyeIcon className='material-symbols-outlined' onClick={() => setIsPwVisible((prev) => !prev)}>
            {isPwVisible ? 'visibility_off' : 'visibility'}
          </EyeIcon>
        </PwWrapper>
        <Options>
          <Checkbox type='checkbox' checked={isCheck} onChange={handleCheckboxChange} />
          <CheckboxLabel>아이디 저장</CheckboxLabel>
        </Options>
        <Button onClick={handleLoginSubmit}>로그인</Button>
        <Join>아직 계정이 없으신가요?  <StyledLink to={'/join'}>회원가입</StyledLink></Join>
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
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: #484848;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 24.8rem;
  margin: 0.5rem 0;
  outline: none;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
`

const PwWrapper = styled.div`
  position: relative;
`

const EyeIcon = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #6F6F6F;
  font-weight: 200;
  cursor: pointer;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 25rem;
  padding-top: 0.5rem;
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
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
`

const Join = styled.div`
  margin-top: 2.3rem;
  color: #515151;
  white-space: pre;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  display: inline;
  color: inherit;
`

export default Login