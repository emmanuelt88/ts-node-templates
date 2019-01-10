import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}
export default class Hello extends React.Component<IProps, {}> {
   render() {
   return <h1>Yeah.This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}
    <Button variant="contained" color="secondary">
      Hello World
      {moment().format()}
    </Button>
   </h1>
   }
}