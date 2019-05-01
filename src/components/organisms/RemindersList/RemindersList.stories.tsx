import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RemindersList, RemindersListProps } from './RemindersList';

const stories = storiesOf('organisms', module).addDecorator(withKnobs);

stories.add('RemindersList', () => {
  const props: RemindersListProps = {
    items: [
      {
        id: '1',
        data: {
          channel: '#あいうえおかきくけこ',
          text: 'hogehogehogehogehoge',
          date: ['every weekday'],
          time: ['10:00'],
        },
      },
      {
        id: '2',
        data: {
          channel: '#hogefuga',
          text: 'hogehogehogehogehoge',
          date: ['every weekday'],
          time: ['10:00'],
        },
      },
      {
        id: '3',
        data: {
          channel: '#hogefuga',
          text: 'hogehogehogehogehoge',
          date: ['every weekday'],
          time: ['10:00'],
        },
      },
      {
        id: '4',
        data: {
          channel: '#hogefuga',
          text: 'hogehogehogehogehoge',
          date: ['every weekday'],
          time: ['10:00'],
        },
      },
      {
        id: '5',
        data: {
          channel: '#hogefuga',
          text: 'hogehogehogehogehoge',
          date: ['every weekday', 'everyday'],
          time: ['10:00', '15:00', '22:00'],
        },
      },
    ],
  };

  return <RemindersList {...props} />;
});
