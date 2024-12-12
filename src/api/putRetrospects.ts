import axiosInstance from "./axiosInstance"

interface putRetrospectsProps {
  retroId: number
  tempName: string
  answer: string
}

const putRetrospects = async ({ retroId, tempName, answer }: putRetrospectsProps) => {
  const response = await axiosInstance.put('/retrospects', {
    retroId,
    tempName,
    answer
  })
  return response.data
}

export default putRetrospects