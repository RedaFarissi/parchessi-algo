import React from "react";

function Table_flesh_child(props){
    
    const key_fleshP = Object.keys(props.boy_flesh_p)
    const key_fleshS = Object.keys(props.boy_flesh_s)
    let style_fleshp = [{display:"none"},{display:"none"},{display:"none"},{display:"none"}]
    let style_fleshs = [{display:"none"},{display:"none"},{display:"none"},{display:"none"}]
    let remeve_num_style ;
    for(let i=0 ; i<4 ; i++){
        if(props.num_flesh.includes("p_") && parseInt(props.num_flesh[props.num_flesh.length-1]) === props.boy_flesh_p[key_fleshP[i]])  style_fleshp[i].display = "block"
        if(props.num_flesh.includes("s_") && parseInt(props.num_flesh[props.num_flesh.length-1]) === props.boy_flesh_s[key_fleshS[i]])  style_fleshs[i].display = "block"
    }

    if( props.num_flesh.includes("p") ){
        remeve_num_style = "text-primary"
    }else if( props.num_flesh.includes("s") ){
        remeve_num_style = "text-success"
    }else if(props.num_flesh.includes("w")){
        remeve_num_style = "text-warning"
    }else if(props.num_flesh.includes("d")){
        remeve_num_style = "text-danger"
    }

    return (
    <div className={`${props.child} d-flex justify-content-center align-items-center ${remeve_num_style}`}>
        <div style={{position:"absolute"}}> {props.num_flesh} </div>
        <div onClick={()=>{ if(props.p_yakliki) props.calcule_flesh("f_p_1") }} className="rounded-circle border Boy bg-primary" style={style_fleshp[0]}></div>
        <div onClick={()=>{ if(props.p_yakliki) props.calcule_flesh("f_p_2") }} className="rounded-circle border Boy bg-primary" style={style_fleshp[1]}></div>
        <div onClick={()=>{ if(props.p_yakliki) props.calcule_flesh("f_p_3") }} className="rounded-circle border Boy bg-primary" style={style_fleshp[2]}></div>
        <div onClick={()=>{ if(props.p_yakliki) props.calcule_flesh("f_p_4") }} className="rounded-circle border Boy bg-primary" style={style_fleshp[3]}></div>
        
        <div onClick={()=>{ if(props.s_yakliki) props.calcule_flesh("f_s_1") }} className="rounded-circle border Boy bg-success" style={style_fleshs[0]}></div>
        <div onClick={()=>{ if(props.s_yakliki) props.calcule_flesh("f_s_2") }} className="rounded-circle border Boy bg-success" style={style_fleshs[1]}></div>
        <div onClick={()=>{ if(props.s_yakliki) props.calcule_flesh("f_s_3") }} className="rounded-circle border Boy bg-success" style={style_fleshs[2]}></div>
        <div onClick={()=>{ if(props.s_yakliki) props.calcule_flesh("f_s_4") }} className="rounded-circle border Boy bg-success" style={style_fleshs[3]}></div>
    </div>
    
    )
}

export default Table_flesh_child;