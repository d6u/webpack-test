import React from 'react';
import style from './style.scss';

class HelloMessage extends React.Component {
  render() {
    return <div className={style['hello-world']}>Hello {this.props.name}</div>;
  }
}

React.render(<HelloMessage name='John' />, document.getElementById('main'));
