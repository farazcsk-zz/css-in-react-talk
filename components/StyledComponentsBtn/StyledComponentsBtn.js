import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.button`
  font-size: 10px;
  font-size: 1rem;
  background-color: ${props => (props.primary ? '#FFFFFF' : 'transparent')};
  color: ${props => (props.primary ? '#191919' : '#FFFFFF')};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1.4rem 2.1rem;
  border: 2px solid #ffffff;
  transition: color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1),
    background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1);
  display: inline-block;
  cursor: pointer;
  width: 100%;
  outline: none;
  vertical-align: middle;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover > div {
    transform: translate3d(-1rem, 0, 0);
  }

  &:hover > div:after {
    opacity: 1;
    right: -2rem;
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background-color: transparent;
    color: #383838;
    border-color: #383838;
    opacity: 1;
  }
`;

const Label = styled.div`
  display: inline-block;
  position: relative;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;

  &:after {
    content: '=>';
    color: ${props => (props.primary ? '#191919' : '#FFFFFF')};
    position: absolute;
    width: 1.1em;
    right: 0;
    opacity: 0;
    top: 0;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: right, opacity;
  }
`;

const StyledComponentsBtn = ({ children, primary, disabled, className }) =>
  <Root primary={primary} disabled={disabled} className={className}>
    <Label primary={primary}>
      {children}
    </Label>
  </Root>;

StyledComponentsBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

export default StyledComponentsBtn;
