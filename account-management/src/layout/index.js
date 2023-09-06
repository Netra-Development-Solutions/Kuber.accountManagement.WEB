import { Paper } from "@mui/material";
import BankAccountForm from "../components/forms/BankAccount";
import CreditCardForm from "../components/forms/CreditCard";

const AccountManagementLayout = () => {
    return (
        <Paper style={{
            padding: '1rem',
            margin: '1rem',
        }} elevation={2}>
            <BankAccountForm />
            <CreditCardForm />
        </Paper>
    )
};

export default AccountManagementLayout;