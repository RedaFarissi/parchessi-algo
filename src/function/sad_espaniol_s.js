const sad_espaniol_s = (blasa9dima,balasajdida,fat_68,boy_p,boy_s)=> {
    const keysP = Object.keys(boy_p);
    const keysS = Object.keys(boy_s);
    const arr_sadan = [];
    let bool = false
    for(let i=0 ; i<4 ; i++){
      for(let j=0 ; j<4 ; j++){
        if( (boy_p[keysP[i]] === boy_s[keysS[j]]) && boy_s[keysS[j]] !== 0 && boy_s[keysS[j]] !== true ){
          arr_sadan.push(boy_p[keysP[i]])
        }
      } 
    }
    if(arr_sadan.length === 1 && blasa9dima < arr_sadan[0] && fat_68 == false){
      bool = true 
    }else if(arr_sadan.length === 1 && blasa9dima > arr_sadan[0] && balasajdida >= arr_sadan[0] && fat_68 == false){
      bool = true
    }
    return bool;
}
export default sad_espaniol_s