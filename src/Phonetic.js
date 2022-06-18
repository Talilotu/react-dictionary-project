import React from "react";

export default function Phonetic(props) {
  if (props.phonetics) {
    return (
      <span className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <h2>{props.phonetics.text}</h2>
      </span>
    );
  } else {
    return null;
  }
}
