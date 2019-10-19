import React from 'react';
import { Slider } from 'antd';

const IntegerStep = ({input, meta, ...rest}) => (
    <Slider
        {...input}
        {...rest}
    />
);

export default IntegerStep;
