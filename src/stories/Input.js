import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ state, label, labeltext, placeholder, ...props }) => {
  const labelclass = label ? ' label' : '';
  return (
    <div className={`field-group${labelclass}`}>
        {label && 
        <label>{labeltext}</label> }
        <input
          type="email" placeholder={placeholder}
          className={['input', `input--${state}`].join(' ')}
          {...props}
        />
        {state === 'error' && 
        <label className="error small">Please complete this required field.</label> }
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  label: PropTypes.bool,

  state: PropTypes.oneOf(['default', 'active', 'error']),
    /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  placeholder: PropTypes.string.isRequired,
  labeltext: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
};

Input.defaultProps = {
  // backgroundColor: null,
  // mode: 'light',
  state: 'default',
  label: true,
  // onClick: undefined,
};
