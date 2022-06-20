import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="mb-3">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="mt-4">
                <Phonetic phonetics={phonetic} />{" "}
              </div>
            );
          })}
        </section>
        <section>
          <h5 className="Synonym">Similar:</h5>
          {props.results.meanings[0].synonyms.map(function (synonym, index) {
            return (
              <div key={index} className="Synonym d-inline-flex">
                {synonym}
              </div>
            );
          })}
          <h5 className="Synonym mt-4">Opposite:</h5>
          {props.results.meanings[0].antonyms.map(function (opposite, index) {
            return (
              <div key={index} className="Synonym d-inline-flex">
                {opposite}
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
