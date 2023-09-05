import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { get } from '../../utils/apiHelper';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Grid, Paper } from '@mui/material';
import BankSummaryComponent from '../summary/Bank';
import { useNavigate } from 'react-router-dom';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function BankAccountDetails() {
    const [expanded, setExpanded] = React.useState('panel1');
    const navigate = useNavigate();
    const [refresh, setRefresh] = React.useState(true);
    const [bankAccounts, setBankAccounts] = React.useState([]);

    React.useEffect(() => {
        if (refresh) {
            var userDetails = localStorage.getItem("userauthdetails") ? JSON.parse(localStorage.getItem("userauthdetails")) : null;
            const token = userDetails?.token;
            const tokenExpiry = userDetails?.tokenExpiry;

            if (tokenExpiry < Date.now()) {
                localStorage.removeItem("userauthdetails");
                window.location.reload();
            }

            console.log(token);

            get("http://localhost:4000/BANK/get-all-accounts", `Bearer ${token}`)
                .then((response) => {
                    setBankAccounts(response?.data?.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [refresh]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Paper elevation={3} style={{
            padding: '1rem',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom component="div">
                    Bank Accounts
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='body1' gutterBottom component='div'>
                        <RefreshIcon style={{
                            float: 'right',
                            cursor: 'pointer',
                        }} onClick={() => setRefresh(true)} />
                    </Typography>
                </Box>
            </Box>
            {
                bankAccounts.map((bankAccount, index) => {
                    return (
                        <Accordion key={bankAccount._id} expanded={expanded === bankAccount._id} onChange={handleChange(bankAccount._id)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>{bankAccount.accountName}</Typography>
                                    {/* <Typography sx={{ color: 'text.secondary', float: 'right' }}>{bankAccount.balance}</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <BankSummaryComponent bankAccount={bankAccount} />
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
                        <Grid container spacing={2} style={{ marginTop: '0px', flexDirection: 'row-reverse' }}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        navigate("/dashboard/accounts/bank");
                    }}>Add New</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Button disabled variant="contained" color="error" fullWidth onClick={() => setRefresh(true)}>Delete</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
