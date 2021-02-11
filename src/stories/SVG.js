import React from 'react';

import PropTypes from 'prop-types';

import './svg.scss';

import Lottie from 'react-lottie';

import animation from "./anim.json";

export const SVG = ({ options, ...props }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="svg">
      <Lottie options={defaultOptions} />
    </div>
    );
};


SVG.propTypes = {
  // animation: PropTypes.string.isRequired,
};

SVG.defaultProps = {
  // animation: "./anim.json",
};
