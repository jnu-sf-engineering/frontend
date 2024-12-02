import axiosInstance from "./axiosInstance"

interface putProjectProps {
  projectId: number
  projectName: string
  manager: string
}

const putProject = async ({ projectId, projectName, manager }: putProjectProps) => {
  const response = await axiosInstance.put(`/project/${projectId}`, {
    projectName,
    manager
  })
  return response.data
}

export default putProject