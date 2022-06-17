import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results.phonetics);
  if (props.results) {
    return (
      <div className="Results mt-5">
        <h1>{props.results.word}</h1>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank">
                Listen
              </a>{" "}
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
