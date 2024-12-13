import sprintAxiosInstance from './sprintAxiosInstance';

interface deleteTaskCardProps {
  card_id: number;
}

const deleteTaskCard = async ({ card_id }: deleteTaskCardProps) => {
  const response = await sprintAxiosInstance.delete(`/cards/${card_id}`);
  return response.data;
};

export default deleteTaskCard;
