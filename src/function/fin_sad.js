const fin_sad =(obj)=> {
    const arr = [] 
    const keys_boy = Object.keys(obj)
    for(let i=0 ; i<keys_boy.length-1 ; i++){
        for(let j = i+1 ; j<keys_boy.length ; j++ ){
            if( obj[keys_boy[i]] === obj[keys_boy[j]] && obj[keys_boy[i]] !== 0 && obj[keys_boy[i]] !== true) 
                arr.push(obj[keys_boy[i]])
        }
    }
    
    return arr
}

export default fin_sad