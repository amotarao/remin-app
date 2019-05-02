import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { RemindersContainer } from '../../../stores/database/reminders';
import { Dashboard, DashboardProps } from './';

interface Props extends RouteComponentProps, Partial<DashboardProps> {}

const DashboardContainer: React.FC<Props> = ({ history, ...props }) => {
  return (
    <Subscribe to={[UserContainer, RemindersContainer]}>
      {(user: UserContainer, reminders: RemindersContainer) => {
        if (!user.state.isLoading && !user.state.signedIn) {
          history.replace('/');
        }
        const isLoading = user.state.isLoading || reminders.state.isLoading;
        return <Dashboard {...props} isLoading={isLoading} />;
      }}
    </Subscribe>
  );
};

const DashboardContainerWithRouter = withRouter(DashboardContainer);

export { DashboardContainerWithRouter as DashboardContainer };
