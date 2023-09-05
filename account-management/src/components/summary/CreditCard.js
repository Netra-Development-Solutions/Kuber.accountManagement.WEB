import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const CreditCardSummaryComponent = ({ creditCard }) => {
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
                        {creditCard?.balance}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        Account Number
                    </Typography>
                    <Typography variant="body1" component="div">
                        {creditCard?.accountNumber || "N/A"}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        No of Transactions
                    </Typography>
                    <Typography variant="body1" component="div">
                        {creditCard?.transactions?.length || "N/A"}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color={"primary"} component="div">
                        Created at
                    </Typography>
                    <Typography variant="body1" component="div">
                        {creditCard?.createdAt || "N/A"}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CreditCardSummaryComponent;