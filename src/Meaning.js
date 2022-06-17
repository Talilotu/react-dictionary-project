import React from "react";
import Definitions from "./Definitions";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <Definitions examples={definition.example} />
            </p>
          </div>
        );
      })}
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <Definitions synonyms={synonym} />
          </div>
        );
      })}
    </div>
  );
}
