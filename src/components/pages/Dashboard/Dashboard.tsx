/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Fab, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RemindersListContainer } from '../../organisms/RemindersList';
import { FabStyle } from './styled';

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div>
      <RemindersListContainer />
      <Fab css={FabStyle} color="primary" aria-label="Add" component={(props) => <Link to={{ pathname: '/create', state: { modal: true } }} {...props} />}>
        <Icon>add</Icon>
      </Fab>
    </div>
  );
};
