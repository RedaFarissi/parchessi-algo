import React from "react";

function Table_dar(props){
    let border_color ,  boy = ["block","block","block","block"];
    
    switch(props.bg){
        case "var(--primary)" : border_color = "border-primary"; break;
        case "var(--danger)"  : border_color = "border-danger" ; break;
        case "var(--success)" : border_color = "border-success"; break;
        case "var(--warning)" : border_color = "border-warning"; break;
        default : ;break;
    }

    if( props.wlad_p? true:false ){ boy = props.wlad_p.map(e => e)}
    else if( props.wlad_s? true:false ){ boy = props.wlad_s.map(e => e)}
    
    return(
    <div className={`${props.classN} border ${border_color} d-flex justify-content-center align-items-center rounded`}
    style={{backgroundColor:props.bg}}> 
        <div className="Circle-player rounded-circle">
           <div className="rounded-circle border Boy Boy1" style={{backgroundColor:props.bg,display:boy[0]}}> </div>
           <div className="rounded-circle border Boy Boy2" style={{backgroundColor:props.bg,display:boy[1]}}> </div>
           <div className="rounded-circle border Boy Boy3" style={{backgroundColor:props.bg,display:boy[2]}}> </div>
           <div className="rounded-circle border Boy Boy4" style={{backgroundColor:props.bg,display:boy[3]}}> </div>
        </div>
    </div>
    )
}
export default React.memo(Table_dar)