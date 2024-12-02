import axiosInstance from "./axiosInstance"

const getProject = async () => {
  const response = await axiosInstance.get('/project')
  return response.data
}

export default getProject
