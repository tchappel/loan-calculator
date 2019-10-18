import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { LoanForm } from './containers';
import { LoanSummary, InstalmentCard, ModalNoConnection, Layout } from './components';
import { formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { fetchInstalmentRequest, selectInstalment } from './redux/ducks/instalment';
import { instalmentPropType } from './shapes';

const selector = formValueSelector('loan');

const App = ({amount, months, insurance, fetchInstalmentRequest, instalment = {}}) => {

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
                <Col span={12}>
                    <LoanForm />
                    {
                        instalment.isLoading
                            ?
                            <Spin />
                            :
                            <LoanSummary
                                amount={amount}
                                months={months}
                                insurance={insurance}
                                instalment={instalment.data}
                            />
                    }
                </Col>
                <Col span={12}>
                    <Row type="flex" justify="center">
                        <InstalmentCard
                            instalment={instalment}
                        />
                    </Row>
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
    instalment: instalmentPropType,
    insurance: PropTypes.bool,
    months: PropTypes.number,
};

const mapStateToProps = state => ({
    amount: selector(state, 'amount'),
    months: selector(state, 'months'),
    insurance: selector(state, 'insurance'),
    instalment: selectInstalment(state),
});

const mapDispatchToProps = {fetchInstalmentRequest};

export default connect(mapStateToProps, mapDispatchToProps)(App);
