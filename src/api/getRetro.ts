import axiosInstance from "./axiosInstance"

interface getRetroProps {
  projectId: number
}

const getRetro = async ({ projectId }: getRetroProps) => {
  const response = await axiosInstance.get(`/retrospects/${projectId}`)
  return response.data
}

export default getRetro