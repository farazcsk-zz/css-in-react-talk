import React from 'react';
import cx from 'classnames';

import css from './CSSModulesBtn.css';

const CSSModulesBtn = ({ children, primary, disabled }) =>
  <button disabled={disabled} className={cx(css.root, primary && css.primary)}>
    <div className={css.label}>
      {children}
    </div>
  </button>;

export default CSSModulesBtn;
