import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { SummaryHeading } from './styled';

const LoanSummary = ({amount, months, insurance, instalment, interestRate, intl}) => {

    const formattedInterestRate = intl.formatNumber(
        interestRate,
        {
            style: 'percent',
            minimumFractionDigits: 2,
        }
    );

    const getInsuranceTranslatedText = (insurance) => {
        if (insurance) {
            return intl.formatMessage({
                id: 'loanForm.withInsurance',
                defaultMessage: 'with insurance',
                description: 'same text displayed in loan form radio option for insurance is displayed also in summary'
            });
        } else {
            return intl.formatMessage({
                id: 'loanForm.withoutInsurance',
                defaultMessage: 'without insurance',
                description: 'same text displayed in loan form radio option for insurance is displayed also in summary'
            });
        }
    };

    return (
        <Row>
            <SummaryHeading>
                <FormattedMessage
                    id="loanSummary.heading"
                    defaultMessage="summary"
                    description="heading for 'summary' section, where information about the asked loan is summed up"
                />
            </SummaryHeading>
            <div>
                <FormattedHTMLMessage
                    id="loanSummary.message"
                    description="summary of all loan details"
                    defaultMessage="You have chosen a loan amount of <b>{amount}</b>,
                    to be paid back in <b>{months} months</b>,
                    <b> {insuranceText}</b>.
                    At the <b>interest rate of {interestRate}</b>, your <b>monthly instalment is {instalment}</b>."
                    values={{
                        amount: intl.formatNumber(
                            amount,
                            {
                                style: 'currency',
                                currency: 'CZK',
                                minimumFractionDigits: 0,
                            }
                        ),
                        months,
                        instalment: intl.formatNumber(
                            instalment,
                            {
                                style: 'currency',
                                currency: 'CZK',
                                minimumFractionDigits: 0,
                            }
                        ),
                        interestRate: formattedInterestRate,
                        insuranceText: getInsuranceTranslatedText(insurance)
                    }}
                />
            </div>
        </Row>
    );
};

LoanSummary.propTypes = {
    amount: PropTypes.number,
    months: PropTypes.number,
    instalment: PropTypes.number,
    insurance: PropTypes.bool,
    interestRate: PropTypes.number
};

export default injectIntl(LoanSummary);
