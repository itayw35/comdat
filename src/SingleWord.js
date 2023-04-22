import React, { useState } from "react";

function SingleWord(props) {
  const [colorSelected, setColorSelected] = useState();

  const handleSavedTextArray = (index, word, color, setSavedTextArray) => {
    setSavedTextArray((savedTextArray) => [
      ...savedTextArray.slice(0, index),
      { word: word, color: color },
      ...savedTextArray.slice(index + 1),
    ]);
  };
  return (
    <span
      onMouseDown={() => {
        setColorSelected(props.selectedColor);
        handleSavedTextArray(
          props.index,
          props.word,
          props.selectedColor,
          props.setSavedTextArray
        );
      }}
      style={
        colorSelected
          ? { color: props.color }
          : props.loadedTextArray
          ? { color: props.loadedTextArray[props.index].color }
          : null
      }
    >
      {props.word}
    </span>
  );
}

export default SingleWord;
