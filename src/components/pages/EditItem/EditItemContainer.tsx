import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Subscribe } from 'unstated';
import { UserContainer } from '../../../stores/user';
import { EditItem, EditItemProps } from './';

interface Props extends RouteComponentProps, Partial<EditItemProps> {}

const EditItemContainer: React.FC<Props> = ({ history, ...props }) => {
  return (
    <Subscribe to={[UserContainer]}>
      {(user: UserContainer) => {
        if (!user.state.isLoading && !user.state.signedIn) {
          history.replace('/');
        }
        return <EditItem {...props} />;
      }}
    </Subscribe>
  );
};

const EditItemContainerWithRouter = withRouter(EditItemContainer);

export { EditItemContainerWithRouter as EditItemContainer };
