import React,{useEffect,useState} from 'react'
const prefix = 'codepen-clone-';
export default function useLocalStorage(key,initialValue) {
    const prefixkey= prefix + key;
    const [value,setValue]  = useState( ()=> {
        const json = localStorage.getItem(prefixkey);
        if(json != null) return JSON.parse(json);
        if(typeof initialValue === 'function'){
            return initialValue()
        }
        else{
            return initialValue
        }
    });
    useEffect( ()=>{
        localStorage.setItem(prefixkey,JSON.stringify(value))
    },[prefixkey,value]);
  return [value,setValue];
}
