import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { IntlProvider } from 'react-intl';
import { messages } from '../../translations/configureMessages';

const selector = formValueSelector('userLocale');

const IntlProviderConfigurer = ({children, userLocale}) => {

    // get user agent language without region code
    const browserLocale = navigator.language.split(/[-_]/)[0] || 'en';

    return (
        <IntlProvider
            locale={userLocale || browserLocale}
            messages={messages[userLocale || browserLocale]}
        >
            {children}
        </IntlProvider>
    );
};

IntlProviderConfigurer.propTypes = {
    children: PropTypes.node,
    userLocale: PropTypes.string,
};

const mapStateToProps = state => ({
    userLocale: selector(state, 'userLocale')
});

export default connect(mapStateToProps)(IntlProviderConfigurer);
