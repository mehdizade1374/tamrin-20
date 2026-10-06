import { createContext, useContext, useState } from "react";
import { Color } from "../../App";
// export const Color = createContext();


function Button(){

const[btntext , setbtntext]=useState('light')
const[color , setColor]=useContext(Color)



    const changeColor=(e)=>{
     if(e.target.innerText=="light"){
    setbtntext('dark')
    setColor('light')
    
     } if(e.target.innerText=="dark"){
       setbtntext('light') 
      setColor('dark')
     }
    }


    return(
        <button className="btnclass" onClick={changeColor}>{btntext}</button>
    )
}

export default Button;