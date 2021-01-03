import React from 'react';
import { Button } from 'antd';

const CustomButton = (props) => {
  return (
    <Button type="primary" className={`custom-button-${props.color}`}>{props.children}</Button>
  )
};

export default CustomButton;