import React from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultButton from './components/DefaultButton';

function App() {
  return (
    <div className='App'>
      <DefaultButton text='버튼 내용 입력' width='10rem' height='3.125rem' />
    </div>
  );
}

export default App;
