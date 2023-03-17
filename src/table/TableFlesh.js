import React from "react";
import Table_column_child from "./Table_column_child";
import Table_flesh_child from "./Table_flesh_child";

function TableFlesh(props){
    return(
    <div  className={`${props.classN}`} >
        <Table_column_child 
            p_yakliki={props.p_yakliki} 
            s_yakliki={props.s_yakliki} 
            calcule={props.calcule} 
            num={props.num} 
            boy_p={props.boy_p} 
            boy_s={props.boy_s} 
            table_column_children={props.table_column_children} 
        />   
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+1} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+2} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+3} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+4} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+5} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+6} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+7} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} child={props.child} />
        <Table_flesh_child calcule_flesh={props.calcule_flesh} boy_flesh_p={props.boy_flesh_p} boy_flesh_s={props.boy_flesh_s} num_flesh={props.num_flesh+8} p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} num={props.flesh_num} boy_p={props.boy_p} style={{height:"50px"}} />
    </div>
    )
}

export default TableFlesh;