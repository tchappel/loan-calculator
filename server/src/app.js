/**
 * @file Simple REST server
 */
const express = require('express');
const interestRate = 0.07;
const localeOptions = [
    {
        id: 'locale.en',
        value: 'en',
    },
    {
        value: 'cs',
        id: 'locale.cs',
    },
    {
        value: 'it',
        id: 'locale.it'
    },
    {
        value: 'vi',
        id: 'locale.vi'
    },
];

// credit to http://www.developphp.com/view.php?tid=1389
const computeMonthlyInstalment = ({amount, interestRate, months, insurance}) => {
    const interest = (amount * (interestRate * .01)) / months;
    let instalment = Math.round((amount / months) + interest);
    if (insurance) {
        instalment += 200;
    }
    return instalment;
};

// Config
const app = express();
const port = 8080;

// CORS MW
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization');

    // Preflight
    if (req.method === 'OPTIONS') return res.status(200).end();

    next();
});

// Routes
app.get('/api/loan', (req, res) => {

    let {amount, months, insurance} = req.query;

    // parse query parameter to proper type for computeMonthlyInstalment
    amount = parseInt(amount);
    months = parseInt(months);
    insurance = (insurance === 'true') ? true : false;

    const instalment = computeMonthlyInstalment({amount, interestRate, months, insurance});

    // I put a setTimeout to better display the Spin for isLoading
    setTimeout(() => {
        res.status(200).json({
            type: 'success',
            payload: {
                instalment
            },
        });
    }, 500);
});

app.get('/api/interestRate', (req, res) => {
    res.status(200).json({
        type: 'success',
        payload: {
            interestRate
        },
    });
});

app.get('/api/locale-options', (req, res) => {
    res.status(200).json({
        type: 'success',
        payload: {
            localeOptions
        }
    });
});


// Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
