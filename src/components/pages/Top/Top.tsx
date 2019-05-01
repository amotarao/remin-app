import React from 'react';
import { slackScopes } from '../../../utils/slack';

export interface TopProps {
  isLoading: boolean;
  signedIn: boolean;
  user: firebase.User | null;
  signOut: () => void;
}

export const Top: React.FC<TopProps> = ({ isLoading, signedIn, signOut }) => {
  return (
    <div>
      <header>
        <a
          href={`https://slack.com/oauth/authorize?scope=${encodeURIComponent(
            slackScopes.join(',')
          )}&client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}`}
        >
          <img
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>
        <p>{isLoading ? '読み込み中' : '読み込み完了'}</p>
        <p>{signedIn ? 'ログイン済' : 'ログインしていません'}</p>
        <button onClick={signOut}>ログアウト</button>
      </header>
    </div>
  );
};
