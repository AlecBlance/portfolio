import { Project } from "@/utils/types";
import { server } from "@/utils/config";

const Projects = async () => {
  const response = await fetch(`${server}/api/projects`);
  const projects: Project[] = await response.json();

  return (
    <div className="tab projects flex py-2 px-12 flex-col">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col py-12 first:pt-7 border-b border-portfolio-lightgray last:border-b-0">
      <div className="flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl mb-3">
            {project.emoji}{" "}
            <span className="font-bold gradient">{project.title}</span>
          </h1>
          <p>{project.app}</p>
        </div>
        <p className="text-portfolio-gray font-light">{project.description}</p>
        <p className="text-portfolio-gray text-sm mt-4 font-light">
          <b>Technologies: </b>
          {project.technologies.join("; ")}
        </p>
        <div className="my-8">
          {project.liveSite && (
            <a
              href={project.liveSite}
              className="mr-3 bg-portfolio-secondary text-portfolio-black py-2 px-5 rounded-lg text-sm"
            >
              Live site
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              className="text-sm border border-portfolio-secondary py-2 px-5 rounded-lg"
            >
              Source code
            </a>
          )}
        </div>
      </div>
      <div
        className="w-full h-[54vw] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url('/${project.title.replaceAll(" ", "")}.png')`,
        }}
      ></div>
    </div>
  );
};
export default Projects;
