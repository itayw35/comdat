import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./Mishna.css";
import SingleWord from "./SingleWord";

function Mishna() {
  const [selectedColor, setSelectedColor] = useState();
  const [savedTextArray, setSavedTextArray] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const text = useLoaderData().data.he;
  const title = useLoaderData().data.heRef;
  const ref = useLoaderData().data.ref;
  const loadedTextArray = JSON.parse(localStorage.getItem(ref));
  const textArray = text.split(" ");
  const pickColor = (event) => {
    // textRef.current.style.setProperty("--my-color", event.target.id);
    setSelectedColor(event.target.id);
  };
  useEffect(() => {
    const tempSavedTextArray = loadedTextArray
      ? loadedTextArray
      : textArray.map((v) => {
          return { word: v, color: "" };
        });
    setSavedTextArray(tempSavedTextArray);
  }, []);
  const saveData = () => {
    localStorage.setItem(ref, JSON.stringify(savedTextArray));
    setIsPopup(true);
    setIsSaving(true);
  };
  const removeData = () => {
    localStorage.removeItem(ref);
    const clearedTextArray = savedTextArray.map((v) => {
      return { word: v.word, color: "" };
    });
    setSavedTextArray(clearedTextArray);
    setIsPopup(true);
  };
  return (
    <div className="page-container">
      <h4>{title}</h4>
      <h5>בחר מהאפשרויות ולחץ על המילים המתאימות</h5>
      <div className="mishna-container">
        <p dir="rtl" className="mishna-text">
          {savedTextArray.map((v, i, array) => {
            return (
              <SingleWord
                word={v.word}
                color={v.color}
                index={i}
                textArray={array}
                selectedColor={selectedColor}
                savedTextArray={savedTextArray}
                setSavedTextArray={setSavedTextArray}
                loadedTextArray={loadedTextArray}
              />
            );
          })}
        </p>
        <div className="colors-palette-container">
          <div className="orange">
            {" "}
            <label id="orange-radio" htmlFor="orange">
              כותרת
            </label>
            <input
              id="orange"
              type="radio"
              name="colors-palette"
              onChange={pickColor}
            />
          </div>
          <br />
          <div className="orange">
            {" "}
            <label id="red-radio" htmlFor="red">
              אומר
            </label>
            <input
              id="red"
              type="radio"
              name="colors-palette"
              onChange={pickColor}
            />
          </div>
          <br />
          <div className="orange">
            {" "}
            <label id="purple-radio" htmlFor="purple">
              מקרה
            </label>
            <input
              id="purple"
              type="radio"
              name="colors-palette"
              onChange={pickColor}
            />
          </div>
          <br />
          <div className="orange">
            <label id="green-radio" htmlFor="green">
              דין
            </label>
            <input
              id="green"
              type="radio"
              name="colors-palette"
              onChange={pickColor}
            />
          </div>
          <br />

          <div className="orange">
            {" "}
            <label id="light-blue-radio" htmlFor="lightblue">
              טעם
            </label>
            <input
              id="lightblue"
              type="radio"
              name="colors-palette"
              onChange={pickColor}
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="save-button" onClick={removeData}>
          {"נקה"}
        </button>
        <button className="save-button" onClick={saveData}>
          {"שמור"}
        </button>
      </div>
      <div id="popup" className={isPopup ? "change" : ""}>
        {isSaving ? (
          <span>!הכימדוט שלך נשמר</span>
        ) : (
          <span>!הכימדוט שלך נמחק</span>
        )}

        <button
          onClick={() => {
            setIsPopup(false);
            setIsSaving(false);
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
}

export default Mishna;
