import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, type, backgroundColor, size, label, ...props }) => {
  // const mode = type ? 'btn--primary' : 'btn--secondary';
  return (
    <button
      type="button" 
      className={['btn', `btn--${size}`, `btn--${type}`, `btn--${color}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,

  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),

  color: PropTypes.oneOf(['green', 'blue', 'white']),
    /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  // backgroundColor: null,
  // mode: 'light',
  type: 'primary',
  size: 'medium',
  color: 'green',
  onClick: undefined,
};
