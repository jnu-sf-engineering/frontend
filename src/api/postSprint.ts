import axiosInstance from './axiosInstance';

export interface postSprintProps {
  project_id: number;
  name: string;
  start_date: string;
  end_date: string;
}

const postSprint = async ({
  project_id,
  name,
  start_date,
  end_date,
}: postSprintProps) => {
  const response = await axiosInstance.post('/sprints', {
    project_id,
    name,
    start_date,
    end_date,
  });
  return response.data;
};

export default postSprint;
