import React from 'react';
import { InputNumber } from 'antd';
import { propTypes } from 'redux-form';
import PropTypes from 'prop-types';

const IntegerInputNumber = props => {

    const {min, max, step, input} = props;

    return (
        <InputNumber
            min={min}
            max={max}
            step={step}
            style={{marginLeft: 16}}
            {...input}
        />
    );
};

IntegerInputNumber.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    ...propTypes.input
};

export default IntegerInputNumber;
