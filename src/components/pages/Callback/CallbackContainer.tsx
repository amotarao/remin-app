import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { Callback, CallbackProps } from './';

interface Props extends RouteComponentProps, CallbackProps {}

const CallbackContainer: React.FC<Props> = ({ location, history }) => {
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
        return <Callback />;
      }}
    </Subscribe>
  );
};

const CallbackContainerWithRouter = withRouter(CallbackContainer);

export { CallbackContainerWithRouter as CallbackContainer };
