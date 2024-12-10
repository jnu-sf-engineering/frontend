import axiosInstance from "./axiosInstance"

interface getRetroDetailProps {
  retroId: number
}

const getRetroDetail = async ({ retroId }: getRetroDetailProps) => {
  const response = await axiosInstance.get(`/retrospects/detail/${retroId}`)
  console.log("API Response:", response.data);
  return response.data
}

export default getRetroDetail