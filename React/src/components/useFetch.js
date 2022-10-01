import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const useFetch = (url) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null) 
        useEffect(()=>{
                axios.get(url).then((resp) => {
                        console.log(resp.status)
                        if(resp.status === 200) {
                                setData(resp.data);
                                setIsPending(false)
                                setError(null)
                                console.log(resp.data)
                        }else{
                                throw Error("Could not fetch data for the resource")
                        }
                })
                .catch((e)=>{
                        setError(e.message);
                        setIsPending(false);
                        console.log(e.message);
                })
        }, []);

        return { data, isPending, error}
}



export default useFetch;