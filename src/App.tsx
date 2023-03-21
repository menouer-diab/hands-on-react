import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";

function App() {
  return (
    /*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Menouer Please!
        </a>
      </header>
    </div> */
/*     <blockquote cite="Seeker After Knowledge">
      <ul>
        <li>Tell me and I forget</li>
        <li>Teach me and I may remember</li>
        <li>Involve me and I learn</li>
      </ul>
    </blockquote> */
    <div className="container">
      <ProjectsPage />
    </div>
  );
}

export default App;
