import sprintAxiosInstance from './sprintAxiosInstance';

export interface getSprintProps {
  sprint_id: number | null;
}

const getSprint = async ({ sprint_id }: getSprintProps) => {
  const response = await sprintAxiosInstance.get(`/sprints/${sprint_id}`);
  console.log('Sprint Data:', response);
  return response.data;
};

export default getSprint;
