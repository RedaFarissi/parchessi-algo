import React from "react";

function Six(){
    return(
    <>
        <div style={{position:"absolute",top:"calc(20% - 4px)",left:"calc(30% - 4px)"}}
            className="point-dadosa bg-dark rounded-circle"
        ></div>
        <div style={{position:"absolute",top:"calc(20% - 4px)",right:"calc(30% - 4px)"}}
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",bottom:"calc(20% - 4px)",left:"calc(30% - 4px)"}}
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",bottom:"calc(20% - 4px)",right:"calc(30% - 4px)"}}
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",top:"calc(50% - 6.5px)",left:"calc(30% - 4px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",top:"calc(50% - 6.5px)",right:"calc(30% - 4px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>
    </>
    )
} 

export default Six;