import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Content.css"

function Content() {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
axios.get("https://www.sefaria.org/api/shape/Mishnah").then((data)=>{console.log(data);setBooks(data.data)}).catch((err)=>{console.log(err);})
    },[])
    if(books.length===0){
        return <h1>Loading...</h1>
    }
  return (
    <div className='books-container'>
    <div dir="rtl" className='books'>   {books.map((v)=>{
        return <Link to={`/books/${v.title}`} >{v.heTitle.slice(5) + ", "} </Link>
    })}</div>
    </div>
  )
  
}

export default Content