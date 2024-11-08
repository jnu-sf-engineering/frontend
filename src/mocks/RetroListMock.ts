const RetroListMock = {
    success: true,
    response: {
        project_id: 1,
          summary: "모든 회고록 내용 기반 요약한 내용",
          retrospects: [
              {
                  retro_id: 1,
                  sprint_id: 1,
                  sprint_name: "스프린트 1",
                  start_date: "2024.10.10.",
                  end_date: "2024.10.13.",
                  temp_name: "KPT(Keep-Problem-Try)",
                  manager : "박경준"
              },
              {			
                  retro_id: 2,
                  sprint_id: 2,
                  sprint_name: "스프린트 2",
                  start_date: "2024.10.14.",
                  end_date: "2024.10.17.",
                  temp_name: "CSS(Continue-Stop-Start)",
                  manager : "박경준"
              }
          ]
    }, 
    error: null
  }
  
export default RetroListMock