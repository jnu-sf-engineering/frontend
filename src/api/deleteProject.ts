import axiosInstance from "./axiosInstance"

const deleteProject = async () => {
  const response = await axiosInstance.delete(`/project/{projectId}`)
  return response.data
}

export default deleteProject