import axiosInstance from "./axiosInstance"

interface PostLoginProps {
  email: string
  password: string
}

const postAuthLogin = async({ email, password }: PostLoginProps)  => {
  const response = await axiosInstance.post('/auth/login', {
    email,
    password
  })
  return response.data
}
export default postAuthLogin