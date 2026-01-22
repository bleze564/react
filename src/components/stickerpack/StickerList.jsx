import React from "react";
import Sticker from "./Sticker";
const StickerList = ({stickers}) => {
    return(
        <ul className="stickers">
          {stickers.map((sticker, index) =>{
            return(
                <Sticker key={index} img={sticker.img} label={sticker.label}/>
            )
          })
          }
            </ul>
    )
}
export default StickerList