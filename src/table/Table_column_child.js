import React  from "react";

function Table_column_child(props){
    let style_p = [{display:"none"},{display:"none"},{display:"none"},{display:"none"}]
    let style_s = [{display:"none"},{display:"none"},{display:"none"},{display:"none"}]
    const keysP = Object.keys(props.boy_p)
    const keysS = Object.keys(props.boy_s)
    let sad_style = "" , count = 0;
    for(let i=0 ; i<4 ; i++){
        if(props.num === props.boy_p[keysP[i]]){
            style_p[i].display = "block";
            count++;
        } 
        if(props.num === props.boy_s[keysS[i]]){
            style_s[i].display = "block" 
            count++;
        }
    }
    if(count === 2) sad_style = "bg-dark"

    return(
        <div className={`${props.table_column_children} ${sad_style} d-flex justify-content-center align-items-center`}>
            
            <div style={{position:"absolute"}} className="style_num"> {props.num} </div>
            
            <div onClick={()=>{if(props.p_yakliki)props.calcule("boy_p_1")}} style={style_p[0]}  className={`rounded-circle border Boy bg-primary`}></div>
            <div onClick={()=>{if(props.p_yakliki)props.calcule("boy_p_2")}} style={style_p[1]} className={`rounded-circle border Boy bg-primary`}></div>
            <div onClick={()=>{if(props.p_yakliki)props.calcule("boy_p_3")}} style={style_p[2]} className={`rounded-circle border Boy bg-primary`}></div>
            <div onClick={()=>{if(props.p_yakliki)props.calcule("boy_p_4")}} style={style_p[3]} className={`rounded-circle border Boy bg-primary`}></div>

            <div onClick={()=>{if(props.s_yakliki)props.calcule("boy_s_1")}} style={style_s[0]}  className={`rounded-circle border Boy bg-success`}></div>
            <div onClick={()=>{if(props.s_yakliki)props.calcule("boy_s_2")}} style={style_s[1]} className={`rounded-circle border Boy bg-success`}></div>
            <div onClick={()=>{if(props.s_yakliki)props.calcule("boy_s_3")}} style={style_s[2]} className={`rounded-circle border Boy bg-success`}></div>
            <div onClick={()=>{if(props.s_yakliki)props.calcule("boy_s_4")}} style={style_s[3]} className={`rounded-circle border Boy bg-success`}></div>
        </div>
    )
}

export default React.memo(Table_column_child);