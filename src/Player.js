import React  from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four"
import Five from "./Five"
import Six from "./Six"


function Player(props){
    const numbers = [<One />,<Two />,<Three />,<Four />,<Five />,<Six />]
    let poT , poL , num , bg_Color , opacit = "0.5";

    switch(props.bg){
        case "var(--danger)"  : poT="calc(100vh - var(--P150))"; poL="0px";break;
        case "var(--success)" : poT="calc(100vh - var(--P150))"; poL="calc(100% - var(--P150))";break;
        case "var(--warning)" : poT="0%"; poL="calc(100% - var(--P150))";break;
        default : poT="0%";poL="0%"; break;
    }

    if(props.noba_p && props.bg === "var(--primary)"){ bg_Color="gold"; opacit="1" }
    if(props.noba_s && props.bg === "var(--success)"){ bg_Color="gold"; opacit="1" }
    
    for(let i=1 ; i<=6 ; i++ ) if(props.num === i ) num = numbers[i-1] 
    if(props.num === 12){ num = <Six />}

    return(
        <div className="Player_cadre position-absolute rounded border border-5 d-flex justify-content-center align-items-center"
        style={{top:poT , left:poL , backgroundColor:bg_Color , opacity:opacit }}>
            <div onClick={props.click} style={{backgroundColor:props.bg}} className="Player_dadosa border rounded">
               {num}
            </div>
        </div>
    )
}

export default React.memo(Player)