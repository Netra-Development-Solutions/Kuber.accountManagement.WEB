import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import VolumeLineChart from '../charts';

const BankSummaryComponent = ({ bankAccount }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        Balance
                    </Typography>
                    <Typography variant="body1" component="div">
                        {bankAccount?.balance}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        Account Number
                    </Typography>
                    <Typography variant="body1" component="div">
                        {bankAccount?.accountNumber || "N/A"}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        No of Transactions
                    </Typography>
                    <Typography variant="body1" component="div">
                        {bankAccount?.transactions?.length || "N/A"}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        Created at
                    </Typography>
                    <Typography variant="body1" component="div">
                        {bankAccount?.createdAt || "N/A"}
                    </Typography>
                </Grid>
            </Grid>
            <VolumeLineChart />
            <Button variant="text" color="primary" fullWidth>
                Analyze Bank Account
            </Button>
        </Box>
    )
}

export default BankSummaryComponent;