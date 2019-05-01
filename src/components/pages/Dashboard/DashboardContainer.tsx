import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { Dashboard, DashboardProps } from './';

interface Props extends RouteComponentProps, DashboardProps {}

const DashboardContainer: React.FC<Props> = ({ history }) => {
  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => {
        if (!user.state.isLoading && !user.state.signedIn) {
          history.replace('/');
        }
        return <Dashboard />;
      }}
    </Subscribe>
  );
};

const DashboardContainerWithRouter = withRouter(DashboardContainer);

export { DashboardContainerWithRouter as DashboardContainer };
