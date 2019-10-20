import PropTypes from 'prop-types';

export const instalmentPropType = PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.number,
});

export const interestRatePropType = PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.number,
});

const radioGroupOptionPropType = PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
});

export const radioGroupOptionsPropType = PropTypes.arrayOf(radioGroupOptionPropType);
