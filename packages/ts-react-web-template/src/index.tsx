import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  { Hello }  from 'ts-react-web-library';
 
console.log(Hello);


const styles = require('./main.css');

ReactDOM.render(
  (
    <div>
      <Hello compiler="test" bundler="Test" framework="test" />
    </div>
  ),
document.getElementById('root'));