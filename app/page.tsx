import Image from "next/image";
import Tab from "@/components/Tab/Tab";
import Projects from "@/components/Tab/Projects";
import {
  ReactIcon,
  TypescriptIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  FigmaIcon,
  GitIcon,
  ExpressIcon,
} from "@/components/Icon";
import Visuals from "@/components/Tab/Visuals";
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <>
      <div className="relative min-h-[100dvh] flex flex-col">
        <div className="pointer-events-none fixed left-0 top-[-2.5rem] z-[99] h-10 w-10 rounded-full bg-indigo-400 mix-blend-screen duration-75 ease-in-out moving-circle "></div>
        {/* <div className="flex justify-center items-center absolute w-full h-full z-[-1]">
          <div className="h-[100vh] max-h-[100vw] w-[100vh] rounded-full justify-self-center bg-portfolio-accent light blur-[35vw] md:blur-[25vh]"></div>
        </div> */}

        <div className="flex justify-between sm:mx-[15vw] mt-6 px-12 sm:px-0">
          <div className="flex items-center py-1 px-4 rounded-md border border-portfolio-accent hover:bg-portfolio-accent font-light">
            <a href="https://drive.google.com/file/d/182cqMIL5egzjUxaYCUp5-RQaMRXGsUjQ/view?usp=sharing">
              My Resume
            </a>
          </div>
          <Socials />
        </div>
        <div className="h-full w-full flex-grow flex items-center">
          <div className="h-[45%] flex flex-col w-full items-center gap-y-10">
            <Image
              className="rounded-full w-32 lg:w-36 xl:w-40"
              src="/profile.jpg"
              alt="Alec Blance Profile Image"
              width={150}
              height={150}
            />
            <div className="flex flex-col gap-y-5 xl:gap-y-8 items-center">
              <p className="font-extralight text-xl lg:text-2xl xl:text-3xl">
                Hi, 👋🏻 I am{" "}
              </p>
              <h1 className="text-5xl font-semibold gradient lg:text-6xl xl:text-7xl">
                Alec Blance
              </h1>
              <p className="font-extralight text-xl lg:text-2xl xl:text-3xl">
                Front End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tab />
      <div>
        <Projects />
        <Visuals />
      </div>
      <div className="py-6 px-12 mt-12 md:py-12 bg-portfolio-black bg-opacity-40 sm:px-[15vw] border-y border-portfolio-glass-stroke/40">
        <h1 className="mb-3">
          <span className="font-bold gradient text-2xl lg:text-3xl">
            Skills
          </span>
        </h1>
        <p className="lg:text-xl">
          I am comfortable working with these technologies.
        </p>
        <div className="mt-6 md:mt-12 w-full grid skills-grid gap-4 lg:text-lg">
          <div className="flex items-center first:ml-0">
            <ReactIcon className="mr-2 h-8 w-8" />
            <p>React</p>
          </div>
          <div className="flex items-center first:ml-0">
            <TypescriptIcon className="mr-2 h-8 w-8" />
            <p>Typescript</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <TailwindIcon className="mr-2 h-8 w-8" />
            <p>Tailwind</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <NodeIcon className="mr-2 h-8 w-8" />
            <p>Node</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <ExpressIcon className="mr-2 h-8 w-8" />
            <p>Express</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <MongoIcon className="mr-2 h-8 w-8" />
            <p>MongoDB</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <FigmaIcon className="mr-2 h-8 w-8" />
            <p>Figma</p>
          </div>
          <div className="flex items-center  first:ml-0">
            <GitIcon className="mr-2 h-8 w-8" />
            <p>Git</p>
          </div>
        </div>
      </div>
      <div className="min-h-[70vh] h-[40vw] flex flex-col relative overflow-hidden">
        <div className="flex-grow mx-12 flex flex-col items-center justify-center">
          <h1 className="gradient text-5xl text-center leading-tight lg:text-6xl lg:leading-normal xl:text-7xl xl:leading-relaxed">
            Let’s build something epic!
          </h1>
          <a
            href="mailto:blancealec1@gmail.com"
            className="bg-portfolio-glass/30 mt-12 border border-portfolio-secondary border-opacity-20 px-12 py-5 text-2xl rounded-lg"
          >
            Say Hi
          </a>
        </div>
        <div className="flex justify-between bg-portfolio-glass bg-opacity-10 border-b border-b-portfolio-glass-stroke p-3 sm:px-[15vw]">
          <p className="gradient">Alec Blance © 2023</p>
          <Socials />
        </div>
        {/* <div className="flex absolute w-full h-full z-[-1] items-end bottom-[-50vw] md:bottom-[-70vh] justify-center ">
          <div className="h-[100vh] max-h-[100vw] w-[100vh] rounded-full bg-portfolio-accent light blur-[35vw] md:blur-[25vh]"></div>
        </div> */}
      </div>
    </>
  );
};
export default Home;
