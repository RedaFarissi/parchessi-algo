import React, {  useCallback , useEffect, useState  } from "react";
import "./App.css";
import "./Bootstrap.css";
import Player from "./Player";
import Table from "./table/Table";
import sad_espaniol from "./function/sad_espaniol";
import sad_espaniol_s from "./function/sad_espaniol_s";
import dead from "./function/dead";
import fin_sad from "./function/fin_sad";

function App(){
  const [dadosa_num_p, setDadosa_num_p] = useState({num:1, noba:true , _666:[]})
  const [dadosa_num_s, setDadosa_num_s] = useState({num:1, noba:false, _666:[]}) 
  const [p_yakliki,setP_yakliki] = useState(false);
  const [s_yakliki,setS_yakliki] = useState(false);
  const [wlad_p,setWlad_p] = useState(["block","block","block","block"]);
  const [wlad_s,setWlad_s] = useState(["block","block","block","block"]);
  const [boy_p,setBoy_p] = useState({boy1:0,boy2:0,boy3:0,boy4:0});
  const [boy_s,setBoy_s] = useState({boy1:0,boy2:0,boy3:0,boy4:0});
  const [fat68_s,setFat68_s] = useState({boy1:false,boy2:false,boy3:false,boy4:false})
  const [boy_flesh_p,setBoy_flesh_p] = useState({boy1:0,boy2:0,boy3:0,boy4:0});
  const [boy_flesh_s,setBoy_flesh_s] = useState({boy1:0,boy2:0,boy3:0,boy4:0});
  const [p_kill_two,setP_kill_two] = useState(false);
  const [s_kill_two,setS_kill_two] = useState(false);
  const [p_kill_two_2,setP_kill_two_2] = useState(false);
  const [s_kill_two_2,setS_kill_two_2] = useState(false);
  const [sad_o_6_p ,setSad_o_6_p] = useState({boy1:true,boy2:true,boy3:true,boy4:true});
  const [sad_o_6_s ,setSad_o_6_s] = useState({boy1:true,boy2:true,boy3:true,boy4:true});
  
  const dadosa_p = useCallback(()=>{ 
    random(dadosa_num_p,setDadosa_num_p,setDadosa_num_s,wlad_p,setWlad_p,boy_p,setBoy_p,setP_yakliki,setS_yakliki,wlad_s,setWlad_s,"P") 
  });  
  const dadosa_s = useCallback(() =>{
    random(dadosa_num_s,setDadosa_num_s,setDadosa_num_p,wlad_s,setWlad_s,boy_s,setBoy_s,setS_yakliki,setP_yakliki,wlad_p,setWlad_p,"S") 
  });

  const random=(dadosa,setDadosa_num,setDadosa_num_auther,wlad,setWlad,boy,setBoy,setYakliki,setYakliki_auther,wlad_auther,setWlad_auther,ps)=>{  
    if( dadosa.noba ){
      const sad_p = fin_sad(boy_p); 
      const sad_s = fin_sad(boy_s); 
      let random = Math.floor(Math.random()*(7 - 1))+1
      const boy_key = ['boy1','boy2','boy3','boy4'] ;
      setSad_o_6_p({boy1:true,boy2:true,boy3:true,boy4:true})
      setSad_o_6_s({boy1:true,boy2:true,boy3:true,boy4:true})
      setDadosa_num(prevState =>({ ...prevState, num:random }))
      if(random === 6 && dadosa._666.length === 2){
        setDadosa_num( prevState => ({...prevState, noba:false }) )
        setDadosa_num_auther( prevState => ({...prevState, noba:true }) )
        setDadosa_num( prevState => ({...prevState,  _666: [] }) )
        setYakliki(false);setYakliki_auther(false);
        let max = 0 , maxKey = "" ;
        if(ps === "P"){
          for(let i in boy){  
            if(boy[i]> max && boy[i] !== true && boy[i] !== "yes"){ max = boy[i]; maxKey= i ;} 
          }
        }else if(ps === "S"){
          for(let i in boy){ 
            if(boy[i] > max && boy[i] >= 1  && boy[i] <=34 && boy[i] !== true && boy[i] !== "yes"){ max = boy[i]; maxKey = i ;} 
          }
          if(maxKey  === ""){
            for(let i in boy){  
              if(boy[i] > max && boy[i] >= 39  && boy[i] <= 68 && boy[i] !== true && boy[i] !== "yes"){ max = boy[i]; maxKey = i ;} 
            }
          }else{ setFat68_s({...fat68_s , [maxKey]:false}) }
        }                   
        if(maxKey  !== ""){
          setBoy({...boy , [maxKey]:0});
          const arr = wlad.map(e => e); 
          arr[parseInt(maxKey[maxKey.length-1])-1] = "block"; 
          setWlad(arr); 
        }
      }else if( random === 6 && wlad[0]==="block" && wlad[1]==="block" && wlad[2]==="block" && wlad[3]==="block" ){
        setDadosa_num( prevState => ({...prevState, noba:true }) );
        setDadosa_num_auther( prevState => ({...prevState, noba:false }) );
        setYakliki(false); setYakliki_auther(false);
        setDadosa_num( prevState => ({ ...prevState, _666:[...prevState._666 , true] }) );
      }else if(random === 6 ){
        let key_sadin = [];
        setDadosa_num( prevState => ({ ...prevState, _666:[...prevState._666 , true] }) );
        setDadosa_num( prevState => ({...prevState, noba:false }) );
        setDadosa_num_auther( prevState => ({...prevState, noba:false }) );
        setYakliki(true);setYakliki_auther(false);
        const  espanol = espaniol()
        if( ps === "P" && (sad_p.length !== 0 || espanol.length !== 0)){
          let no_move , bool_p = false;
          if( sad_p.length !== 0 ){
            for(let i = 0 ; i < sad_p.length ; i++){
              for(let j = 0 ; j < 4 ; j++)  if( sad_p[i] === boy_p[boy_key[j]] ) key_sadin.push(boy_key[j])
            }
          }
          if( espanol.length !== 0 ){
            for(let i = 0 ; i < espanol.length ; i++){
              for(let j = 0 ; j < 4 ; j++)  if( espanol[i] === boy_p[boy_key[j]] ) key_sadin.push(boy_key[j])
            }
          }
          no_move = boy_key.filter(e=>!key_sadin.includes(e));
          if( boy.boy1 !== 0 && boy.boy1 !== true && boy.boy2 !== 0 && boy.boy2 !== true && boy.boy3 !== 0 && boy.boy3 !== true && boy.boy4 !== 0 && boy.boy4 !== true){
            for( let i=0 ; i<key_sadin.length ; i++ ){
              if( calculeColumn_without_road_p(boy_p[key_sadin[i]],12,dadosa_num_p._666.length,sad_s,boy_s,sad_p) ){
                bool_p = true; break;
              }
            }
            if( bool_p ){
              setDadosa_num( prevState => ({...prevState, num:12 }) )
              if( no_move.length === 1 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false});}
              else if( no_move.length === 2 ){   setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) }
              else if( no_move.length === 3 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) }
              else if( no_move.length === 4 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) }
            }else{
              for( let i=0 ; i<key_sadin.length ; i++ ){
                if( calculeColumn_without_road_p(boy_p[key_sadin[i]],6,dadosa_num_p._666.length,sad_s,boy_s,sad_p) ){
                  bool_p = true; break;
                }
              }
              if( bool_p ){
                setDadosa_num( prevState => ({...prevState, num:6 }) )
                if( no_move.length === 1 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false});}
                else if( no_move.length === 2 ){   setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) }
                else if( no_move.length === 3 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) }
                else if( no_move.length === 4 ){ setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) }
              }else{
                if(random === 6 && boy.boy1 !== 0 && boy.boy1 !== true && boy.boy2 !== 0 && boy.boy2 !== true && boy.boy3 !== 0 && boy.boy3 !== true && boy.boy4 !== 0 && boy.boy4 !== true){
                  setDadosa_num( prevState => ({...prevState, num:12 }) )
                  makaynch_tri9(ps,12,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
                }else{
                  makaynch_tri9(ps,6,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
                }
              }
            }
          }else{
            for(let i=0 ; i<key_sadin.length ; i++ ){
              if( calculeColumn_without_road_p(boy_p[key_sadin[i]],6,dadosa_num_p._666.length,sad_s,boy_s,sad_p) ){
                bool_p = true; break;
              }
            } 
            if( bool_p ){
              setDadosa_num( prevState => ({...prevState, num:6 }) )
              if( no_move.length === 1 ) setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false});
              else if( no_move.length === 2 ) setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) 
              else if( no_move.length === 3 ) setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) 
              else if( no_move.length === 4 ) setSad_o_6_p({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) 
            }else{
              makaynch_tri9(ps,6,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
            }
          }
        }else if( ps === "S" && (sad_s.length !== 0 || espanol.length !== 0) ){
          let no_move , bool_s = false;
          if( sad_s.length !== 0 ){
            for(let i = 0 ; i < sad_s.length ; i++){
              for(let j = 0 ; j < 4 ; j++)  if( sad_s[i] === boy_s[boy_key[j]] ) key_sadin.push(boy_key[j])
            }
          }
          if( espanol.length !== 0 ){
            for(let i = 0 ; i < espanol.length ; i++){
              for(let j = 0 ; j < 4 ; j++)  if( espanol[i] === boy_s[boy_key[j]] ) key_sadin.push(boy_key[j])
            }
          }
          no_move = boy_key.filter(e=>!key_sadin.includes(e));
          if( boy.boy1 !== 0 && boy.boy1 !== true && boy.boy2 !== 0 && boy.boy2 !== true && boy.boy3 !== 0 && boy.boy3 !== true && boy.boy4 !== 0 && boy.boy4 !== true){
            for( let i=0 ; i<key_sadin.length ; i++ ){
              if( calculeColumn_without_road_s(boy_s[key_sadin[i]],12,fat68_s[key_sadin[i]],dadosa_num_s._666.length,sad_p,sad_s)  ){                
                bool_s = true; break;
              }
            }
            if( bool_s ){
              setDadosa_num( prevState => ({...prevState, num:12 }) )
              if( no_move.length === 1 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false});}
              else if( no_move.length === 2 ){   setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) }
              else if( no_move.length === 3 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) }
              else if( no_move.length === 4 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) }
            }else{
              for( let i=0 ; i<key_sadin.length ; i++ ){
                if( calculeColumn_without_road_s(boy_s[key_sadin[i]],12,fat68_s[key_sadin[i]],dadosa_num_s._666.length,sad_p,sad_s) ){
                  bool_s = true; break;
                }
              }
              if( bool_s ){
                setDadosa_num( prevState => ({...prevState, num:6 }) )
                if( no_move.length === 1 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false});}
                else if( no_move.length === 2 ){   setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) }
                else if( no_move.length === 3 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) }
                else if( no_move.length === 4 ){ setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) }
              }else{
                if(random === 6 && boy.boy1 !== 0 && boy.boy1 !== true && boy.boy2 !== 0 && boy.boy2 !== true && boy.boy3 !== 0 && boy.boy3 !== true && boy.boy4 !== 0 && boy.boy4 !== true){
                  setDadosa_num( prevState => ({...prevState, num:12 }) )
                  makaynch_tri9(ps,12,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
                }else{
                  makaynch_tri9(ps,6,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
                }
              }
            }
          }else{
            for(let i=0 ; i<key_sadin.length ; i++ ){
              if( calculeColumn_without_road_s(boy_s[key_sadin[i]],12,fat68_s[key_sadin[i]],dadosa_num_s._666.length,sad_p,sad_s) ){
                bool_s = true; break;
              }
            } 
            if( bool_s ){
              setDadosa_num( prevState => ({...prevState, num:6 }) )
              if( no_move.length === 1 ) setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false});
              else if( no_move.length === 2 ) setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false}) 
              else if( no_move.length === 3 ) setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false}) 
              else if( no_move.length === 4 ) setSad_o_6_s({...sad_o_6_p , [no_move[0]]:false , [no_move[1]]:false , [no_move[2]]:false , [no_move[3]]:false}) 
            }else{
              makaynch_tri9(ps,6,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
            } 
          }
        }else{
          if(random === 6 && boy.boy1 !== 0 && boy.boy1 !== true && boy.boy2 !== 0 && boy.boy2 !== true && boy.boy3 !== 0 && boy.boy3 !== true && boy.boy4 !== 0 && boy.boy4 !== true){
            setDadosa_num( prevState => ({...prevState, num:12 }) )
            makaynch_tri9(ps,12,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
          }else{
            makaynch_tri9(ps,6,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
          }
        }
      }else if(random===5 && (wlad[0]==="block"||wlad[1]==="block"||wlad[2]==="block"||wlad[3]==="block") && tkhraj(boy,ps) ){
          let key_ta3_li_ylh_dakhal , count = 0 , dakhal_ldar_lakhor = [] ;
          for( let i = 0 ; i < 4 ; i++ ){
            if( wlad[i] === "block" ){ 
              const arr = wlad.map(e => e); arr[i]="none"; setWlad(arr); 
              (ps === "P")? setBoy({...boy , [boy_key[i]]:5}) : setBoy({...boy, [boy_key[i]]:39}) ;
              key_ta3_li_ylh_dakhal = boy_key[i];
              break;
            }
          }
          for( let i = 0 ; i < 4 ; i++ ){
            if( ps==="P" && boy_s[boy_key[i]] === 5 ){ dakhal_ldar_lakhor.push(boy_key[i]);count++;} 
            else if( ps==="S" && boy_p[boy_key[i]] === 39 ){ dakhal_ldar_lakhor.push(boy_key[i]);count++;}
          }
          if(count === 0){
            setDadosa_num(prevState => ({...prevState, noba:false}));
            setDadosa_num_auther(prevState => ({...prevState, noba:true}));
            setYakliki(false); setYakliki_auther(false);  
          }else if(count === 1){
            const arr = wlad_auther.map(e => e); arr[parseInt(dakhal_ldar_lakhor[0].slice(-1))-1]="block"; setWlad_auther(arr);
            setDadosa_num(prevState => ({...prevState, num:20}));
            setDadosa_num(prevState => ({...prevState, noba:false}));
            setDadosa_num_auther(prevState => ({...prevState, noba:false})); 
            setYakliki(true); setYakliki_auther(false);
            if(ps === "P") {
              setBoy_s({...boy_s , [dakhal_ldar_lakhor[0]]: 0 });
              setFat68_s({...fat68_s , [dakhal_ldar_lakhor[0]]:false});
              makaynch_tri9(ps,20,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)        
              if(calculeColumn_without_road_p(5,20,dadosa_num_p._666.length,sad_s,boy_s,sad_p)){
                setYakliki(true); setYakliki_auther(false);  
                setDadosa_num(prevState => ({...prevState, noba:false}));
                setDadosa_num_auther(prevState => ({...prevState, noba:false})); 
              }
            }else if(ps === "S"){
              setBoy_p({...boy_p , [dakhal_ldar_lakhor[0]]: 0 });
              makaynch_tri9(ps,20,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther)
              if(calculeColumn_without_road_s(39,20,fat68_s[key_ta3_li_ylh_dakhal],dadosa_num_s._666.length,sad_p,sad_s)){
                setYakliki(true); setYakliki_auther(false);  
                setDadosa_num(prevState => ({...prevState, noba:false}));
                setDadosa_num_auther(prevState => ({...prevState, noba:false})); 
              }
            } 
          }else if(count === 2){
            setDadosa_num(prevState => ({...prevState, noba:false}));
            setDadosa_num_auther(prevState => ({...prevState, noba:false})); 
            const arr = wlad_auther.map(e => e); 
            arr[parseInt(dakhal_ldar_lakhor[0].slice(-1))-1] = "block";
            arr[parseInt(dakhal_ldar_lakhor[1].slice(-1))-1] = "block";
            setWlad_auther(arr);
            setDadosa_num(prevState => ({...prevState, num:20}));
            setYakliki(true); setYakliki_auther(false);
            if(ps === "P"){
              setBoy_s({...boy_s , [dakhal_ldar_lakhor[0]]: 0 ,[dakhal_ldar_lakhor[1]]: 0 });
              setFat68_s({...fat68_s , [dakhal_ldar_lakhor[0]]:false , [dakhal_ldar_lakhor[1]]: false });
              setP_kill_two(true);
            }else if(ps === "S"){
              setBoy_p({...boy_p , [dakhal_ldar_lakhor[0]]: 0  , [dakhal_ldar_lakhor[1]]: 0});
              setS_kill_two(true);
            }
          }
      }else if(random !== 5 && (wlad[0]==="block"&&wlad[1]==="block"&&wlad[2]==="block"&&wlad[3]==="block") ){
        setDadosa_num( prevState => ({...prevState, noba:false }) );
        setDadosa_num_auther( prevState => ({...prevState, noba:true }) );
      }else{
        setDadosa_num( prevState => ({...prevState,  _666: []}) );
        setDadosa_num(prevState => ({...prevState, noba: false}));
        setDadosa_num_auther(prevState => ({...prevState, noba: false}));
        setYakliki(true);setYakliki_auther(false);
        makaynch_tri9(ps,random,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther);
      }      
    }  
    
    function espaniol(){
      const keysP = Object.keys(boy_p);
      const keysS = Object.keys(boy_s);
      const arr_sadan = [];
      for(let i=0 ; i<4 ; i++){
        for(let j=0 ; j<4 ; j++)
          if( boy_p[keysP[i]] === boy_s[keysS[j]] && boy_s[keysS[j]] !== 0 && boy_s[keysS[j]] !== true ) 
            arr_sadan.push(boy_p[keysP[i]])
          
      }
      return arr_sadan
    }
   
    function tkhraj (boy,ps){
      let retur = true , p = 0 , s = 0 ;
      for(let i in boy){
        if(boy[i] === 5  && ps==="P") p++;
        if(boy[i] === 39 && ps==="S") s++;
        if( p == 2 || s === 2 ){ retur = false; break; } 
      }
      return retur ;
    }
  }
  
  function makaynch_tri9 (ps,dadosa_num,setDadosa_num,setDadosa_num_auther,setYakliki,setYakliki_auther){ 
    const sad_p = fin_sad(boy_p);       const keys_p = Object.keys(boy_p);  
    const sad_s = fin_sad(boy_s);       const keys_s = Object.keys(boy_s); 
    if(ps === "P"){
      let newArrP = [] , badalP = true; 
      for(let i = 0 ; i<4 ; i++) 
        newArrP.push(calculeColumn_without_road_p(boy_p[keys_p[i]],dadosa_num,dadosa_num_p._666.length,sad_s,boy_s,sad_p))
      for(let i = 0 ; i<4 ; i++){
        if( newArrP[i] === true ){  badalP = false; break; }
      }
      if( badalP && dadosa_num === 12){
          newArrP = []
          for(let i = 0 ; i<4 ; i++) 
            newArrP.push(calculeColumn_without_road_p(boy_p[keys_p[i]],6,dadosa_num_p._666.length,sad_s,boy_s,sad_p))
          for(let i=0 ; i<4 ; i++){ 
            if( newArrP[i] === true ){ badalP = false; break; }
          }
          if(badalP === true){
            setDadosa_num( prevState => ({...prevState, noba: true}) );
            setDadosa_num_auther( prevState => ({...prevState, noba: false}) );
            setYakliki(false);
            setYakliki_auther(false);
          }else{
            setDadosa_num( prevState =>({ ...prevState, num: 6 }) );
          }
      }else if( badalP && dadosa_num === 6){
        setDadosa_num( prevState => ({...prevState, noba:true}) );
        setDadosa_num_auther(prevState => ({...prevState, noba:false}));
        setYakliki(false);setYakliki_auther(false);
      }else if( badalP && dadosa_num !== 12 && dadosa_num !== 6 ){
        setYakliki(false);setYakliki_auther(false);
        setDadosa_num( prevState => ({...prevState, noba: false}) );
        setDadosa_num_auther(prevState => ({...prevState, noba: true}));
      }
      return badalP;
    }else if(ps === "S"){
      let newArrS = [] , badalS = true
      for(let i = 0 ; i<4 ; i++) 
        newArrS.push(calculeColumn_without_road_s(boy_s[keys_s[i]],dadosa_num,fat68_s[keys_s[i]],dadosa_num_s._666.length,sad_p,sad_s))
      for(let i = 0 ; i<4 ; i++){
        if( newArrS[i] === true ){
          badalS = false; break;
        }
      }
      if(badalS && dadosa_num === 12){
          newArrS = []
          for(let i = 0 ; i<4 ; i++) newArrS.push(calculeColumn_without_road_s(boy_s[keys_s[i]],6,fat68_s[keys_s[i]],dadosa_num_s._666.length,sad_p,sad_s))
          for(let i=0 ; i<4 ; i++){ 
            if( newArrS[i] === true ){   badalS = false; break; }
          }
          if(badalS === true){
            setDadosa_num(prevState => ({...prevState, noba: true}) )
            setDadosa_num_auther(prevState => ({...prevState, noba: false}) )
            setYakliki(false);setYakliki_auther(false);
          }else{
            setDadosa_num( prevState =>({ ...prevState, num: 6 }) )
          }
      }else if( badalS && dadosa_num === 6 ){
        setDadosa_num( prevState => ({...prevState, noba: true}) )
        setDadosa_num_auther(prevState => ({...prevState, noba: false}));
        setYakliki(false);setYakliki_auther(false);
      }else if( badalS && dadosa_num !== 12 && dadosa_num !== 6) {
        setYakliki(false);setYakliki_auther(false);
        setDadosa_num(prevState => ({...prevState, noba: false}));
        setDadosa_num_auther(prevState => ({...prevState, noba: true}));
      }
      return badalS; 
    }
}

