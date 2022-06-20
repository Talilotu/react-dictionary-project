import React from "react";
import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetic(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetic">
        <PhoneticsAudio audio={props.phonetics.audio} />
        <h2>{props.phonetics.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
