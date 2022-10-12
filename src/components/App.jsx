import React, {useState} from "react";
import Heading from "./Header";
import Inputs from "./InputArea";
import PopUpMessage from "./PopUpMessage";

function App(){

    const [message, setMessage] = useState(["Put your love to the test"]);
    const [buttonMessage, setButtonMessage] = useState("Test");
    const [messageClass, setMessageClass] = useState("message");
    const [paperClass, setPaperClass] = useState("messagePaper");
    const [isGosling, setIsGosling] = useState(false);

    function calcNames(names){

        const yourInputName = (names.yourName).toLowerCase();
        const loveInputName = (names.loveName).toLowerCase();
        const yourFName = yourInputName.trim().split(" ")[0];
        const loveFName = loveInputName.trim().split(" ")[0];

        setMessageClass("message");
        setPaperClass("messagePaper");
        setIsGosling(false);

        if(yourInputName === "" || loveInputName === ""){
            setMessage("Test your love in the fields below!");
        }
        else if(yourInputName !== "" && loveInputName === "ryan gosling"){
            setMessage("Hey girl,\nI don't need an algorithm to know we're meant to be.")
            setMessageClass("gosMessage");
            setPaperClass("gosling");
            setIsGosling(true);
        }else{
            const lovePercent = (yourFName + loveFName)
            .split("")
            .map(letter => letter.charCodeAt())
            .reduce((acc, curr) => acc + curr) % 100;

            if (loveFName.length > 20){
                setMessage("You and " + loveFName.substring(0,20) + "..." 
                + " are " + lovePercent + "% compatible!");
            }else{
                setMessage("You and " + loveFName + " are " + lovePercent + "% compatible!");
            }

            // let loveName = loveFName;
            // if(loveFName.length > 5){
            //     let loveName = loveFName.substring(0,5) + "...";
            // }else{
            //     let loveName = loveFName;
            // }
            // setMessage("You and " + loveName + " are " + lovePercent + "% compatible!");
           
            setButtonMessage("Try Again?");
        }
      }
    return( 
        <div id="grid">
            <Heading />
            <PopUpMessage 
                loveMessage={message}
                paperStyle={paperClass}
                messageStyle={messageClass}
                gosImage={isGosling}
            />
            <Inputs 
                onSubmit={calcNames}
                buttonText={buttonMessage}
            />
        </div>
    ) 
}

export default App;