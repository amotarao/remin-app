import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import logo from '../../../logo.svg';
import '../../../App.css';

export interface TopProps extends RouteComponentProps {}

const Top: React.FC<TopProps> = () => {
  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{user.state.isLoading ? '読み込み中' : '読み込み完了'}</p>
            <p>{user.state.signedIn ? 'ログイン済' : 'ログインしていません'}</p>
            <button onClick={user.signOut}>ログアウト</button>
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
      )}
    </Subscribe>
  );
};

const TopWithRouter = withRouter(Top);

export { TopWithRouter as Top };
