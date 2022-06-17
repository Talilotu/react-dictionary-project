import React from "react";
import Meaning from "./Meaning";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mt-5">
        <h1>{props.results.word}</h1>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Definitions audio={phonetic.audio} />{" "}
              <span>{phonetic.text}</span>
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
