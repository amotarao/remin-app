/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from '@material-ui/core';
import { ReminderItem } from '../../../stores/database/reminders';
import { PaperStyle } from './styled';

export interface RemindersListProps {
  items: ReminderItem[];
}

export const RemindersList: React.FC<RemindersListProps> = ({ items }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onCheckAllChange = useCallback(() => {
    if (selected.length < items.length) {
      setSelected(items.map(e => e.id));
      return;
    }
    setSelected([]);
  }, [items, selected]);

  const onCheckChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const currentId = event.currentTarget.value;

      if (selected.findIndex(id => id === currentId) < 0) {
        setSelected([...selected, currentId]);
        return;
      }
      setSelected(selected.filter(id => id !== currentId));
    },
    [selected]
  );

  const onRowClick = useCallback(
    (event: React.MouseEvent<HTMLTableRowElement>, currentId: string) => {
      if (selected.findIndex(id => id === currentId) < 0) {
        setSelected([...selected, currentId]);
        return;
      }
      setSelected(selected.filter(id => id !== currentId));
    },
    [selected]
  );

  const head = useMemo(
    () => (
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={
              selected.length > 0 && selected.length !== items.length
            }
            checked={items.length > 0 && selected.length === items.length}
            disabled={items.length === 0}
            onChange={onCheckAllChange}
          />
        </TableCell>
        <TableCell>Channel</TableCell>
        <TableCell>Text</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Time</TableCell>
      </TableRow>
    ),
    [items, selected, onCheckAllChange]
  );

  const body = useMemo(
    () =>
      items.map(item => (
        <TableRow key={item.id} onClick={event => onRowClick(event, item.id)}>
          <TableCell padding="checkbox">
            <Checkbox
              value={item.id}
              checked={selected.findIndex(id => id === item.id) >= 0}
              onChange={onCheckChange}
            />
          </TableCell>
          <TableCell>{item.data.channel}</TableCell>
          <TableCell>{item.data.text}</TableCell>
          <TableCell>{item.data.date.join(', ')}</TableCell>
          <TableCell>{item.data.time.join(', ')}</TableCell>
        </TableRow>
      )),
    [items, selected, onCheckChange, onRowClick]
  );

  return (
    <Paper css={PaperStyle}>
      <Table>
        <TableHead>{head}</TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </Paper>
  );
};
