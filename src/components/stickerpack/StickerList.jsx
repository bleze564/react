import React from "react";
import Sticker from "./Sticker";
class StickerList extends React.Component {
  render() {
    return (
      <ul className="stickers">
        {this.props.stickers.map((sticker, index, label) => {
          return (
            <Sticker key={index} img={sticker.img} label={sticker.label} />
          );
        })}
      </ul>
    );
  }
}
export default StickerList;
