import axiosInstance from "./axiosInstance"

export interface postRegisterProps { 
  email: string
  password: string
  nickname: string
}

const postRegister = async({ email, password, nickname }: postRegisterProps) => {
  const response = await axiosInstance.post('/auth/register', {
    email,
    password,
    nickname
  })
  return response.data
}

export default postRegister