import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { RemindersContainer } from '../../../stores/database/reminders';
import { Dashboard, DashboardProps } from './';

interface Props extends RouteComponentProps, DashboardProps {}

const DashboardContainer: React.FC<Props> = ({ history }) => {
  return (
    <Subscribe to={[UserContainer, RemindersContainer]}>
      {(user: UserContainer, reminders: RemindersContainer) => {
        if (!user.state.isLoading && !user.state.signedIn) {
          history.replace('/');
        }
        const isLoading = user.state.isLoading || reminders.state.isLoading;
        return <Dashboard isLoading={isLoading} />;
      }}
    </Subscribe>
  );
};

const DashboardContainerWithRouter = withRouter(DashboardContainer);

export { DashboardContainerWithRouter as DashboardContainer };
