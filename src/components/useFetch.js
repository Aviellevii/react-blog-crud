import { useState,useEffect } from "react" 

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPedding,setIsPedding] = useState(true);
    const[eror,setError]= useState(null);
    useEffect(()=>{
    
        const abortCont = new AbortController()

        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
         .then(res=>{
             if(!res.ok){
                 throw Error('cant fetch api url')
             }
             return res.json()
            })
         .then(data=>{
             setData(data)
             setIsPedding(false)
             setError(null);
        }).catch(err=>{
            if(err.name == 'AbortError'){
                console.log('fetch aborted');
            }
            setIsPedding(false)
            setError(err.message);
        })
        },1000);
        return () => abortCont.abort();
    },[url])
    return {data,isPedding,eror}
}
export default useFetch;