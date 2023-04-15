import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <FileUploader />
      </div>
      <div className="right-section">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
