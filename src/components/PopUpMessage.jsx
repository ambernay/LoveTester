import React from "react";
import Gosling from "../images/RyanGoslingGQ.jpg";

function PopUpMessage(props){ //send className as a prop
    return(
        <div className={props.paperStyle}>
            {props.gosImage ? <img className="gosPic" src={Gosling} alt="Ryan Gosling"/> : null}
            <h3 className={props.messageStyle} >{props.loveMessage}</h3>
        </div>
    )
}

export default PopUpMessage;