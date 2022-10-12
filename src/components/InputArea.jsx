import React, { useState, useRef, useEffect} from "react";

function Inputs(props){
  
// #region for initial focus
  const inputRef = useRef();

  useEffect(() =>{
    inputRef.current.focus();
  },[]);
//#end region

// #region storing input values
  const [names, setNames] = useState({
    yourName: "",
    loveName: ""
  });

  function inputNames(event){
    const {name, value} = event.target;
    setNames(prevName => {
      return {...prevName, [name] : value}
    })
  };
// #end region

// #region mouseover button
  const [isMouseOn, setIsMouseOn] = useState(false);
  
  function inButton(){
    setIsMouseOn(true);
  };
  function outButton(){
    setIsMouseOn(false);
  };
// #endregion

  return(
    <div className="inputArea">
      <form className="form" >
        <input 
          ref={inputRef}
          onChange={inputNames}
          id="userName" 
          name="yourName"
          value={names.yourName}
          type="text" 
          placeholder="Your Name" 
          autoComplete="off"/>
        <input 
          onChange={inputNames}
          id="loveName" 
          name="loveName"
          value={names.loveName}
          type="text" 
          placeholder="Love's Name" 
          autoComplete="off"/>
        <button className = "shadowButton"
          onMouseEnter={inButton}
          onMouseLeave={outButton}
          style={{boxShadow: isMouseOn ? "-0.5px 0.5px 1.5px grey" : "-1px 1px 3px grey"}}
          onClick={(event) => {
            props.onSubmit(names);
            event.preventDefault();
            setNames({
              yourName:"",
              loveName:""
            });
          }}
          id="submit"
        >{props.buttonText}
        </button>
      </form>
    </div>  
  )
}

export default Inputs ;