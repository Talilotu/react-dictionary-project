import React from "react";

export default function Definitions(props) {
  function handleClick() {}
  if (props.examples) {
    return (
      <div>
        <strong>Example: </strong>
        <em>{props.examples}</em>
      </div>
    );
  }
  if (props.synonyms) {
    return <div className="Synonyms">{props.synonyms}</div>;
  }
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
