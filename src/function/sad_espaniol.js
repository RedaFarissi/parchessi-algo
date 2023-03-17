const sad_espaniol = (blasa9dima,boy_p,boy_s)=> {
    const keysP = Object.keys(boy_p);
    const keysS = Object.keys(boy_s);
    const arr_sadan = [];
    let min
    for(let i=0 ; i<4 ; i++){
      for(let j=0 ; j<4 ; j++){
        if( boy_p[keysP[i]] === boy_s[keysS[j]] && boy_s[keysS[j]] !== 0 && boy_s[keysS[j]] !== true ){
          arr_sadan.push(boy_p[keysP[i]]);
        }
      } 
    }
    if( arr_sadan.length === 0 || (arr_sadan.length === 1 && (arr_sadan[0] <= blasa9dima)) ){
      min = 0
    }else if( arr_sadan.length === 1 ){
      min = arr_sadan[0]
    }else{
      const kbar = arr_sadan.filter( e =>{ if(e > blasa9dima ){return e} } )
      if(kbar.length === 0){
        min = 0 
      }else if(kbar.length === 1){
        min = kbar[0]
      }else{
        min =  kbar[0]
        for( let i=1 ; i<kbar.length ;i++){
          if(min > kbar[i]){
            min = kbar[i]
          }
        }
      }
    }
    return min;
}


export default sad_espaniol;
