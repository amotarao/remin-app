import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { Top, TopProps } from './';

interface Props extends RouteComponentProps, TopProps {}

const TopContainer: React.FC<Props> = () => {
  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => (
        <Top {...{ ...user.state, signOut: user.signOut }} />
      )}
    </Subscribe>
  );
};

const TopContainerWithRouter = withRouter(TopContainer);

export { TopContainerWithRouter as TopContainer };
