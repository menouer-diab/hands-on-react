import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

/* Notice Menouer: with this SyntaxError, the array elements will be not displayed 
{MOCK_PROJECTS.forEach(p => <p>{p.description}</p>)}
This is due to the fact that forEach() doesn't return an array but a void!!

React components can only return one root element so you will need to wrap the <h1> and <pre> tags in a React Fragement <></>

To switch to JavaScript in JSX use { }
*/

function ProjectsPage() {
  /*     return (
        <h1>My New Projects Component</h1>
    ); */

  /*   return (
    <>
      <h1>My Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>
    </>
  ); */
/*   return (
    <>
      {MOCK_PROJECTS.map((proj) => (
        <pre>{JSON.stringify(proj, null, " ")}</pre>
      ))}
    </>
  ); */
  return (
    <ProjectList projects={MOCK_PROJECTS}></ProjectList>
  )
}

export default ProjectsPage;
