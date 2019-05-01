import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../stores/user';

export interface CallbackProps extends RouteComponentProps {}

const Callback: React.FC<CallbackProps> = ({ location, history }) => {
  const toTop = () => history.replace('/');

  if (!location || !location.search) {
    toTop();
  }

  const { token } = parse(location.search) as { token: string };

  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => {
        user.signIn(token).finally(() => {
          toTop();
        });
        return <p>ログイン中</p>;
      }}
    </Subscribe>
  );
};

const CallbackWithRouter = withRouter(Callback);

export { CallbackWithRouter as Callback };
