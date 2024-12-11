import axiosInstance from "./axiosInstance"

interface postRetroAdviceProps {
  tempName: string
  fieldValue: string
}

const postRetroAdvice = async ({ tempName, fieldValue }: postRetroAdviceProps) => {
  const response = await axiosInstance.post('/retrospects/advice', {
    tempName,
    fieldValue
  })
  return response.data
}

export default postRetroAdvice