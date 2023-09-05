import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import BankAccountDetails from './BankAccounts';
import CreditCardAccountDetails from './CreditCardDetails';

const AccountDetails = () => {
    return (
        <Paper elevation={1} sx={{ p: '1rem', m: '1rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <BankAccountDetails />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CreditCardAccountDetails />
                </Grid>
            </Grid>
        </Paper>
    )
};

export default AccountDetails;