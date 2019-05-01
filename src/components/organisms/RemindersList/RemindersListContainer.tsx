import React from 'react';
import { Subscribe } from 'unstated';
import { RemindersList, RemindersListProps } from './';

export const RemindersListContainer: React.FC<RemindersListProps> = () => {
  return <Subscribe to={[]}>{() => <RemindersList items={[]} />}</Subscribe>;
};
