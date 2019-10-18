import React from 'react';
import { propTypes } from 'redux-form';
import PropTypes from 'prop-types';
import { Slider } from 'antd';

const IntegerStep = ({min, max, step, input}) => {

    return (
        <Slider
            min={min}
            max={max}
            marks={{
                [Number(min)]: {
                    label: `${min}`
                },
                [Number(max)]: {
                    label: `${max}`
                }
            }}
            step={step}
            {...input}
        />
    );
};

IntegerStep.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    ...propTypes.input
};

export default IntegerStep;
