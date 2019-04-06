import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Alert }  from '@ts-template/ts-react-web-library';


const styles = require('./main.css');

ReactDOM.render(
  (
    <div>
        <Alert kind="info">Some message</Alert>
    </div>
  ),
document.getElementById('root'));