import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photos, index) {
              return (
                <div key={index} className="col-4">
                  <a href={photos.src.original}>
                    <img src={photos.src.landscape} className="img-fluid" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
