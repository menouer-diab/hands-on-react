// TODO'S
// 1. Implement a ProjectCard as a function (not class) component that meets the following specifications
// 2. Cut the <div className="card">...</div> from the ProjectList component and use it as the JSX for the ProjectCard component. */

import { Project } from "./Project";

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

// Define an interface for the passed properties
interface ProjectCardProps {
  project: Project;
  onEdit:(project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  // consider the attribute project of ProjectCardProps
  const { project, onEdit} = props;

  // Define an event-handler function. It is possible to define function constants or variables
  // Test with developper tools to see the console outputs.
  const handleEditClick = (projectToEdit: Project) => {
    onEdit(projectToEdit);
    //console.log(projectToEdit);
  };

  // copy card part from ProjectList.tsx
  // return (
  //     <div className="card">
  //     <img src={project.imageUrl} alt={project.name}></img>
  //     <section className="section dark">
  //       <h5 className="strong">
  //         <strong>{project.name}</strong>
  //       </h5>
  //       <p>{project.description}</p>
  //       <p>Budget: {project.budget.toLocaleString()}</p>
  //     </section>
  //   </div>
  // );

  // replace with call to function formatDescription
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name}></img>
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>
        <button
          className="bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit"></span>
          Edit-Project
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
