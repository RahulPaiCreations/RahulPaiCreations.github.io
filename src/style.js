import React from 'react';
import PropTypes from 'prop-types';

const link = {
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 168)',
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 168)',
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 168)',
  },
  focusFromTab: {
    outline: '2px solid rgb(0, 152, 152)',
    outlineOffset: '2px',
    color: 'cyan',
  },
  touchActiveTapOnly: true,
};

const navItem = {
  normal: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  active: 'hover',
  touchActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  focusFromTab: {
    outline: '2px solid rgb(152, 152, 152)',
    outlineOffset: '2px',
    color: 'cyan',
  },
  touchActiveTapOnly: true,
};

const childLink = {};
Object.keys(link).forEach((key) => {
  if (key !== 'touchActiveTapOnly') {
    childLink[`onParent${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = link[key];
  }
});

export default {
  link,
  childLink,
  p: {
    marginBottom: '3vh',
    lineHeight: '1.4',
  }
};

export const Code = ({ children }) => (
  <code
    style={{
      fontFamily: 'monospace',
      fontSize: '15px',
      paddingLeft: '2px',
    }}
  >{children}</code>
);

Code.propTypes = {
  children: PropTypes.string.isRequired,
};

export const Li = ({ children, ...rest }) => (
  <li
    style={{
      paddingLeft: '18px',
      textIndent: '-15px',
      margin: '0.5vh 0',
      listStyle: 'none',
    }}
    {...rest}
  >
    <span style={{ paddingRight: '7px' }}>&ndash;</span>
    {children}
  </li>
);

Li.propTypes = {
  children: PropTypes.string.isRequired,
};
