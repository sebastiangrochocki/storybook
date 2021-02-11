import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Forms } from './Forms';
import { Button } from './Button';
import { SVG } from './SVG';


import './page.scss';
import Lottie from 'react-lottie';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section>
      <div className="row">
        <div className="col">
          <h2 className="a-c">First page with HS form</h2>
          <div className="btn-group">
            <Button size="medium" label="Submit" color="blue" />  
            <Button size="medium" label="Read more" color="green"/>
          </div>
          <p>
            We recommend building UIs with a{' '}
            <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
              <strong>component-driven</strong>
            </a>{' '}
            process starting with atomic components and ending with pages.
          </p>
          <Forms state="card" />
        </div>
      </div>

      <div className="row">
        <div className="col">
            <p>
            Render pages with mock data. This makes it easy to build and review page states without
            needing to navigate to them in your app. Here are some handy patterns for managing page data
            in Storybook:
          </p>
          <ul>
            <li>
              Use a higher-level connected component. Storybook helps you compose such data from the
              "args" of child component stories
            </li>
            <li>
              Assemble data in the page component from your services. You can mock these services out
              using Storybook.
            </li>
          </ul>
          <p>
            Get a guided tutorial on component-driven development at{' '}
            <a href="https://www.learnstorybook.com" target="_blank" rel="noopener noreferrer">
              Learn Storybook
            </a>
            . Read more in the{' '}
            <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
              docs
            </a>
            .
          </p>
        </div>
      </div>

    </section>

    <section>
      <div className="row">
        <div className="col">
          <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page data
          in Storybook:
          </p>
        </div>
        <div className="col">
          <SVG/>
        </div>
      </div>
    </section>
  </article>
);
Page.propTypes = {
};

Page.defaultProps = {
};
