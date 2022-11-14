// material-ui
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Formik } from 'formik';
import { DatePicker } from '@mui/lab';

// ==============================|| SAMPLE PAGE ||============================== //

const LaunchPage = () => {
    const theme = useTheme();
    return (
        <MainCard sx={{ backgroundColor: '#360068' }}>
            <CardContent>
                <Formik>
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
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
                                        <DatePicker
                                            fullWidth
                                            label="Launch Date"
                                            margin="normal"
                                            name="date"
                                            defaultValue=""
                                            sx={{ ...theme.typography.customInput }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </CardContent>
        </MainCard>
    );
};

export default LaunchPage;
