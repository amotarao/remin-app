import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { Top, TopProps } from './';

interface Props extends RouteComponentProps, TopProps {}

const TopContainer: React.FC<Props> = ({ history }) => {
  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => {
        if (!user.state.isLoading && user.state.signedIn) {
          history.replace('/dashboard');
        }
        return <Top {...{ ...user.state, signOut: user.signOut }} />;
      }}
    </Subscribe>
  );
};

const TopContainerWithRouter = withRouter(TopContainer);

export { TopContainerWithRouter as TopContainer };
