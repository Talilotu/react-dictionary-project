import React from "react";
import Dictionary from "./dictionary";
import "./App.css";

function App() {
  return (
    <div className="App text-start">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <Dictionary defaultKeyword="sunset" />
      <footer className="mt-5">
        Coded by{" "}
        <a
          href="https://shiny-pie-937396.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Akanesi Tohotoa
        </a>
      </footer>
    </div>
  );
}

export default App;
