import axiosInstance from "./axiosInstance"

interface postTemplatesProps {
  sprintId: number
  tempName: string
}

const postTemplates = async ({ sprintId, tempName }: postTemplatesProps) => {
  const response = await axiosInstance.post('/templates', {
    sprintId,
    tempName
  })
  return response.data
}

export default postTemplates