useEffect(()=>{
  if( p_kill_two ){
    if(makaynch_tri9("P",20,setDadosa_num_p,setDadosa_num_s,setP_yakliki,setS_yakliki) === false){
      setP_kill_two_2(true);
    }
    setP_kill_two(false);
  }
  if( s_kill_two ){
    if(makaynch_tri9("S",20,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)  === false){
      setS_kill_two_2(true);
    }
    setS_kill_two(false);
  }

  if( p_kill_two_2  ){
    makaynch_tri9("P",20,setDadosa_num_p,setDadosa_num_s,setP_yakliki,setS_yakliki)
    setP_kill_two_2(false);
  }
  if( s_kill_two_2  ){
    makaynch_tri9("S",20,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)
    setS_kill_two_2(false);
  }
},[dadosa_num_p,dadosa_num_s])



  const calculeColumn_without_road_p = (boy_num,dadosa_num,_666,finSad_lakhor,boy_s,finSad_nta) => {
    let bool = false;
    const blasaJdida = boy_num + dadosa_num;
    if(boy_num !== 0){
      if(blasaJdida <= 68 ){
        if(  (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) )) )     &&     (sad_espaniol(boy_num,boy_p,boy_s) === 0 || blasaJdida < sad_espaniol(boy_num,boy_p,boy_s))        &&        ((finSad_lakhor.length === 0) || (finSad_lakhor.length === 1 && ((finSad_lakhor[0] > boy_num && finSad_lakhor[0] > blasaJdida ) ||  boy_num > finSad_lakhor[0])) || (finSad_lakhor.length === 2 && (boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0] &&  blasaJdida < finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0])) )) ){
          bool = true          
        }else if(   blasaJdida >= sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && (boy_num  < finSad_lakhor[0] &&  blasaJdida >= finSad_lakhor[0])) || (finSad_lakhor.length === 2 &&  ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0] ||  blasaJdida >= finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])) ))){
          bool = false
        }
      }else if( blasaJdida - 68  <= 8 ){
        if( (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) )) )    &&    (sad_espaniol(boy_num,boy_p,boy_s) === 0 ||  blasaJdida <= sad_espaniol(boy_num))    &&    ((finSad_lakhor.length === 0 || (finSad_lakhor.length === 1 && finSad_lakhor[0] < 5)) || (finSad_lakhor.length === 1 && (boy_num > finSad_lakhor[0] || blasaJdida < finSad_lakhor[0])) || (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || (boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1]) || (boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0]) )) )){
          bool = true
        }else if(    blasaJdida > sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && blasaJdida >= finSad_lakhor[0]) || (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])))) )){
          bool = false
        }
      }else if( blasaJdida - 68  > 8 ){
        bool = false
      }
    }else{
      bool = 0
    }
    return bool;
  }

  const calculeColumn_without_road_s = (boy_num,dadosa_num,fat68_boy,_666,finSad_lakhor,finSad_nta) => {
    let bool = false;
    const blasaJdida = dadosa_num + boy_num ;
    if(boy_num !== 0){
      if( blasaJdida > 68 && fat68_boy === false ){
          if(  (finSad_nta.length === 0 || (finSad_nta.length === 1 && ((finSad_nta[0] <= boy_num  && finSad_nta[0] >= 39) || (finSad_nta[0] < 34 && blasaJdida-68 < finSad_nta[0] )) ) ||                             (finSad_nta.length === 2 && (((finSad_nta[0]>=39 && finSad_nta[1]>=39) &&((finSad_nta[0]<finSad_nta[1] && finSad_nta[1] === boy_num) || (finSad_nta[0] > finSad_nta[1] && finSad_nta[0] === boy_num)))   ||   ((finSad_nta[0] < 39 && finSad_nta[1] >= 39 && blasaJdida-68 < finSad_nta[0]) || (finSad_nta[1] < 39 && finSad_nta[0] >= 39 && blasaJdida-68 < finSad_nta[1]))))) && sad_espaniol_s(boy_num,blasaJdida-68,false,boy_p,boy_s) === false  && ((finSad_lakhor.length === 0)  ||  (finSad_lakhor.length === 1 && ((boy_num > finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34) && (boy_num > 39 && blasaJdida-68 < finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 &&  ( (boy_num > finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(boy_num > 39 && blasaJdida-68 < finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[1] && finSad_lakhor[1] > 39) || ((finSad_lakhor[1] >= 5 && finSad_lakhor[1] <=34)&&(boy_num > 39 && blasaJdida-68 < finSad_lakhor[1])))) )){
            bool = true
          }else if(  ((finSad_nta.length === 1 &&  ((finSad_nta[0] > boy_num && finSad_nta[0] > 39) || (finSad_nta[0] < boy_num &&  finSad_nta[0] < 35))) || ( finSad_nta.length === 2 && (((finSad_nta[0] > 39 && finSad_nta[1] > 39) && ((finSad_nta[0] < finSad_nta[1] && blasaJdida >= finSad_nta[1]) || (finSad_nta[0] > finSad_nta[1] && blasaJdida >= finSad_nta[0] )))  ||  ((finSad_nta[0] <= 39 && finSad_nta[1] >= 39 && blasaJdida-68 >= blasaJdida[1]) || (finSad_nta[1] < 39 && finSad_nta[0] > 39 && blasaJdida-68 >= blasaJdida[0]))))) || sad_espaniol_s(boy_num,blasaJdida-68,false,boy_p,boy_s) || ((finSad_lakhor.length === 1 && ((boy_num < finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(boy_num > 39 && blasaJdida-68 >= finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34))))  ||  (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[1] && finSad_lakhor[1] > 39) || ((finSad_lakhor[1] >= 5 && finSad_lakhor[1] <=34)&&(boy_num > 39 && blasaJdida-68 >= finSad_lakhor[1])))) )){    
            bool = false
          }
      }else if( (blasaJdida > 34 && fat68_boy) && (blasaJdida - 34 <= 8) ){
        if( (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]))))  &&  (sad_espaniol(boy_num,boy_p,boy_s) === 0 ||  blasaJdida <= sad_espaniol(boy_num,boy_p,boy_s))  &&  ((finSad_lakhor.length === 0 || (finSad_lakhor.length === 1 && (finSad_lakhor[0] < 39 && finSad_lakhor[0] > 34))) || (finSad_lakhor.length === 1 && (boy_num > finSad_lakhor[0] || blasaJdida < finSad_lakhor[0])) || (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || (boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1]) || (boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0]) )) )){
          bool = true
        }else if( blasaJdida > sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && blasaJdida >= finSad_lakhor[0]) || (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])))) )){
          bool = false
        }
      }else if((blasaJdida > 34 && fat68_boy) && (blasaJdida - 34 > 8) ){
        bool = false
      }else{
        if((finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) ))  )     &&    (sad_espaniol(boy_num,boy_p,boy_s) === 0 || blasaJdida < sad_espaniol(boy_num,boy_p,boy_s))     &&    ((finSad_lakhor.length === 0) || (finSad_lakhor.length === 1 && ((finSad_lakhor[0] > boy_num && finSad_lakhor[0] > blasaJdida ) ||  boy_num > finSad_lakhor[0])) || (finSad_lakhor.length === 2 && (boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0] &&  blasaJdida < finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0])) ) )){
          bool = true
        }else if(blasaJdida >= sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && (boy_num  < finSad_lakhor[0] &&  blasaJdida >= finSad_lakhor[0])) || (finSad_lakhor.length === 2 &&  ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0] ||  blasaJdida >= finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])) ))){
          bool = false
        }
      }
    }else{
      bool = 0 
    }
    return bool;
  }

  const calcule =(key)=> {
    const sad_p = fin_sad(boy_p);    
    const sad_s = fin_sad(boy_s)
    const keys_p = Object.keys(boy_p);   
    const keys_s = Object.keys(boy_s);
  
    for(let i=1 ; i<=4 ; i++){
      if(key === "boy_p_"+i) 
        calculeColumnCase_p(boy_p[keys_p[i-1]],dadosa_num_p.num,'boy'+i,'boy'+i,dadosa_num_p._666.length,sad_s,boy_s,setBoy_s,sad_p,p_kill_two_2,sad_o_6_p[keys_p[i-1]]) 
      if(key === "boy_s_"+i) 
        calculeColumnCase_s(boy_s[keys_s[i-1]],dadosa_num_s.num,fat68_s[keys_s[i-1]],'boy'+i,'boy'+i,dadosa_num_s._666.length,sad_p,sad_s,s_kill_two_2,sad_o_6_s[keys_s[i-1]]) 
    }
  }  

  const calculeColumnCase_p = (boy_num,dadosa_num,key_boy,key_flesh,_666,finSad_lakhor,boy_s,setBoy_s,finSad_nta,_20,sad_o_6_p) => {
    if( sad_o_6_p ){
      let bool ;
      (_666 === 0)? setDadosa_num_s({...dadosa_num_s, noba: true}) : setDadosa_num_p({...dadosa_num_p, noba: true}) ;
      const blasaJdida = boy_num + dadosa_num 
      if( blasaJdida <= 68 ){
        if( (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) )) )     &&     (sad_espaniol(boy_num,boy_p,boy_s) === 0 || blasaJdida < sad_espaniol(boy_num,boy_p,boy_s))        &&        ((finSad_lakhor.length === 0) || (finSad_lakhor.length === 1 && ((finSad_lakhor[0] > boy_num && finSad_lakhor[0] > blasaJdida ) ||  boy_num > finSad_lakhor[0])) || (finSad_lakhor.length === 2 && (boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0] &&  blasaJdida < finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0])) )) ){
          if(dead(blasaJdida,boy_s,setBoy_s,setWlad_s,wlad_s,setDadosa_num_p,dadosa_num_p,setDadosa_num_s,dadosa_num_s,"P",setFat68_s)) {
            setP_yakliki(true);
            setS_yakliki(false);
            makaynch_tri9("P",20,setDadosa_num_p,setDadosa_num_s,setP_yakliki,setS_yakliki)
          }else{
            setP_yakliki(false) ;
          }
          setBoy_p({...boy_p,  [key_boy]: blasaJdida});
          bool = true
        }else if(   blasaJdida >= sad_espaniol(boy_num,boy_p,boy_s)     ||    ((finSad_lakhor.length === 1 && (boy_num  < finSad_lakhor[0] &&  blasaJdida >= finSad_lakhor[0])) || (finSad_lakhor.length === 2 &&  ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0] ||  blasaJdida >= finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])) ))){
          setDadosa_num_p({...dadosa_num_p, noba: false})
          setDadosa_num_s({...dadosa_num_s, noba: false})
          bool = false
        }
      }else if( blasaJdida - 68  <= 8 ){
        if( (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) )) )    &&    (sad_espaniol(boy_num,boy_p,boy_s) === 0 ||  blasaJdida <= sad_espaniol(boy_num))    &&    ((finSad_lakhor.length === 0 || (finSad_lakhor.length === 1 && finSad_lakhor[0] < 5)) || (finSad_lakhor.length === 1 && (boy_num > finSad_lakhor[0] || blasaJdida < finSad_lakhor[0])) || (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || (boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1]) || (boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0]) )) )){
          setBoy_flesh_p({...boy_flesh_p , [key_flesh]: blasaJdida-68 });
          if(blasaJdida - 68 === 8){ 
            setBoy_p({...boy_p,  [key_boy]: true });
            setDadosa_num_p({...dadosa_num_p, num:10});
            setDadosa_num_s({...dadosa_num_s, noba:false});
          }else{ 
            setBoy_p({...boy_p,  [key_boy]: "yes" });
            setP_yakliki(false);
          }; 
          bool = true;
        }else if(    blasaJdida > sad_espaniol(boy_num,boy_p,boy_s)  || ( (finSad_lakhor.length === 1 && blasaJdida >= finSad_lakhor[0]) || (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])))) )){
          setDadosa_num_p({...dadosa_num_p, noba: false});
          setDadosa_num_s({...dadosa_num_s, noba: false});
          bool = false;
        }
      }else if( blasaJdida - 68  > 8 ){
        setDadosa_num_s({...dadosa_num_s, noba: false});
        setDadosa_num_p({...dadosa_num_p, noba: false});
        bool = false;
      }
      if(_20){
        setDadosa_num_p({...dadosa_num_p, noba: false});
        setDadosa_num_s({...dadosa_num_s, noba: false});
        setP_yakliki(true);
        setS_yakliki(false);  
        makaynch_tri9("P",20,setDadosa_num_p,setDadosa_num_s,setP_yakliki,setS_yakliki);
      }
      return bool;
    }
  }

  const calculeColumnCase_s = (boy_num,dadosa_num,fat68_boy,boy_s_key,Fat68_key,_666,finSad_lakhor,finSad_nta,_20,sad_o_6_s) => {
    if(sad_o_6_s){
      (_666 === 0)? setDadosa_num_p({...dadosa_num_p, noba: true}) : setDadosa_num_s({...dadosa_num_s, noba: true})
      const blasaJdida = dadosa_num + boy_num ;
      if( blasaJdida > 68 && fat68_boy === false ){
          if(  (finSad_nta.length === 0 || (finSad_nta.length === 1 && ((finSad_nta[0] <= boy_num  && finSad_nta[0] >= 39) || (finSad_nta[0] < 34 && blasaJdida-68 < finSad_nta[0] )) ) || (finSad_nta.length === 2 && (((finSad_nta[0]>=39 && finSad_nta[1]>=39) &&((finSad_nta[0]<finSad_nta[1] && finSad_nta[1] === boy_num) || (finSad_nta[0] > finSad_nta[1] && finSad_nta[0] === boy_num)))   ||   ((finSad_nta[0] < 39 && finSad_nta[1] >= 39 && blasaJdida-68 < finSad_nta[0]) || (finSad_nta[1] < 39 && finSad_nta[0] >= 39 && blasaJdida-68 < finSad_nta[1]))))) && sad_espaniol_s(boy_num,blasaJdida-68,false,boy_p,boy_s) === false  && ((finSad_lakhor.length === 0)  ||  (finSad_lakhor.length === 1 && ((boy_num > finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34) && (boy_num > 39 && blasaJdida-68 < finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 &&  ( (boy_num > finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(boy_num > 39 && blasaJdida-68 < finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[1] && finSad_lakhor[1] > 39) || ((finSad_lakhor[1] >= 5 && finSad_lakhor[1] <=34)&&(boy_num > 39 && blasaJdida-68 < finSad_lakhor[1])))) )){
            if(dead(blasaJdida-68,boy_p,setBoy_p,setWlad_p,wlad_p,setDadosa_num_s,dadosa_num_s,setDadosa_num_p,dadosa_num_p)) {
              setS_yakliki(true) 
              setP_yakliki(false) 
              makaynch_tri9("S",20,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)
            }else{
              setS_yakliki(false)
            }
            setBoy_s({...boy_s , [boy_s_key]: blasaJdida - 68 });
            setFat68_s({...fat68_s , [Fat68_key]: true });
          }else if(  ((finSad_nta.length === 1 &&  ((finSad_nta[0] > boy_num && finSad_nta[0] > 39) || (finSad_nta[0] < boy_num &&  finSad_nta[0] < 35))) || ( finSad_nta.length === 2 && (((finSad_nta[0] > 39 && finSad_nta[1] > 39) && ((finSad_nta[0] < finSad_nta[1] && blasaJdida >= finSad_nta[1]) || (finSad_nta[0] > finSad_nta[1] && blasaJdida >= finSad_nta[0] )))  ||  ((finSad_nta[0] <= 39 && finSad_nta[1] >= 39 && blasaJdida-68 >= blasaJdida[1]) || (finSad_nta[1] < 39 && finSad_nta[0] > 39 && blasaJdida-68 >= blasaJdida[0]))))) || sad_espaniol_s(boy_num,blasaJdida-68,false,boy_p,boy_s) || ((finSad_lakhor.length === 1 && ((boy_num < finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(boy_num > 39 && blasaJdida-68 >= finSad_lakhor[0]))))  ||  (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && finSad_lakhor[0] > 39) || ((finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34)&&(finSad_lakhor[0] >= 5 && finSad_lakhor[0] <=34))))  ||  (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[1] && finSad_lakhor[1] > 39) || ((finSad_lakhor[1] >= 5 && finSad_lakhor[1] <=34)&&(boy_num > 39 && blasaJdida-68 >= finSad_lakhor[1])))) )){    
            setDadosa_num_p({...dadosa_num_p , noba: false})
            setDadosa_num_s({...dadosa_num_s , noba: false})
          }
      }else if( (blasaJdida > 34 && fat68_boy) && (blasaJdida - 34 <= 8) ){
        if( (finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]))))  &&  (sad_espaniol(boy_num,boy_p,boy_s) === 0 ||  blasaJdida <= sad_espaniol(boy_num,boy_p,boy_s))  &&  ((finSad_lakhor.length === 0 || (finSad_lakhor.length === 1 && (finSad_lakhor[0] < 39 && finSad_lakhor[0] > 34))) || (finSad_lakhor.length === 1 && (boy_num > finSad_lakhor[0] || blasaJdida < finSad_lakhor[0])) || (finSad_lakhor.length === 2 && ((boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || (boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1]) || (boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0]) )) )){
          setBoy_flesh_s({...boy_flesh_s , [Fat68_key]:blasaJdida - 34 });
          if(blasaJdida - 34 === 8){ 
            setBoy_s({...boy_s,  [boy_s_key]: true });
            setDadosa_num_s({...dadosa_num_s, num:10});
            setDadosa_num_p({...dadosa_num_p, noba:false});
          }else{ 
            setBoy_s({...boy_s,  [boy_s_key]: "yes" });
            setS_yakliki(false);
          }        
        }else if( blasaJdida > sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && blasaJdida >= finSad_lakhor[0]) || (finSad_lakhor.length === 2 && ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])))) )){
          setDadosa_num_p({...dadosa_num_p , noba:false })
          setDadosa_num_s({...dadosa_num_s , noba:false })
        }
      }else if((blasaJdida > 34 && fat68_boy) && (blasaJdida - 34 > 8) ){
        setDadosa_num_s({...dadosa_num_s, noba: false})
        setDadosa_num_p({...dadosa_num_p, noba: false})
      }else{
        if((finSad_nta.length === 0 || (finSad_nta.length === 1 && (((finSad_nta[0] < boy_num || blasaJdida < finSad_nta[0])) || finSad_nta[0] === boy_num ) )  || ( finSad_nta.length === 2 && ((boy_num === finSad_nta[0] && blasaJdida  < finSad_nta[1]) || (boy_num === finSad_nta[1] && blasaJdida  < finSad_nta[0]) || (boy_num > finSad_nta[0] && boy_num === finSad_nta[1]) || (boy_num > finSad_nta[1] && boy_num === finSad_nta[0]) ))  )     &&    (sad_espaniol(boy_num,boy_p,boy_s) === 0 || blasaJdida < sad_espaniol(boy_num,boy_p,boy_s))     &&    ((finSad_lakhor.length === 0) || (finSad_lakhor.length === 1 && ((finSad_lakhor[0] > boy_num && finSad_lakhor[0] > blasaJdida ) ||  boy_num > finSad_lakhor[0])) || (finSad_lakhor.length === 2 && (boy_num > finSad_lakhor[0] && boy_num > finSad_lakhor[1]) || ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0] &&  blasaJdida < finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida < finSad_lakhor[0])) ) )){
          if(dead(blasaJdida,boy_p,setBoy_p,setWlad_p,wlad_p,setDadosa_num_s,dadosa_num_s,setDadosa_num_p,dadosa_num_p)) {
            setS_yakliki(true) 
            setP_yakliki(false)
            makaynch_tri9("S",20,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)
          }else{ 
            setS_yakliki(false)
          }
          setBoy_s({...boy_s,  [boy_s_key]: blasaJdida });
        }else if(blasaJdida >= sad_espaniol(boy_num,boy_p,boy_s) || ((finSad_lakhor.length === 1 && (boy_num  < finSad_lakhor[0] &&  blasaJdida >= finSad_lakhor[0])) || (finSad_lakhor.length === 2 &&  ((boy_num < finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0] ||  blasaJdida >= finSad_lakhor[1])) || ((boy_num > finSad_lakhor[0] && boy_num < finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[1])) || ((boy_num < finSad_lakhor[0] && boy_num > finSad_lakhor[1]) && (blasaJdida >= finSad_lakhor[0])) ))){
          setDadosa_num_p({...dadosa_num_p, noba: false})
          setDadosa_num_s({...dadosa_num_s, noba: false})
        }
      } 
      if(_20){
        setDadosa_num_p({...dadosa_num_p, noba: false})
        setDadosa_num_s({...dadosa_num_s, noba: false})
        setS_yakliki(true);  
        setP_yakliki(false);
        makaynch_tri9("S",20,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)  
      }
    }
  }


  const calculeFleshCase = (boy_num ,dadosa_num,setBoy_flesh,obj_flesh,boy_num_key,_666,setDadosaNum,obj_dadosa,noba,setDadosaNumAuther,obj_dadosa_auther,noba2,setYakliki,ps)=>{
    if(boy_num + dadosa_num <= 8) {
      setBoy_flesh({...obj_flesh, [boy_num_key]: boy_num + dadosa_num})
      setYakliki(false);
      (_666 === 0) ? setDadosaNum({...obj_dadosa , [noba]:true}) : setDadosaNumAuther({...obj_dadosa_auther, [noba2]:true}); 
      if(boy_num + dadosa_num === 8){
        setDadosaNum({...obj_dadosa , [noba]:false}) 
        setDadosaNumAuther({...obj_dadosa_auther , num:10}) 
        setYakliki(true);
        if(ps === "P"){
          makaynch_tri9("P",10,setDadosa_num_p,setDadosa_num_s,setP_yakliki,setS_yakliki)
          setBoy_p({...boy_p , [boy_num_key]:true})
        }else if(ps === "S"){
          makaynch_tri9("S",10,setDadosa_num_s,setDadosa_num_p,setS_yakliki,setP_yakliki)
          setBoy_s({...boy_s , [boy_num_key]:true})
        }
      }
    }
  } 

  const calcule_flesh =(flesh_boy) => {
    const keys_flesh_p = Object.keys(boy_flesh_p)
    const keys_flesh_s = Object.keys(boy_flesh_s)
    for(let i=1 ; i<=4 ; i++){
      if(flesh_boy === "f_p_"+i) 
        calculeFleshCase(boy_flesh_p[keys_flesh_p[i-1]],dadosa_num_p.num,setBoy_flesh_p,boy_flesh_p,`boy${i}`,dadosa_num_p._666.length,setDadosa_num_s,dadosa_num_s,'noba',setDadosa_num_p,dadosa_num_p,'noba',setP_yakliki,"P")
      if(flesh_boy === "f_s_"+i) 
        calculeFleshCase(boy_flesh_s[keys_flesh_s[i-1]],dadosa_num_s.num,setBoy_flesh_s,boy_flesh_s,`boy${i}`,dadosa_num_s._666.length,setDadosa_num_p,dadosa_num_p,'noba',setDadosa_num_s,dadosa_num_s,'noba',setS_yakliki,"S")
    }
  }

  useEffect(()=>{
      document.head.style = `@media only screen and (max-width:610px){
        .Parchessi_design{ width:600px; height:600px; }
      }`  
  })
  


  return( 
    <main style={{width:"100%"}} className="position-relative d-flex justify-content-center align-items-center">
      <Player noba_p={dadosa_num_p.noba} noba_s={dadosa_num_s.noba} bg='var(--primary)' num={dadosa_num_p.num} click={dadosa_p} />
      <Player noba_p={dadosa_num_p.noba} noba_s={dadosa_num_s.noba} bg='var(--danger)'  />
      <Player noba_p={dadosa_num_p.noba} noba_s={dadosa_num_s.noba} bg='var(--success)' num={dadosa_num_s.num} click={dadosa_s} />
      <Player noba_p={dadosa_num_p.noba} noba_s={dadosa_num_s.noba} bg='var(--warning)' />
      <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>    
        <Table 
            wlad_p={wlad_p} wlad_s={wlad_s}  
            boy_p={boy_p}  boy_s={boy_s} p_yakliki={p_yakliki}  s_yakliki={s_yakliki}  calcule={calcule}
            boy_flesh_p={boy_flesh_p}  boy_flesh_s={boy_flesh_s}  calcule_flesh={calcule_flesh}
        />
      </div>
    </main>
  )
}

export default App;