import { Project as ProjectType } from "@/utils/types";
import { server } from "@/utils/config";

const Projects = async () => {
  const response = await fetch(`${server}/api/projects`);
  const projects: ProjectType[] = await response.json();

  return (
    <div className="tab projects flex py-2 px-12 flex-col sm:px-[15vw]">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="flex flex-col w-full py-12 lg:first:pt-24 border-b border-portfolio-lightgray last:border-b-0 xl:flex-row"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      data-aos-delay="700"
    >
      <div className="flex flex-col lg:flex-row lg:mb-8 xl:flex-col xl:mb-0">
        <div className="flex flex-col lg:pr-8 xl:pr-12">
          <div className="mb-6 lg:mb-12">
            <h1 className="mb-3 text-2xl lg:text-3xl">
              {project.emoji}{" "}
              <span className="font-bold gradient text-2xl lg:text-3xl">
                {project.title}
              </span>
            </h1>
            <p className="lg:text-xl">{project.app}</p>
          </div>
          <p className="text-portfolio-gray lg:text-lg font-light">
            {project.description}
          </p>
          <p className="text-portfolio-gray text-sm lg:text-base mt-4 font-light">
            <b>Technologies: </b>
            {project.technologies.join("; ")}
          </p>
        </div>
        <div className="my-8 flex-shrink-0 lg:my-0 xl:mt-12">
          {project.liveSite && (
            <a
              href={project.liveSite}
              className="mr-3 border border-portfolio-accent bg-portfolio-accent text-portfolio-secondary py-2 px-5 rounded-lg text-sm"
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
        className="w-full h-[45vw] bg-cover bg-center rounded-lg xl:h-[25vw] xl:w-[39vw] shrink-0"
        data-gif={project.gif}
        style={{
          backgroundImage: `url('${project.image}')`,
        }}
      ></div>
    </div>
  );
};
export default Projects;
