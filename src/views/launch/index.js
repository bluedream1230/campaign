/* eslint-disable no-unused-vars */
import * as React from 'react';

// material-ui
import { Avatar, Box, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { CDatePicker } from '@coreui/react-pro';
import { Alert } from '@coreui/react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Formik } from 'formik';

//css imports
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loadable from 'ui-component/Loadable';
import { Link as RouterLink } from 'react-router-dom';

const LaunchGameView = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/games/index" {...props} role={undefined} />);

const LaunchPage = () => {
    const theme = useTheme();
    const [selectedDate, handleDateChange] = useState(new Date());
    const today = Date();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <MainCard sx={{ backgroundColor: '#360068' }}>
            <CardContent>
                {/* <Formik>
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => ( */}
                <form>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h2" color="white">
                                        Select Name & Launch Date
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Select Name"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <CDatePicker footer locale="en-US" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: '20px' }}></Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h2" color="white">
                                        Select or Create Prize
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <TextField
                                        // labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        sx={{ ...theme.typography.customInput }}
                                        select
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Select Name"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Select Name"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Select Name"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Select Name"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: '20px' }}></Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h2" color="white">
                                        Select Audiance Bucket
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        sx={{ ...theme.typography.customInput }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ '& button': { m: 1 } }}>
                                <div>
                                    <Button
                                        component={LaunchGameView}
                                        to="/launch/games/index"
                                        size="small"
                                        sx={{ backgroundColor: 'red' }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
                {/* )} */}
                {/* </Formik> */}
            </CardContent>
        </MainCard>
    );
};

export default LaunchPage;
