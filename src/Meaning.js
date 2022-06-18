import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-3">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">
                <em>{definition.example}</em>
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
