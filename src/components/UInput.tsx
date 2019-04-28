import React from 'react';
import Colors from '../colors';
import Fonts from '../fonts'

const style = Object.assign({
  background: Colors.white,
  width: '292px',
  height: '42px',
  borderRadius: '20px',
}, Fonts.actions)

export default () => <input type="text" style={style}></input>;