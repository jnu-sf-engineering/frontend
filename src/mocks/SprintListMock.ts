const SprintListMock = {
  success: true,
  response: {
    sprint_id: 1,
    name: '스프린트 1',
    start_date: '2024.10.03.',
    end_date: '2024.10.13.',
    cards: {
      // 할일
      to_do: [
        {
          card_id: 1,
          content: '메인화면 컴포넌트 제작',
          participants: ['정서윤'],
        },
        {
          card_id: 2,
          content: 'API 설계',
          participants: ['박경준', '정지송', '심연수'],
        },
      ],
      // 진행중
      in_progress: [
        {
          card_id: 3,
          content: '메인화면 컴포넌트 제작',
          participants: ['정서윤'],
        },
      ],
      // 완료
      done: [
        {
          card_id: 4,
          content: '메인화면 컴포넌트 제작',
          participants: ['정서윤'],
        },
        {
          card_id: 5,
          content: '뭔가 제작',
          participants: ['이규민'],
        },
      ],
    },
  },
  error: null,
};

export default SprintListMock;
