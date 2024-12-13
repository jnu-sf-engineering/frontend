import sprintAxiosInstance from './sprintAxiosInstance';

export interface postCardProps {
  sprint_id: number | null;
  content: string;
  participants: string[];
  status: string;
}

const postCard = async ({
  sprint_id,
  content,
  participants,
  status,
}: postCardProps) => {
  const response = await sprintAxiosInstance.post('/cards', {
    sprint_id,
    content,
    participants,
    status,
  });
  return response.data;
};

export default postCard;
