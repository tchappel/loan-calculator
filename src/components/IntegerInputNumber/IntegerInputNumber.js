import React from 'react';
import { InputNumber } from 'antd';

const IntegerInputNumber = ({input, meta, ...rest}) => (
    <InputNumber
        style={{marginLeft: 50}}
        {...input}
        {...rest}
    />
);

export default IntegerInputNumber;
