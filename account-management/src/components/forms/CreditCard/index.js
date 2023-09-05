import * as React from "react";
import * as yup from 'yup';
import { InputAdornment } from "@mui/material";
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function CreditCardForm({ creditCard }) {

    const yupValidationSchema = yup.object({
        balance: yup.number().positive().integer(),
        bankName: yup.string(),
        cardHolderName: yup.string(),
        cardName: yup.string(),
        cardNumber: yup.string().matches(/^\d{16}$/, 'Must be a valid card number'),
        creditLimit: yup.number().positive().integer(),
    });

    const formik = useFormik({
        initialValues: {
            balance: creditCard?.balance || 0,
            bankName: creditCard?.bankName || '',
            cardHolderName: creditCard?.cardHolderName || '',
            cardName: creditCard?.cardName || '',
            cardNumber: creditCard?.cardNumber || '',
            creditLimit: creditCard?.creditLimit || 0,
        },
        validationSchema: yupValidationSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
        }
    });

    const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = formik;

    return (
        <Paper style={{
            padding: '1rem',
            margin: '1rem',
        }} elevation={2}>
            <form onSubmit={handleSubmit}>
                <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                        textAlign: 'center',
                    }}>
                    Add Credit Card
                </Typography>
                <Typography
                    variant="body2"
                    gutterBottom
                    color={errors.accountNumber ? 'error' : 'textSecondary'}
                    style={{
                        textAlign: 'center',
                    }}>
                    Add your credit card details
                </Typography>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.cardNumber && !!errors.cardNumber}
                            fullWidth
                            helperText={errors.cardNumber}
                            id="cardNumber"
                            label="Card Number"
                            name="cardNumber"
                            onChange={handleChange}
                            value={values.cardNumber}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.cardName && !!errors.cardName}
                            fullWidth
                            helperText={errors.cardName}
                            id="cardName"
                            label="Card Name"
                            name="cardName"
                            onChange={handleChange}
                            required
                            value={values.cardName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.cardHolderName && !!errors.cardHolderName}
                            fullWidth
                            helperText={errors.cardHolderName}
                            id="cardHolderName"
                            label="Card Holder Name"
                            name="cardHolderName"
                            onChange={handleChange}
                            value={values.cardHolderName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.bankName && !!errors.bankName}
                            fullWidth
                            helperText={errors.bankName}
                            id="bankName"
                            label="Bank Name"
                            name="bankName"
                            onChange={handleChange}
                            value={values.bankName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.creditLimit && !!errors.creditLimit}
                            fullWidth
                            helperText={errors.creditLimit}
                            id="creditLimit"
                            label="Credit Limit"
                            name="creditLimit"
                            onChange={handleChange}
                            value={values.creditLimit}
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.balance && !!errors.balance}
                            fullWidth
                            helperText={errors.balance}
                            id="balance"
                            label="Balance"
                            name="balance"
                            onChange={handleChange}
                            required
                            value={values.balance}
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
};
