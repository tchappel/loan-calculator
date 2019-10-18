import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { SummaryHeading } from './styled';

const LoanSummary = ({amount, months, insurance, instalment}) => (
    <Row>
        <SummaryHeading>
            Summary
        </SummaryHeading>
        <div>
            You have chosen a loan amount of <b>{amount}</b>,
            to be paid back in <b>{months} months</b>,
            <b> {insurance ? 'covered' : 'not covered'} by insurance</b>.
            At the <b>interest rate of 7%</b>, your <b>monthly instalment is {instalment}</b>.
        </div>
    </Row>
);

LoanSummary.propTypes = {
    amount: PropTypes.number,
    months: PropTypes.number,
    instalment: PropTypes.number,
    insurance: PropTypes.bool,
};

export default LoanSummary;
