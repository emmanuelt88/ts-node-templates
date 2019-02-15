import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from '@ts-template/ts-react-web-library';



const styles = require('./main.css');

ReactDOM.render(
  (
    <div>
      <Hello compiler="test01" bundler="Test02" framework="test03" />
    </div>
  ),
document.getElementById('root'));