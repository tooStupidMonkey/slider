import React from 'react';
import {Button as AntButton} from 'antd';
import PropTypes from 'prop-types';

const Button = ({name, handler, disabled}) => {
  return (
    <AntButton disabled={disabled} onClick={handler}>{name}</AntButton>
  );
}

Button.defaultProps = {
  name: 'Submit',
  handler: () => alert('Action'),
  disabled: false
}

Button.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;