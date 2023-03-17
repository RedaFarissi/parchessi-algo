const dead =(blasajdida,ar9am_obj,setar9am_obj,setWlad,wlad,setDadosa_num,dadosa_num,setNoba_auther,noba_auther_obj,ps,setFat_68)=>{
    const keys = Object.keys(ar9am_obj)
    let wach_9tal = false ;
    for(let i=0 ; i < keys.length ; i++ ){
      if(ar9am_obj[keys[i]] === blasajdida && ar9am_obj[keys[i]] !== 5 && ar9am_obj[keys[i]] !== 12 && ar9am_obj[keys[i]] !== 17 && ar9am_obj[keys[i]] !== 22 && ar9am_obj[keys[i]] !== 29 && ar9am_obj[keys[i]] !== 34 && ar9am_obj[keys[i]] !== 39 && ar9am_obj[keys[i]] !== 46 && ar9am_obj[keys[i]] !== 51 && ar9am_obj[keys[i]] !== 56 && ar9am_obj[keys[i]] !== 63 && ar9am_obj[keys[i]] !== 68){
        setar9am_obj({...ar9am_obj , [keys[i]]:0 });        
        const arr = wlad.map(e => e); arr[i]="block"; setWlad(arr); 
        setDadosa_num({...dadosa_num , num:20})
        setNoba_auther({...noba_auther_obj ,noba:false})
        wach_9tal = true;   
        if( ps=== "P"){
          setFat_68(prevState => ({...prevState, [keys[i]]:false }))
        }
        break;
      }
    }
    return wach_9tal
  }

  export default dead;