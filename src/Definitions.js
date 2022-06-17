import React from "react";

export default function Definitions(props) {
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
  } else {
    return null;
  }
}
