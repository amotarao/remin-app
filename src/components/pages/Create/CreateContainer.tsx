import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { RemindersContainer } from '../../../stores/database/reminders';
import { Create, CreateProps } from './';

interface Props extends RouteComponentProps, Partial<CreateProps> {}

const CreateContainer: React.FC<Props> = ({ history, ...props }) => {
  return (
    <Subscribe to={[UserContainer, RemindersContainer]}>
      {(user: UserContainer, reminders: RemindersContainer) => {
        if (!user.state.isLoading && !user.state.signedIn) {
          history.replace('/');
        }
        const toDashboard = () => {
          history.replace('/dashboard');
        };
        const isLoading = user.state.isLoading || reminders.state.isLoading;
        return <Create {...props} {...reminders} isLoading={isLoading} toDashboard={toDashboard} />;
      }}
    </Subscribe>
  );
};

const CreateContainerWithRouter = withRouter(CreateContainer);

export { CreateContainerWithRouter as CreateContainer };
