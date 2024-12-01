import axiosInstance from "./axiosInstance"

export interface postProjectProps {
  projectName: string
  manager: string
}

const postProject = async ({ projectName, manager }: postProjectProps) => {
  const response = await axiosInstance.post('/project', {
    projectName,
    manager
  })
  return response.data
}

export default postProject