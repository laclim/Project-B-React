import * as React from "react";
interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}
export class Hello extends React.Component {
  render() {
    return <h1>This is a</h1>;
  }
}
