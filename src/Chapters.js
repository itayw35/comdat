import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Chapters() {
    const chaptersNum = useLoaderData().data[0].length;
    const title = useLoaderData().data[0].title;
    const paragraphsNum = useLoaderData().data[0].chapters;
const chapters= ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","י״א","י״ב","י״ג","י״ד","ט״ו","ט״ז","י״ז","י״ח","י״ט","כ׳","כ״א","כ״ב","כ״ג","כ״ד"]
  return (
    <div>
        <h4>{title}</h4>
        {chapters.slice(0,chaptersNum).map((v,i)=> {
          const chapterId = i+ 1;
        return <Link to={`/books/${title}/${chapterId}`} state={{paragraphsNum:paragraphsNum[i],title: title}}>{v + " |"} </Link>
        })}
        </div>
  )
}

export default Chapters