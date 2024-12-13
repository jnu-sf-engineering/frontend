import axiosInstance from "./axiosInstance"

export interface postRegisterProps { 
  email: string
  password: string
  nickname: string
  discord: string
}

const postRegister = async({ email, password, nickname, discord }: postRegisterProps) => {
  const response = await axiosInstance.post('/auth/register', {
    email,
    password,
    nickname,
    discord
  })
  return response.data
}

export default postRegister