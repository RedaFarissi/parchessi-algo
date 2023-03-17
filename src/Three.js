import React from "react";

function Three(){
    return(
        <>
        <div style={{position:"absolute",top:"calc(35% - 7.5px)",left:"calc(50% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",bottom:"calc(35% - 7.5px)",left:"calc(35% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",bottom:"calc(35% - 7.5px)",right:"calc(35% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle">
        </div>
        </>
    )
}
export default Three