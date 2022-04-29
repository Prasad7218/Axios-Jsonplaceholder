import { useState } from "react";
import './Axios.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Axios=()=>{
    const [entry,setEntry]=useState([]);


    const changeHandler=(event)=>{
        setEntry({...entry,[event.target.name]:event.target.value})

    }

    const addItem=()=>{
        axios.post('https://jsonplaceholder.typicode.com/todos',entry).then((response)=>{
            console.log(response.data.title);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getItem=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })

    }
   return(
       <>
       <div className='heading'>
       <h1>Digikull Students</h1>
       </div>

       <h2>Hello User</h2>

       <input type="text" name="title" onChange={changeHandler}/>
       <button onClick={addItem}>Add</button>
       <button onClick={getItem}>Get data</button>
       </>
   )
}

export default Axios;