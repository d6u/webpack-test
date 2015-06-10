import React from 'react';
import { addons } from 'react/addons';
import style from './style.scss';

let PureRenderMixin = addons.PureRenderMixin;

class HelloMessage extends React.Component {

  mixin = [PureRenderMixin];

  render() {
    return <div className={style['hello-world']}>Hello {this.props.name}</div>;
  }
}

React.render(<HelloMessage name='John' />, document.getElementById('main'));
