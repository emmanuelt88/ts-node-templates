import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Alert }  from '@ts-template/ts-react-web-library';
import { Calculator, CalculatorRequest  } from "@ts-template/ts-node-library";

const request:CalculatorRequest = {
  a: 3456,
  b: 45345345
};

ReactDOM.render(
  (
    <div>
        <Alert kind="info">Some message</Alert>
        {
          JSON.stringify(
            new Calculator().multiply(request), null, 5
          )
        }
    </div>
  ),
document.getElementById('root'));