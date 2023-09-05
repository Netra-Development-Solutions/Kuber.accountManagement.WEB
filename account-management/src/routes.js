import BankAccountForm from "./components/forms/BankAccount";
import CreditCardForm from "./components/forms/CreditCard";
import { Navigate, Outlet } from "react-router-dom";

const routes = [
    {
        path: '/dashboard/accounts',
        element: <Outlet />,
        children: [
            { path: '/dashboard/accounts', element: <BankAccountForm /> },
            { path: '/dashboard/accounts/bank', element: <BankAccountForm /> },
            { path: '/dashboard/accounts/credit', element: <CreditCardForm /> },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/dashboard/accounts" />
    }
];

export default routes;  