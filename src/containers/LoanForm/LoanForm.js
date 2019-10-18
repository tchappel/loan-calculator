import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Tag } from 'antd';
import { FormFieldHeading } from './styled';
import { IntegerStep, IntegerInputNumber, RadioGroup } from '../../components';

let LoanForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <FormFieldHeading>
                    Amount
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={18}>
                    <Field
                        name={'amount'}
                        component={IntegerStep}
                        min={25000}
                        max={100000}
                        step={1000}
                    />
                </Col>
                <Col span={6}>
                    <Field
                        name={'amount'}
                        component={IntegerInputNumber}
                        min={25000}
                        max={100000}
                        step={1000}
                        // prevent blur to convert the value in store into string
                        onBlur={event => event.preventDefault()}
                    />
                    <Tag>CZK</Tag>
                </Col>
            </Row>
            <Row>
                <FormFieldHeading>
                    Repayment time
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={18}>
                    <Field
                        name={'months'}
                        component={IntegerStep}
                        min={12}
                        max={60}
                        step={1}
                    />
                </Col>
                <Col span={6}>
                    <Field
                        name={'months'}
                        component={IntegerInputNumber}
                        min={12}
                        max={60}
                        step={1}
                        // prevent blur to convert the value in store into string
                        onBlur={event => event.preventDefault()}
                    />
                    <Tag>months</Tag>
                </Col>
            </Row>
            <Row>
                <FormFieldHeading>
                    Insurance
                </FormFieldHeading>
            </Row>
            <Row>
                <Col span={24}>
                    <Field
                        name={'insurance'}
                        component={RadioGroup}
                        options={[
                            {value: true, label: 'with insurance'},
                            {value: false, label: 'without insurance'},
                        ]}
                    />
                </Col>
            </Row>
        </form>
    );
};

export default reduxForm({
    // a unique name for the form
    form: 'loan',
    initialValues: {
        amount: 25000,
        months: 12,
        insurance: false,
    }
})(LoanForm);
