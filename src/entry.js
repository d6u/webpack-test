import style from './style.css';
import content from './content.js';
import React from 'react';

class Test {
  write() {
    document.write(content);
  }
}

new Test().write();

function* gen() {
  yield 1;
  yield 2;
}

var g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());

async function run() {
  let a = await Promise.resolve(123);
  let b = await Promise.resolve(123);
  console.log(123);
}

run();

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render(<HelloMessage name="John" />, document.getElementById('main'));
