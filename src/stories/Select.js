import React from 'react';

import PropTypes from 'prop-types';
import './select.scss';


/**
 * Primary UI component for user interaction
 */

export const Select = ({ selectstate, placeholder, data, label, labeltext, ...props }) => {
  const labelclass = label ? ' label' : '';

  return (
    <div className={`field-group${labelclass}`}>
      {label && 
      <label>{labeltext}</label> }
      <select className={['select', `select--${selectstate}`].join(' ')} name="pets" id="pet-select">
          <option value="">{placeholder}</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
      </select>
      {selectstate === 'error' && 
        <label className="error small">Please complete this required field.</label> }
    </div>
    );
};


Select.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  label: PropTypes.bool,

  selectstate: PropTypes.oneOf(['default', 'active', 'error']),

  placeholder: PropTypes.string.isRequired,
  labeltext: PropTypes.string.isRequired,

};

Select.defaultProps = {
  // backgroundColor: null,
  // mode: 'light',
  selectstate: 'default',
  label: true,
  placeholder: 'Select your country',
  // onClick: undefined,
};
