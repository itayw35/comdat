import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Mishnayot() {
    const paragraphsNum = useLocation().state.paragraphsNum;
    const title = useLocation().state.title;
    const chapters= ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","י״א","י״ב","י״ג","י״ד","ט״ו","ט״ז","י״ז","י״ח","י״ט","כ׳","כ״א","כ״ב","כ״ג","כ״ד"]
    const paragraphs= ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","י״א","י״ב","י״ג","י״ד","ט״ו","ט״ז","י״ז"];
    const params = useParams();

 
  return (
    <div>
    <h4>{title + " " + chapters[Number(params.chapterId) - 1]}</h4>
    <div> {paragraphs.slice(0,paragraphsNum).map((v,i)=> {
      const mishnaId = i + 1;
      return <Link to={`/books/${params.bookId}/${params.chapterId}/${mishnaId}`}>{v + "| "}  </Link>
      })}</div>
      </div>
  )
}

export default Mishnayot