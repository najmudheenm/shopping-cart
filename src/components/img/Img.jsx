import React, { PureComponent } from "react";

export class Img extends PureComponent {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default Img;
