import React from "react"

function Five(){
    return(
        <>
        <div style={{position:"absolute",top:"calc(30% - 7.5px)",left:"calc(30% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>
        <div style={{position:"absolute",top:"calc(30.33% - 7.5px)",right:"calc(30.33% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>
        <div style={{position:"absolute",bottom:"calc(30.33% - 7.5px)",left:"calc(30.33% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",bottom:"calc(30.33% - 7.5px)",right:"calc(30.33% - 7.5px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>    
        <div style={{position:"absolute",top:"calc(50% - 6px)",left:"calc(50% - 6px)"}} 
            className="point-dadosa bg-dark rounded-circle"
        ></div>   
        </>
    )
}

export default Five;