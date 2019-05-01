import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

export interface TopProps {
  isLoading: boolean;
  signedIn: boolean;
  user: firebase.User | null;
  signOut: () => void;
}

export const Top: React.FC<TopProps> = ({ isLoading, signedIn, signOut }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{isLoading ? '読み込み中' : '読み込み完了'}</p>
        <p>{signedIn ? 'ログイン済' : 'ログインしていません'}</p>
        <button onClick={signOut}>ログアウト</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
