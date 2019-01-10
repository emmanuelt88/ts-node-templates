import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/HelloWorld/Hello';

import pepe from 'test-components/dist';

console.log(pepe);


const styles = require('./main.css');

ReactDOM.render(
  (
    <div>
      <Hello  compiler="Typescript" framework="React" bundler="Webpack" />
    </div>
  ),
document.getElementById('root'));