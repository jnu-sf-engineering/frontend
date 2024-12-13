import sprintAxiosInstance from './sprintAxiosInstance';

export interface postTaskCardProps {
  content: string;
  participants: string[];
  status: string;
  card_id: number;
}

const postTaskCard = async ({
  content,
  participants,
  status,
  card_id,
}: postTaskCardProps) => {
  try {
    const response = await sprintAxiosInstance.put(`/cards/${card_id}`, {
      content,
      participants,
      status,
    });
    return response.data;
  } catch (error) {
    console.error('태스크 카드 업데이트 중 오류 발생:', error);
    throw error;
  }
};

export default postTaskCard;
