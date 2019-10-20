import React from 'react';
import { propTypes } from 'redux-form';
import { InputNumber } from 'antd';

const IntegerInputNumber = ({input, meta, ...rest}) => (
    <InputNumber
        style={{marginLeft: 50}}
        {...input}
        {...rest}
    />
);

IntegerInputNumber.propTypes = {
    ...propTypes.input
};

export default IntegerInputNumber;
