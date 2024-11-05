import React from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultButton from './components/DefaultButton';
import TaskCard from './components/TaskCard';

function App() {
  return (
    <div className='App'>
      {/* <DefaultButton text='버튼 내용 입력' width='10rem' height='3.125rem' /> */}
      <TaskCard
        taskContent='API를 상의 후에 설계합니다. API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.API를 상의 후에 설계합니다.'
        authorName='박경준'
      />
    </div>
  );
}

export default App;
