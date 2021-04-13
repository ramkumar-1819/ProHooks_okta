import React, { Component,useEffect,useState } from 'react';
import axios from 'axios';

export default function Search(){
    const[value,setState]=useState("") //hold value that you entered in search bar
    const[datas,setData]=useState([])  //hold data received from the api based on your search

    useEffect(()=>{
        axios.get(`http://openlibrary.org/search.json?title=${value}`)
        .then(res=>{setData(res.data.docs)}) //setting the data that we got to the usestate 
        .catch(err=>console.log(err))
    },[value])

    const changehandler=(e)=>{
          if(e.target.value===""){
              setState("")
          }
          else{
              setState(e.target.value) //setting the value to usestate based on changes
          }
    }
    return(<div>
        <input type="text" onChange={changehandler}></input>
        <h1 className="title">Search Results</h1>
        <div className="section">
            <div>Title</div>
            <div>Author</div>
            <div>Publish year</div>
        </div>
        {value!=="" &&
        <>
        {datas.map((val,index)=>(
            <div className="result" key={index}>
                <div>{val.title_suggest}</div>
                <div>{val.author_name}</div>
                <div>{val.first_publish_year}</div>
            </div>
        ))}
        </>
        }

    </div>
    )
}