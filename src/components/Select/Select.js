import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { FormattedMessage } from 'react-intl';
import { Select as AntdSelect } from 'antd';
import { selectOptionPropType } from '../../shapes';
import { propTypes } from 'redux-form';

const {Option: AntdOption} = AntdSelect;

const Select = ({input, meta, options = [], loadingOptionsMessage, style, ...rest}) => {

    return (
        isEmpty(options) ?
            <AntdSelect
                style={{width: 120, ...style}}
                loading
                disabled
                defaultValue="loading"
            >
                <AntdOption
                    value="loading"
                >
                    {loadingOptionsMessage}
                </AntdOption>
            </AntdSelect>
            :
            <AntdSelect
                style={{width: 120, ...style}}
                {...input}
                {...rest}
            >
                {
                    options.map(option => (
                        <AntdOption
                            key={`selectOption_${option.value}`}
                            value={option.value}
                        >
                            <FormattedMessage
                                id={option.id}
                            />
                        </AntdOption>
                    ))
                }
            </AntdSelect>
    );
};

Select.propTypes = {
    ...propTypes.input,
    options: PropTypes.arrayOf(selectOptionPropType),
    loadingOptionsMessage: PropTypes.node,
    style: PropTypes.object,
};

export default Select;
