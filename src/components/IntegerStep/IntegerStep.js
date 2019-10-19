import React from 'react';
import { propTypes } from 'redux-form';
import { Slider } from 'antd';

const IntegerStep = ({input, meta, ...rest}) => (
    <Slider
        {...input}
        {...rest}
    />
);

IntegerStep.propTypes = {
    ...propTypes.input
};

export default IntegerStep;
