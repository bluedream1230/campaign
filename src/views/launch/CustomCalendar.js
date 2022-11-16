/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Paper, Grid } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, alpha } from '@material-ui/core/styles';

const materialTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#8bc34a'
            }
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: 'white',
                color: '#1b5e20'
            }
        }
    }
});

export const styles = makeStyles(() => ({
    notInThisMonthDayPaper: {
        width: '35px',
        height: '35px',
        backgroundColor: '#eeeeee',
        margin: '3px',
        boxShadow: 'none',
        padding: '1px'
    },
    normalDayPaper: {
        width: '35px',
        height: '35px',
        backgroundColor: '#e8f5e9',
        margin: '3px',
        boxShadow: 'none',
        borderRadius: 0,
        cursor: 'pointer'
    },
    selectedDayPaper: {
        width: '31px',
        height: '31px',
        backgroundColor: '#f9fbe7',
        margin: '3px',
        boxShadow: 'none',
        borderRadius: 0,
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'lime',
        cursor: 'pointer'
    },
    todayPaper: {
        width: '35px',
        height: '35px',
        backgroundColor: 'lightGreen',
        margin: '3px',
        boxShadow: 'none',
        borderRadius: 0,
        cursor: 'pointer',
        color: ' white'
    }
}));

export default function CustomCalendar() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = styles();
    const today = new Date();

    function getDayElement(day, selectedDate, isInCurrentMonth) {
        const isSelected = day.getDate() === selectedDate.getDate();
        const isToday = day.getDate() === today.getDate() && day.getMonth() === today.getMonth();
        let dateTile;
        if (isInCurrentMonth) {
            dateTile = (
                <Paper className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}>
                    <Grid item>
                        <br />
                    </Grid>
                    <Grid item> {day.getDate()}</Grid>
                </Paper>
            );
        } else {
            dateTile = (
                <Paper className={classes.notInThisMonthDayPaper}>
                    <Grid item>
                        <br />
                    </Grid>
                    <Grid item style={{ color: 'lightGrey' }}>
                        {day.getDate()}
                    </Grid>
                </Paper>
            );
        }
        return dateTile;
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* <ThemeProvider theme={materialTheme}> */}
                <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    variant="inline"
                    // renderDay={(day, selectedDate, isInCurrentMonth) => getDayElement(day, selectedDate, isInCurrentMonth)}
                />
                {/* </ThemeProvider> */}
            </MuiPickersUtilsProvider>
        </div>
    );
}
