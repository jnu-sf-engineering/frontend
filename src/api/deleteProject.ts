import axiosInstance from "./axiosInstance"

interface deleteProjectProps {
  projectId: number
}

const deleteProject = async ({ projectId }: deleteProjectProps ) => {
  const response = await axiosInstance.delete(`/project/${projectId}`)
  return response.data
}

export default deleteProject