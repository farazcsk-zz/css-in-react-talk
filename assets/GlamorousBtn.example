import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Root = glamorous.button(({ primary }) => ({
  fontSize: '1rem',
  backgroundColor: primary ? '#FFFFFF' : 'transparent',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: primary ? '#191919' : '#FFFFFF',
  padding: '1.4rem 2.1rem',
  border: '2px solid #FFFFFF',
  transition:
    'color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1),background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1)',
  display: 'inline-block',
  cursor: 'pointer',
  width: '100%',
  outline: 'none',
  verticalAlign: 'middle',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  ':hover > div': {
    transform: 'translate3d(-1rem, 0, 0)',
  },
  ':hover > div:after': {
    opacity: '1',
    right: '-2rem',
  },
  '[disabled]': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '#383838',
    borderColor: '#383838',
    opacity: '1',
  },
}));

const Label = glamorous.div(({ primary }) => ({
  display: 'inline-block',
  position: 'relative',
  transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
  willChange: 'transform',
  ':after': {
    content: '"→"',
    color: primary ? '#191919' : '#FFFFFF',
    position: 'absolute',
    width: '1.1em',
    right: '0',
    opacity: '0',
    top: '0',
    transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'right, opacity',
  },
}));

const GlamorousBtn = ({ children, primary, disabled, className }) =>
  <Root primary={primary} disabled={disabled} className={className}>
    <Label primary={primary}>
      {children}
    </Label>
  </Root>;

GlamorousBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

export default GlamorousBtn;
