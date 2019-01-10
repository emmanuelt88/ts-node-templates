import * as React from 'react';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}
export default class Hello extends React.Component<IProps, {}> {
   render() {
   
   return <h1>Yeah.This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}
    <div>
      Hello World
      {JSON.stringify(this.props)}
    </div>
   </h1>
   }
}