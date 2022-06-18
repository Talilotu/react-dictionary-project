import React from "react";

export default function Definitions(props) {
  if (props.phonetics) {
    return (
      <span className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <h2>{props.phonetics.text}</h2>
      </span>
    );
  }
  if (props.synonym) {
    return <li>{props.synonym}</li>;
  } else {
    return null;
  }
}
