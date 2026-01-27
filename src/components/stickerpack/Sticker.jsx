import React from "react";

class Sticker extends React.Component {
  render(img, label) {
    return (
      <li className="sticker">
        <img src={img} alt="sticker" />
        <p className="text">{label}</p>
      </li>
    );
  }
}
export default Sticker;
