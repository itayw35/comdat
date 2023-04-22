import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Mishnayot() {
    const paragraphsNum = useLocation().state;
    const paragraphs= ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","י״א","י״ב","י״ג","י״ד","ט״ו","ט״ז","י״ז"];
    const params = useParams();
    useEffect(()=>{
console.log(paragraphsNum);
console.log(params);
    },[])
  return (
    <div> {paragraphs.slice(0,paragraphsNum).map((v,i)=> {
      const mishnaId = i + 1;
      return <Link to={`/books/${params.bookId}/${params.chapterId}/${mishnaId}`}>{v + "| "}  </Link>
      })}</div>
  )
}

export default Mishnayot