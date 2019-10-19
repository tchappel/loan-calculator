import React from 'react';
import { compose } from 'ramda';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Tag } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FormFieldHeading } from './styled';
import { IntegerStep, IntegerInputNumber, RadioGroup } from '../../components';

let LoanForm = ({handleSubmit, intl}) => {

    const translatedMonths = intl.formatMessage({
        id: 'app.months',
        defaultMessage: 'months',
        description: 'translation from "months"',
    });

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.amount"
                        defaultMessage="amount"
                        description="Label for 'amount' field of 'loan' form"
                    />
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={18}>
                    <Field
                        name={'amount'}
                        component={IntegerStep}
                        // custom props related to antd InputNumber component API
                        // I choose to pass these props like this to separate them from Field props
                        props={{
                            min: 25000,
                            max: 100000,
                            step: 1000,
                            marks: {
                                25000: {
                                    label: '25.000 CZK'
                                },
                                100000: {
                                    label: '100.000 CZK'
                                }
                            },
                            tipFormatter: value => {
                                return intl.formatNumber(
                                    value,
                                    {
                                        style: 'currency',
                                        currency: 'CZK',
                                        minimumFractionDigits: 0,
                                    }
                                );
                            },
                        }}
                    />
                </Col>
                <Col span={6}>
                    <Field
                        name={'amount'}
                        component={IntegerInputNumber}
                        // custom props related to antd InputNumber component API
                        // I choose to pass these props like this to separate them from Field props
                        props={{
                            formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
                            parser: value => value.replace(/\./g, ''),
                            min: 25000,
                            max: 100000,
                            step: 1000,
                        }}
                        // fix bug: prevent blur event to convert the value in store into string
                        onBlur={event => event.preventDefault()}
                    />
                    <Tag>CZK</Tag>
                </Col>
            </Row>
            <Row>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.repaymentTime"
                        defaultMessage="repayment time"
                        description="Label for 'repayment time' field of 'loan' form"
                    />
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={18}>
                    <Field
                        name={'months'}
                        component={IntegerStep}
                        // custom props related to antd InputNumber component API
                        // I choose to pass these props like this to separate them from Field props
                        props={{
                            min: 12,
                            max: 60,
                            step: 1,
                            marks: {
                                12: {
                                    label: `12 ${translatedMonths}`
                                },
                                60: {
                                    label: `60 ${translatedMonths}`
                                }
                            },
                            tipFormatter: value => `${value} ${translatedMonths}`
                        }}
                    />
                </Col>
                <Col span={6}>
                    <Field
                        name={'months'}
                        component={IntegerInputNumber}
                        // custom props related to antd InputNumber component API
                        // I choose to pass these props like this to separate them from Field props
                        props={{
                            min: 12,
                            max: 60,
                            step: 1,
                        }}
                        // prevent blur to convert the value in store into string
                        onBlur={event => event.preventDefault()}
                    />
                    <Tag>
                        {translatedMonths}
                    </Tag>
                </Col>
            </Row>
            <Row>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.insurance"
                        defaultMessage="insurance"
                        description="Label for 'insurance' field of 'loan' form"
                    />
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={24}>
                    <Field
                        name={'insurance'}
                        component={RadioGroup}
                        options={[
                            {
                                value: true,
                                label: intl.formatMessage({
                                    id: 'loanForm.withInsurance',
                                    defaultMessage: 'with insurance',
                                    description: 'radio option "with insurance" of "insurance" field in loan form',
                                })
                            },
                            {
                                value: false,
                                label: intl.formatMessage({
                                    id: 'loanForm.withoutInsurance',
                                    defaultMessage: 'without insurance',
                                    description: 'radio option "without insurance" of "insurance" field in loan form',
                                })
                            },
                        ]}
                    />
                </Col>
            </Row>
        </form>
    );
};

export default compose(
    injectIntl,
    reduxForm({
        // a unique name for the form
        form: 'loan',
        initialValues: {
            amount: 25000,
            months: 12,
            insurance: false,
        }
    })
)(LoanForm);
