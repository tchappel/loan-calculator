import React from 'react';
import { compose } from 'ramda';
import { reduxForm, Field } from 'redux-form';
import { Row, Col } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FormFieldHeading, FormFieldHeadingRow, FormSectionSeparator, SliderMarkLabel } from './styled';
import { IntegerStep, IntegerInputNumber, RadioGroup } from '../../components';

let LoanForm = ({handleSubmit, intl}) => {

    const translatedMonths = intl.formatMessage({
        id: 'app.months',
        defaultMessage: 'months',
        description: 'translation from "months"',
    });

    return (
        <form onSubmit={handleSubmit}>
            <FormFieldHeadingRow>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.amount"
                        defaultMessage="amount"
                        description="Label for 'amount' field of 'loan' form"
                    />
                </FormFieldHeading>
                <Field
                    name={'amount'}
                    component={IntegerInputNumber}
                    unit="CZK"
                    // props related to antd InputNumber component API and custom props
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
            </FormFieldHeadingRow>
            <Row>
                <Col span={24}>
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
                                    label: <SliderMarkLabel>CZK 25.000</SliderMarkLabel>
                                },
                                100000: {
                                    label: <SliderMarkLabel>CZK 100.000</SliderMarkLabel>
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
            </Row>
            <FormSectionSeparator />
            <FormFieldHeadingRow>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.repaymentTime"
                        defaultMessage="repayment time"
                        description="Label for 'repayment time' field of 'loan' form"
                    />
                </FormFieldHeading>
                <Field
                    name={'months'}
                    component={IntegerInputNumber}
                    // prevent blur to convert the value in store into string
                    onBlur={event => event.preventDefault()}
                    // props related to antd InputNumber component API and custom props
                    // I choose to pass these props like this to separate them from Field props
                    props={{
                        min: 12,
                        max: 60,
                        step: 1,
                    }}
                    unit={translatedMonths}
                />
            </FormFieldHeadingRow>
            <Row>
                <Col span={24}>
                    <Field
                        name={'months'}
                        component={IntegerStep}
                        // props related to antd InputNumber component API
                        // I choose to pass these props like this to separate them from Field props
                        props={{
                            min: 12,
                            max: 60,
                            step: 1,
                            marks: {
                                12: {
                                    label: <SliderMarkLabel>12 {translatedMonths}</SliderMarkLabel>
                                },
                                60: {
                                    label: <SliderMarkLabel>60 {translatedMonths}</SliderMarkLabel>
                                }
                            },
                            tipFormatter: value => `${value} ${translatedMonths}`
                        }}
                    />
                </Col>
            </Row>
            <FormSectionSeparator />
            <FormFieldHeadingRow>
                <FormFieldHeading>
                    <FormattedMessage
                        id="loanForm.insurance"
                        defaultMessage="insurance"
                        description="Label for 'insurance' field of 'loan' form"
                    />
                </FormFieldHeading>
            </FormFieldHeadingRow>
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
