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

export const localeOptionPropType = PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
});

export const localeOptionsPropType = PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.arrayOf(localeOptionPropType)
});

export const selectOptionPropType = PropTypes.shape({
    value: PropTypes.any,
    id: PropTypes.string,
});
