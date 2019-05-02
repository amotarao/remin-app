import React from 'react';
import { Subscribe } from 'unstated';
import { RemindersContainer } from '../../../stores/database/reminders';
import { RemindersList, RemindersListProps } from './';

export const RemindersListContainer: React.FC<Partial<RemindersListProps>> = () => {
  return <Subscribe to={[RemindersContainer]}>{(reminders: RemindersContainer) => <RemindersList {...reminders.state} />}</Subscribe>;
};
