import sprintAxiosInstance from './sprintAxiosInstance';

export interface postSprintProps {
  project_id: number;
  name: string;
  start_date: string;
  end_date: string;
}

const formatToLocalDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

const postSprint = async ({
  project_id,
  name,
  start_date,
  end_date,
}: postSprintProps) => {
  const formattedStartDate = formatToLocalDateTime(start_date);
  const formattedEndDate = formatToLocalDateTime(end_date);

  console.log('Sending request with:', {
    project_id,
    name,
    start_date: formattedStartDate,
    end_date: formattedEndDate,
  });

  const response = await sprintAxiosInstance.post('/sprints', {
    project_id,
    name,
    start_date: formattedStartDate,
    end_date: formattedEndDate,
  });

  return response.data;
};

export default postSprint;
