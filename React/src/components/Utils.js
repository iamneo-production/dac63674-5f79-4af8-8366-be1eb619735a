import {useState, useEffect} from 'react'


export default  sendPost = (url, body) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null) 
       
                console.log("use effect run");
                fetch(url, {
                        'method': 'POST',
                        'Content-Type': 'application/json',
                        'body': JSON.stringify(body)
                })
                .then(res => {
                        if(!res.ok){
                                throw Error("Could not fetch data for the resource")
                        }
                        return res.json()
                })
                .then((data)=>{
                        console.log(data);
                        setData(data);
                        setIsPending(false)
                        setError(null)
                })
                .catch((e)=>{
                        setError(e.message);
                        setIsPending(false);
                        console.log(e.message);
                })
  

        return { data, isPending, error}
}



export const sendPut = (url, body) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null) 
        useEffect(()=>{
                console.log("use effect run");
                fetch(url, {
                        'method': 'PUT',
                        'Content-Type': 'application/json',
                        'body': JSON.stringify(body)
                })
                .then(res => {
                        if(!res.ok){
                                throw Error("Could not fetch data for the resource")
                        }
                        return res.json()
                })
                .then((data)=>{
                        console.log(data);
                        setData(data);
                        setIsPending(false)
                        setError(null)
                })
                .catch((e)=>{
                        setError(e.message);
                        setIsPending(false);
                        console.log(e.message);
                })
        }, []);

        return { data, isPending, error}
}

const sendDelete = (url) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null) 
        useEffect(()=>{
                console.log("use effect run");
                fetch(url, {
                        'method': 'DELETE',
                        'Content-Type': 'application/json',
                })
                .then(res => {
                        if(!res.ok){
                                throw Error("Could not fetch data for the resource")
                        }
                        return res.json()
                })
                .then((data)=>{
                        console.log(data);
                        setData(data);
                        setIsPending(false)
                        setError(null)
                })
                .catch((e)=>{
                        setError(e.message);
                        setIsPending(false);
                        console.log(e.message);
                })
        }, []);

        return { data, isPending, error}
}


