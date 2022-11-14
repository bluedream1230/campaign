/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import Campaigns from './Campaigns';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    console.log('errr');
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Campaigns></Campaigns>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
