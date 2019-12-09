import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, compose } from 'ramda';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Row, Col, Spin } from 'antd';
import 'antd/dist/antd.css';
import { AppSectionWrapper } from './styled';
import LoanForm from '../LoanForm';
import LanguageSwitchForm from '../LanguageSwitchForm';
import { LoanSummary, InstalmentCard, ModalNoConnection, Layout } from '../../components';
import { fetchInstalmentRequest, selectInstalment } from '../../redux/ducks/instalment';
import { fetchInterestRateRequest, selectInterestRate } from '../../redux/ducks/interestRate';
import { fetchLocaleOptionsRequest, selectLocaleOptions } from '../../redux/ducks/localeOptions';
import { instalmentPropType, interestRatePropType, localeOptionsPropType } from '../../shapes';
import { FormattedMessage, injectIntl } from 'react-intl';

const selector = formValueSelector('loan');

const App = ({
                 intl,
                 amount,
                 months,
                 localeOptions = {},
                 insurance,
                 fetchInstalmentRequest,
                 fetchInterestRateRequest,
                 fetchLocaleOptionsRequest,
                 instalment = {},
                 interestRate = {},
             }) => {

    useEffect(() => {
        fetchInterestRateRequest();
        fetchLocaleOptionsRequest();
    }, [fetchInterestRateRequest, fetchLocaleOptionsRequest]);

    useEffect(() => {
        fetchInstalmentRequest({
            amount,
            months,
            insurance
        });
    }, [amount, months, insurance, fetchInstalmentRequest]);

    return (
        <Layout>
            <AppSectionWrapper>
                <LanguageSwitchForm
                    localeOptions={localeOptions.data || []}
                    initialValues={{
                        userLocale: intl.locale
                    }}
                    label={
                        <FormattedMessage
                            id="userLocaleForm.selectLanguage"
                            defaultMessage="select language"
                            description="label for the select element to select user language"
                        />
                    }
                    loadingOptionsMessage={
                        <FormattedMessage
                            id="userLocaleForm.loadingLanguages"
                            defaultMessage="loading..."
                            description="message to be displayed when app is loading options"
                        />
                    }
                />
            </AppSectionWrapper>
            <Row>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                >
                    <AppSectionWrapper>
                        <LoanForm />
                    </AppSectionWrapper>
                    <AppSectionWrapper>
                        {
                            isEmpty(instalment) ||
                            instalment.isLoading ||
                            isEmpty(interestRate) ||
                            interestRate.isLoading ?
                                <Spin />
                                :
                                <LoanSummary
                                    amount={amount}
                                    months={months}
                                    insurance={insurance}
                                    instalment={instalment.data}
                                    interestRate={interestRate.data}
                                />
                        }
                    </AppSectionWrapper>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                >
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
                visible={
                    !!instalment.error ||
                    !!interestRate.error ||
                    !!localeOptions.error
                }
            />
        </Layout>
    );
};

App.propTypes = {
    amount: PropTypes.number,
    fetchInstalmentRequest: PropTypes.func,
    fetchInterestRateRequest: PropTypes.func,
    fetchLocaleOptionsRequest: PropTypes.func,
    instalment: instalmentPropType,
    insurance: PropTypes.bool,
    interestRate: interestRatePropType,
    localeOptions: localeOptionsPropType,
    months: PropTypes.number,
};

const mapStateToProps = state => ({
    amount: selector(state, 'amount'),
    months: selector(state, 'months'),
    insurance: selector(state, 'insurance'),
    instalment: selectInstalment(state),
    interestRate: selectInterestRate(state),
    localeOptions: selectLocaleOptions(state),
});

const mapDispatchToProps = {
    fetchInstalmentRequest,
    fetchInterestRateRequest,
    fetchLocaleOptionsRequest,
};

export default compose(
    injectIntl,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
