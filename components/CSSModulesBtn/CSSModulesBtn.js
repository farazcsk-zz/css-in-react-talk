import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './CSSModulesBtn.css';

const CSSModulesBtn = ({ children, primary, disabled, className }) =>
  <button
    disabled={disabled}
    className={cx(css.root, primary && css.primary, className)}
  >
    <div className={css.label}>
      {children}
    </div>
  </button>;

CSSModulesBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

export default CSSModulesBtn;
