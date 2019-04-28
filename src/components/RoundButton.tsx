import React from 'react';
import Colors from '../colors';
import Fonts from '../fonts'

const style = Object.assign({
  background: Colors.action.primary,
  width: '292px',
  height: '42px',
  borderRadius: '20px',
  color: Colors.white,
}, Fonts.actions)

export default ({ children }) => <button style={style}>{children}</button>;