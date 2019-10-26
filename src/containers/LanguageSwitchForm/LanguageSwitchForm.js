import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Select } from '../../components';
import { localeOptionPropType } from '../../shapes';
import { Row, Label } from './styled';

const LanguageSwitchForm = ({handleSubmit, localeOptions = [], label, loadingOptionsMessage}) => {

    return (
        <form
            onSubmit={handleSubmit}
        >
            <Row>
                <Label>
                    {label}
                </Label>
                <Field
                    name="userLocale"
                    component={Select}
                    options={localeOptions}
                    loadingOptionsMessage={loadingOptionsMessage}
                    style={{width: 120}}
                />
            </Row>
        </form>
    );
};

LanguageSwitchForm.propTypes = {
    localeOptions: PropTypes.arrayOf(localeOptionPropType),
    handleSubmit: PropTypes.func,
    label: PropTypes.node,
    loadingOptionsMessage: PropTypes.node,
};

export default reduxForm({
    form: 'userLocale',
})(LanguageSwitchForm);
