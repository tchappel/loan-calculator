import React, { useEffect } from 'react';
import { isEmpty } from 'ramda';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Row, Col, Spin } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { AppSectionWrapper } from './styled';
import LoanForm from '../LoanForm';
import { LoanSummary, InstalmentCard, ModalNoConnection, Layout } from '../../components';
import { fetchInstalmentRequest, selectInstalment } from '../../redux/ducks/instalment';
import { fetchInterestRateRequest, selectInterestRate } from '../../redux/ducks/interestRate';
import { instalmentPropType, interestRatePropType } from '../../shapes';

const selector = formValueSelector('loan');

const App = ({
                 amount,
                 months,
                 insurance,
                 fetchInstalmentRequest,
                 fetchInterestRateRequest,
                 instalment = {},
                 interestRate = {},

             }) => {

    useEffect(() => {
        fetchInterestRateRequest();
    }, [fetchInterestRateRequest]);

    useEffect(() => {
        fetchInstalmentRequest({
            amount,
            months,
            insurance
        });
    }, [amount, months, insurance, fetchInstalmentRequest]);

    return (
        <Layout>
            <Row>
                <Col span={24}>
                    <AppSectionWrapper>
                        <LoanForm />
                    </AppSectionWrapper>
                    <AppSectionWrapper>
                        {
                            (!isEmpty(instalment) && !instalment.isLoading) &&
                            (!isEmpty(interestRate) && !interestRate.isLoading)
                                ?
                                <LoanSummary
                                    amount={amount}
                                    months={months}
                                    insurance={insurance}
                                    instalment={instalment.data}
                                    interestRate={interestRate.data}
                                />
                                :
                                <Spin />
                        }
                    </AppSectionWrapper>
                </Col>
                <Col span={24}>
                    <AppSectionWrapper>
                        <Row type="flex" justify="center">
                            <InstalmentCard
                                instalment={instalment}
                            />
                        </Row>
                    </AppSectionWrapper>
                </Col>
            </Row>
            <ModalNoConnection
                visible={!!instalment.error}
            />
        </Layout>
    );
};

App.propTypes = {
    amount: PropTypes.number,
    fetchInstalmentRequest: PropTypes.func,
    fetchInterestRateRequest: PropTypes.func,
    instalment: instalmentPropType,
    insurance: PropTypes.bool,
    interestRate: interestRatePropType,
    months: PropTypes.number,
};

const mapStateToProps = state => ({
    amount: selector(state, 'amount'),
    months: selector(state, 'months'),
    insurance: selector(state, 'insurance'),
    instalment: selectInstalment(state),
    interestRate: selectInterestRate(state),
});

const mapDispatchToProps = {fetchInstalmentRequest, fetchInterestRateRequest};

export default connect(mapStateToProps, mapDispatchToProps)(App);
