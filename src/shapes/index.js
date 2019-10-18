import PropTypes from 'prop-types';

export const instalmentPropType = PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.number,
});
