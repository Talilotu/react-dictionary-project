import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

export default function PhoneticsAudio(props) {
  const audio = new Audio(props.audio);

  const start = () => {
    audio.play();
  };

  if (props.audio) {
    return (
      <div className="PhoneticsAudio">
        <button onClick={start} className="controls">
          <FontAwesomeIcon icon={faPlayCircle} />
        </button>
      </div>
    );
  }
}
