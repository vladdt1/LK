import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Stack from '@mui/material/Stack';

export default function SecondsTimePicker() {
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    ampm={false}
                    readOnly
                    openTo="hours"
                    views={['hours', 'minutes']}
                    inputFormat="HH:mm"
                    mask="__:__:__"
                    label=""
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
        </LocalizationProvider>
    );
}
