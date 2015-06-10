import React from 'react';
import { addons } from 'react/addons';
import style from './style.scss';

let PureRenderMixin = addons.PureRenderMixin;

let HelloMessage = React.createClass({

  mixin: [PureRenderMixin],

  render() {
    console.log(this.shouldComponentUpdate);
    return <div className={style['hello-world']}>Hello {this.props.name}</div>;
  },
});

React.render(<HelloMessage name='John' />, document.getElementById('main'));
