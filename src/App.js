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
      <footer className="mt-2 mb-5 text-center">
        This project was coded by{" "}
        <a
          href="https://shiny-pie-937396.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Akanesi Tohotoa
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Talilotu/react-dictionary-project"
          target="_blank"
          rel="noopener"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://euphonious-profiterole-200b68.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
