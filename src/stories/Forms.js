import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';

import './header.scss';

export const Forms = ({ state, fieldstate, label }) => (

  <div className="page">
      {label && <div className={['form', `${state}`].join(' ')}>
        <h4>Form with labels</h4>
        <Input state={`${fieldstate}`} label={true} labeltext="Email Address (the one linked to your AMBOSS Account)*
" placeholder="Type your email" />
        <Input state={`${fieldstate}`} label={true} labeltext="Last Name*" placeholder="Type your name" />
        <Select selectstate={`${fieldstate}`} label={true} labeltext="Select your country" placeholder="Select your country" />

        <Button size="medium" label="Submit" />
      </div>}

      {!label && <div className={['form', `${state}`].join(' ')}>
        <h4>Form without labels</h4>
        <Input state={`${fieldstate}`} label={false} labeltext="Test" placeholder="Type your email" />
        <Input state={`${fieldstate}`} label={false} labeltext="Test" placeholder="Type your name" />
        <Select selectstate={`${fieldstate}`} label={false} labeltext="Select your country" placeholder="Select your country" />

        <Button size="medium" label="Submit" />
      </div>}

    {/* {user ? (
      // <Input size="small" onClick={onLogout} label="Log out" />
      <Input state="default" />

    ) : (
      <>
      </>
    )} */}
  </div>
);
// Page.propTypes = {
//   // user: PropTypes.shape({}),
//   // onLogin: PropTypes.func.isRequired,
//   // onLogout: PropTypes.func.isRequired,
//   // onCreateAccount: PropTypes.func.isRequired,
// };
Forms.propTypes = {
  state: PropTypes.oneOf(['default', 'card', 'filled']),
  label: PropTypes.bool,
  fieldstate: PropTypes.oneOf(['default', 'active', 'error']),

};
