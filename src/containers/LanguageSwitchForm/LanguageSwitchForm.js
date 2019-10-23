import React from 'react';
import { compose } from 'ramda';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Select } from '../../components';
import { localeOptionPropType } from '../../shapes';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, FormFieldLabel } from './styled';

const LanguageSwitchForm = ({handleSubmit, localeOptions = []}) => {

    return (
        <form
            onSubmit={handleSubmit}
        >
            <Row>
                <FormFieldLabel>
                    <FormattedMessage
                        id="userLocaleForm.selectLanguage"
                        defaultMessage="select language"
                        description="label for the select element to select user language"
                    />
                </FormFieldLabel>
                <Field
                    name="userLocale"
                    component={Select}
                    options={localeOptions}
                    loadingOptionsMessage={
                        <FormattedMessage
                            id="userLocaleForm.loadingLanguages"
                            defaultMessage="loading..."
                            description="message to be displayed when app is loading options"
                        />
                    }
                    style={{width: 120}}
                />
            </Row>
        </form>
    );
};

LanguageSwitchForm.propTypes = {
    localeOptions: PropTypes.arrayOf(localeOptionPropType),
    handleSubmit: PropTypes.func,
};

export default compose(
    injectIntl,
    reduxForm({
        // a unique name for the form
        form: 'userLocale',
    })
)(LanguageSwitchForm);
