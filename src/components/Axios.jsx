import { useState } from "react";
import './Axios.css'
import axios from 'axios';

const Axios=()=>{
    // const [input,setInput]=useState('');
    const [output,SetOutput]=useState([]);

    // const listItems=output.map((item,index)=>{
    //     return(
    //         <li key={index}>{item}</li>
    //     )
    // })


    // const changeHandler=(event)=>{
    //     const value=event.target.value;
    //     setInput(value);
    // }

    const clickHandler=()=>{

        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=907bda2a9a99413d93dd18129c91b2c1")
        .then((response)=>{
            console.log(response);
            SetOutput(response.data.articles)
        })






        // const items=[...output];
        // items.push(input);
        // SetOutput(items);
        // setInput('');

    }
    return(
        <>
        <h1 className="heading">Digikull Students</h1>
        {/* <input 
        type="text" 
        value={input}
        onChange={changeHandler}/> */}
        <button onClick={clickHandler}>Add items</button>
        {/* <table border="1px">
            <tr>
            <th>{listItems}</th>
            </tr>
        </table> */}
        {
            output.map((value)=>{
                return(
                    <>
                    <div>{value.title}</div>
                    </>
                )
            })
        }
        </>
    )
}

export default Axios;