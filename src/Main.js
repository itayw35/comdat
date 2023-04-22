import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Content from "./Content";
import Chapters from "./Chapters";
import Mishnayot from "./Mishnayot";
import Mishna from "./Mishna";
import axios from "axios";
import Header from "./Header";
import image from "./500px-משנה.jpeg";
import "./Main.css";
function Main() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Content />} />
        <Route
          path="/books/:bookId"
          element={<Chapters />}
          loader={({ params }) => {
            return axios.get(
              `https://www.sefaria.org/api/shape/${params.bookId}`
            );
          }}
        />
        <Route path="/books/:bookId/:chapterId" element={<Mishnayot />} />
        <Route
          path="/books/:bookId/:chapterId/:mishnaId"
          element={<Mishna />}
          loader={({ params }) => {
            return axios.get(
              `https://www.sefaria.org/api/texts/${params.bookId}.${params.chapterId}.${params.mishnaId}?context=0`
            );
          }}
        />
      </Route>
    )
  );

  return (
    <div className="main-flex">
      <Header />
      <RouterProvider router={router} />
      <img className="main-image" src={image}></img>
    </div>
  );
}

export default Main;
