/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Icon, Paper, Typography } from '@material-ui/core';
import { ReminderItemData } from '../../../stores/database/reminders';
import { InputWrapperStyle, InputStyle, SaveIconStyle, PaperStyle, ControlStyle, TypographyStyle } from './styled';

export interface CreateProps {
  className?: string;
  isLoading: boolean;
  success: () => void;
  create: (data: ReminderItemData) => Promise<firebase.firestore.DocumentReference>;
}

export const Create: React.FC<CreateProps> = ({ className, success, create }) => {
  const now = new Date();

  const [text, setText] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [channel, setChannel] = useState<string>('');
  const [date, setDate] = useState<string>(now.toISOString().slice(0, 10));
  const [time, setTime] = useState<string>(now.toISOString().slice(11, 16));
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitDisabled(true);
    create({ text, channel, date: [date], time: [time] })
      .then(() => {
        success();
      })
      .catch(() => {
        setSubmitDisabled(false);
      });
  };

  return (
    <div className={className}>
      <Paper css={PaperStyle} elevation={1}>
        <Typography css={TypographyStyle} variant="h6" color="inherit" component="h1">
          Create
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div css={InputWrapperStyle}>
            <TextField
              css={InputStyle}
              label="Text"
              value={text}
              error={textError}
              multiline
              rows={3}
              rowsMax={3}
              onChange={(event) => {
                const value = event.target.value;
                setTextError(false);
                setText(value);
              }}
              onBlur={(event) => {
                const value = event.target.value;
                if (value.replace(/\s/g, '') === '') {
                  setTextError(true);
                }
              }}
            />
          </div>
          <div css={InputWrapperStyle}>
            <FormControl css={ControlStyle}>
              <InputLabel htmlFor="channel">Channel</InputLabel>
              <Select
                css={InputStyle}
                value={channel}
                onChange={(event) => {
                  const value = event.target.value;
                  setChannel(value);
                }}
                inputProps={{
                  text: 'channel',
                  id: 'channel',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="10">#random</MenuItem>
                <MenuItem value="20">#general</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div css={InputWrapperStyle}>
            <TextField
              css={InputStyle}
              label="Date"
              type="date"
              defaultValue={date}
              onChange={(event) => {
                const value = event.target.value;
                setDate(value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div css={InputWrapperStyle}>
            <TextField
              css={InputStyle}
              label="Time"
              type="time"
              defaultValue={time}
              onChange={(event) => {
                const value = event.target.value;
                setTime(value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div css={InputWrapperStyle}>
            <Button type="submit" variant="contained" color="primary" disabled={submitDisabled}>
              <Icon css={SaveIconStyle}>save</Icon>
              Save
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
