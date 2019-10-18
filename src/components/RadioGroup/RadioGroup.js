import React from 'react';
import { Radio } from 'antd';
import { propTypes } from 'redux-form';
import { prop } from 'ramda';

const RadioGroup = ({input, options}) => (
    <Radio.Group
        {...input}
    >
        {
            options.map(option => (
                <Radio
                    key={prop('value', option) === undefined ? option : prop('value', option)}
                    value={prop('value', option) === undefined ? option : prop('value', option)}
                >
                    {prop('label', option) === undefined ? option : prop('label', option)}
                </Radio>
            ))
        }
    </Radio.Group>
);

RadioGroup.propTypes = {
    ...propTypes.input
};

export default RadioGroup;
