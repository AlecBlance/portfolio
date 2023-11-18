interface ProjectType {
  id: number;
  emoji: string;
  title: string;
  app: string;
  gif: string;
  image: string;
  description: string;
  technologies: string[];
  liveSite: string;
  sourceCode: string;
}

const Projects = async () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      emoji: "🎶",
      title: "Podz",
      app: "Music Player",
      gif: "/podz.gif",
      image: "/podz-laptop2.png",
      description:
        "A music player like Spotify but the audio source is from Youtube. This is a UI concept by Ruby Montalvo for her Daily UI challenge but I made it fully functional.",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "Redux",
        "Node.js",
        "REST API",
      ],
      liveSite: "https://podz-music.vercel.app/",
      sourceCode: "https://github.com/AlecBlance/Podz",
    },
    {
      id: 2,
      emoji: "📦",
      title: "Animove",
      app: "Management System for Balayan Org",
      image: "/Animove.png",
      gif: "",
      description:
        "A graduate-requirement capstone project that aims to bootstrap necessary technologies for Balayan organization. A solution for a distributed project with no centralized system",
      technologies: ["PHP", "Javascript", "MySQL", "JQuery", "REST API"],
      liveSite: "https://animove.alecblance.com",
      sourceCode: "",
    },
    {
      id: 3,
      emoji: "📚",
      title: "Full Stack Open",
      app: "A series of projects using MERN Stack",
      image: "/FullStackOpen.png",
      gif: "",
      description:
        "This is a repository of projects made during the Full Stack Open course which aims to expose students to the full stack environment using multiple technologies. ",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "ExpressJS",
        "Node.js",
        "Redux",
        "Context API",
        "REST API",
        "GraphQL",
        "Tailwind",
      ],
      liveSite: "",
      sourceCode: "https://github.com/alecblance/fullStackOpen",
    },
  ];

  return (
    <div className="tab projects flex py-2 px-12 flex-col sm:px-[15vw] max-xs:px-[5vw]">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="flex flex-col w-full py-12 lg:first:pt-24 border-b border-portfolio-lightgray last:border-b-0 xl:flex-row max-xs:py-6"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="700"
      data-aos-delay="500"
    >
      <div className="flex flex-col lg:flex-row lg:mb-8 xl:flex-col xl:mb-0">
        <div className="flex flex-col lg:pr-8 xl:pr-12">
          <div className="mb-6 lg:mb-12">
            <h1 className="mb-3 text-2xl lg:text-3xl">
              {project.emoji}{" "}
              <span className="font-bold gradient text-2xl lg:text-3xl max-xs:text-lg">
                {project.title}
              </span>
            </h1>
            <p className="lg:text-xl max-xs:text-sm">{project.app}</p>
          </div>
          <p className="text-portfolio-gray lg:text-lg font-light max-xs:text-xs">
            {project.description}
          </p>
          <p className="text-portfolio-gray text-sm lg:text-base mt-4 font-light max-xs:text-xs">
            <b>Technologies: </b>
            {project.technologies.join("; ")}
          </p>
        </div>
        <div className="my-8 flex-shrink-0 lg:my-0 xl:mt-12">
          {project.liveSite && (
            <a
              href={project.liveSite}
              className="mr-3 max-xs:text-xs border border-portfolio-accent bg-portfolio-accent text-portfolio-secondary py-2 px-5 rounded-lg text-sm hover:animate-pulse"
            >
              Live site
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              className="text-sm max-xs:text-xs border border-portfolio-secondary py-2 px-5 rounded-lg hover:animate-pulse"
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
