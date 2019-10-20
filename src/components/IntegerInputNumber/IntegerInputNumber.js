import React from 'react';
import { propTypes } from 'redux-form';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';
import { IntegerInputNumberWrapper, Tag } from './styled';

const IntegerInputNumber = ({input, unit, meta, ...rest}) => (
    <IntegerInputNumberWrapper>
        <InputNumber
            {...input}
            {...rest}
        />
        <Tag>{unit}</Tag>
    </IntegerInputNumberWrapper>
);

IntegerInputNumber.propTypes = {
    ...propTypes.input,
    unit: PropTypes.string
};

export default IntegerInputNumber;
