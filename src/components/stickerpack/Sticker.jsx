import React from "react";

class Sticker extends React.Component {
  render() {
    return (
      <li className="sticker">
        <img src={this.props.img} alt="sticker" />
        <p className="text">{this.props.label}</p>
      </li>
    );
  }
}
export default Sticker;
