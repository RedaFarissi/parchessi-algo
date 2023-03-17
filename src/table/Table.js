import React from "react";
import Table_dar from "./Table_dar";
import TableFlesh from "./TableFlesh";
import Table_column_child from "./Table_column_child";

function Table(props){  

    return(
        <div className="Parchessi_design border border-dark">
            <Table_dar classN="Primary-player" bg="var(--primary)" wlad_p={props.wlad_p}/>
            <Table_dar classN="Danger-player"  bg="var(--danger)" />
            <Table_dar classN="Success-player" bg="var(--success)" wlad_s={props.wlad_s}/>
            <Table_dar classN="Warning-player" bg="var(--warning)" />

            <div className="column-top-1">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={1} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={2} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={3} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={4} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={5} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8 bg-primary" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={6} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={7} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={8} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="pt-2 column_child_1_4_5_8" />
            </div>
            
            <div className="column-top-2 d-flex rtl">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={9}  boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={10} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={11} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={12} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3 bg-secondary" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={13} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={14} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={15} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={16} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
            </div>
            <div className="column-top-3 d-flex">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={18} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={19} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={20} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={21} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={22} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3 bg-danger" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={23} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={24} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={25} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-start column_child_2_3" />
            </div>

            <div className="column-top-4">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={26} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={27} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={28} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={29} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8 bg-secondary" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={30} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={31} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={32} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={33} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom column_child_1_4_5_8" />
            </div>
            <div className="column-top-5 d-flex flex-column-reverse">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={35} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={36} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={37} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={38} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={39} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8 bg-success" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={40} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={41} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={42} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-bottom border-start-0 border-0 column_child_1_4_5_8" />
            </div>

            <div className="column-top-6 d-flex">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={43} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={44} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={45} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={46} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7 bg-secondary" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={47} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={48} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={49} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={50} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
            </div>
            <div className="column-top-7 d-flex flex-row-reverse">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={52} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={53} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={54} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={55} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={56} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7 bg-warning" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={57} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={58} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={59} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="flex-wrap border-end border-start-0 border-0 column_child_6_7" />
            </div>

            <div className="column-top-8 d-flex flex-column-reverse">
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={60} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={61} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={62} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={63} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8 bg-secondary" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={64} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={65} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={66} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
                <Table_column_child p_yakliki={props.p_yakliki} s_yakliki={props.s_yakliki} calcule={props.calcule} num={67} boy_p={props.boy_p} boy_s={props.boy_s} table_column_children="border-top column_child_1_4_5_8" />
            </div>
            
            <TableFlesh 
                classN="Flesh-primary bg-primary" 
                childSecondary="Flesh_height_p " 
                child="Flesh_height_p border-bottom" 
                table_column_children = "Flesh_height_p_68 bg-dark text-light" 
                num={68}  
                p_yakliki={props.p_yakliki} 
                s_yakliki={props.s_yakliki} 
                calcule={props.calcule}  
                boy_p={props.boy_p} 
                boy_s={props.boy_s} 
                num_flesh={"p_"} 
                boy_flesh_p={props.boy_flesh_p} 
                boy_flesh_s={props.boy_flesh_s} 
                calcule_flesh={props.calcule_flesh}
            />
            <TableFlesh 
                classN="Flesh-danger bg-danger d-flex" 
                childSecondary="Flesh_height_d border-end border-dark" 
                child="Flesh_height_d border-end" 
                table_column_children="Flesh_danger_d_17 border-end bg-dark text-light" 
                num={17} 
                p_yakliki={props.p_yakliki} 
                s_yakliki={props.s_yakliki} 
                calcule={props.calcule}  
                boy_p={props.boy_p} 
                boy_s={props.boy_s} 
                num_flesh={"d_"} 
                boy_flesh_p={props.boy_flesh_p} 
                boy_flesh_s={props.boy_flesh_s} 
                calcule_flesh={props.calcule_flesh}
            />
            <TableFlesh
                classN="Flesh-success bg-success d-flex flex-column flex-column-reverse" 
                childSecondary="border-top border-dark" 
                child="Flesh_height_s border-top" 
                table_column_children = "Flesh_height_s_34 border-top bg-dark text-light" 
                num={34} 
                p_yakliki={props.p_yakliki} 
                s_yakliki={props.s_yakliki} 
                calcule={props.calcule}  
                boy_p={props.boy_p} 
                boy_s={props.boy_s} 
                num_flesh={"s_"} 
                boy_flesh_p={props.boy_flesh_p} 
                boy_flesh_s={props.boy_flesh_s} 
                calcule_flesh={props.calcule_flesh}
            />
            <TableFlesh
                classN="Flesh-warning bg-warning d-flex flex-row-reverse" 
                childSecondary="Flesh_height_w border-start border-dark" 
                child="Flesh_height_w border-start" 
                table_column_children="border-start Flesh_height_w_51 bg-dark text-light" 
                num={51}  
                p_yakliki={props.p_yakliki} 
                s_yakliki={props.s_yakliki} 
                calcule={props.calcule}  
                boy_p={props.boy_p} 
                boy_s={props.boy_s} 
                num_flesh={"w_"} 
                boy_flesh_p={props.boy_flesh_p} 
                boy_flesh_s={props.boy_flesh_s} 
                calcule_flesh={props.calcule_flesh}
            />

            <div className="div_box_center">  
              <div style={{clipPath:"polygon(50% 50%, 0% 100%, 100% 100%)"}} className="box_center bg-success"></div>
              <div style={{clipPath:"polygon(50% 50%, 0% 100%, 0 0)"}} className="box_center bg-danger"> </div>
              <div style={{clipPath:"polygon(50% 50%, 100% 0, 0 0)"}} className="box_center bg-primary"></div>
              <div style={{clipPath:"polygon(50% 50%, 100% 0, 100% 100%)"}} className="box_center bg-warning"> </div>
            </div>
        </div>
    )
}

export default Table;