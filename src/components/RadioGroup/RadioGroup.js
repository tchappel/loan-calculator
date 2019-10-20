import React from 'react';
import { Radio } from 'antd';
import { propTypes } from 'redux-form';
import { prop } from 'ramda';
import { RadioOptionWrapper } from './styled';
import { radioGroupOptionsPropType } from '../../shapes';

const RadioGroup = ({input, options}) => (
    <Radio.Group
        {...input}
    >
        {
            options.map(option => (
                <RadioOptionWrapper
                    key={prop('value', option) === undefined ? option : prop('value', option)}
                >
                    <Radio
                        value={prop('value', option) === undefined ? option : prop('value', option)}
                    >
                        {prop('label', option) === undefined ? option : prop('label', option)}
                    </Radio>
                </RadioOptionWrapper>
            ))
        }
    </Radio.Group>
);

RadioGroup.propTypes = {
    options: radioGroupOptionsPropType,
    ...propTypes.input
};

export default RadioGroup;
