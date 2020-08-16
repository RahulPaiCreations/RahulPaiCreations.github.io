import React from 'react';
import PropTypes from 'prop-types';
import { Code } from '../style';
import style from '../style';

const s = Object.create(style);

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <p>
      Page not found - the path, <Code>{location.pathname}</Code>,
      did not match any React Router routes.
    </p>
  );
}

PageNotFound.propTypes = propTypes;
