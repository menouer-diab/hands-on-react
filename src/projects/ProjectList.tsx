import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

// Menouer Notice: notice the syntax for accessing the attribute "projects" of the type ProjectListProps

// Other correct variant

function ProjectList_1(projectListProps: ProjectListProps) {
  // function ProjectList(projects: ProjectListProps) {
  // return <pre>{JSON.stringify(projects, null, ' ')}</pre>

  return (
    <>
      {projectListProps.projects.map((proj) => (
        <pre>{JSON.stringify(proj, null, " ")}</pre>
      ))}
    </>
  );
}

function ProjectList({ projects }: ProjectListProps) {
  // function ProjectList(projects: ProjectListProps) {
  // return <pre>{JSON.stringify(projects, null, ' ')}</pre>

  /*     return (
        <>
          {projects.map((proj) => (
            <pre>{JSON.stringify(proj, null, " ")}</pre>
          ))}
        </>
      ); */

/*   return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
            <div className="card">
              <img src={project.imageUrl} alt={project.name}></img>
              <section className="section dark">
                <h5 className="strong">
                  <strong>{project.name}</strong>
                </h5>
                <p>{project.description}</p>
                <p>Budget: {project.budget.toLocaleString()}</p>
              </section>
            </div>
        </div>
      ))}
  </div>); */

  // Replace with ProjectCard component

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project}></ProjectCard>
        </div>
      ))}
  </div>);
}

export default ProjectList;
