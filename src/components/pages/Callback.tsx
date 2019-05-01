import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import { signIn } from '../../stores/user';

export interface CallbackProps extends RouteComponentProps {}

const Callback: React.FC<CallbackProps> = ({ location, history }) => {
  const toTop = () => history.replace('/');

  if (!location || !location.search) {
    toTop();
  }

  const { token } = parse(location.search) as { token: string };
  signIn(token).finally(() => {
    toTop();
  });

  return <p>ログイン中</p>;
};

const CallbackWithRouter = withRouter(Callback);

export { CallbackWithRouter as Callback };
