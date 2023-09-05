import { Grid, Paper } from '@mui/material';
import React from 'react';
import BankAccountForm from './components/forms/BankAccount';
import CreditCardForm from './components/forms/CreditCard';

const AccountManagementComponent = () => {
    return (
        <Paper style={{
            padding: '1rem',
            margin: '1rem',
        }} elevation={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <BankAccountForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CreditCardForm />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AccountManagementComponent;