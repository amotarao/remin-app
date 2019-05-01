import React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from '@material-ui/core';

export interface RemindersListProps {
  items: {
    id: string;
    data: {
      channel: string;
      text: string;
      date: string[];
      time: string[];
    };
  }[];
}

export const RemindersList: React.FC<RemindersListProps> = ({ items }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox indeterminate={false} checked={true} />
            </TableCell>
            <TableCell>Channel</TableCell>
            <TableCell>Text</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{item.data.channel}</TableCell>
              <TableCell>{item.data.text}</TableCell>
              <TableCell>{item.data.date.join(', ')}</TableCell>
              <TableCell>{item.data.time.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
