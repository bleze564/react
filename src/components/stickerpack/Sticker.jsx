import React from "react";


const Sticker = ({img, label}) =>{
    return (
        <li className="sticker">
         <img src={img} alt="sticker" />
         <p className="text"> 
            {label}
         </p>
        </li>
    )
}
export default Sticker