import React from 'react';
import * as svg from './svg';

function ButtonIcon({ name, className, style }) {
  return React.createElement(svg[name], {
    className,
    style,
  });
}
export default ButtonIcon;
