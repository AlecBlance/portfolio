import Image from "next/image";
import Tab from "@/components/Tab/Tab";
import Projects from "@/components/Tab/Projects";
import {
  ReactIcon,
  GithubIcon,
  GmailIcon,
  LinkedinIcon,
  FacebookIcon,
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
      <div className="relative h-[100dvh] flex flex-col">
        <div className="flex justify-center items-center absolute w-full h-full z-[-1]">
          <div className="h-[100vw] w-[100vw] rounded-full justify-self-center bg-portfolio-accent light blur-[35vw]"></div>
        </div>
        <div className="flex justify-between bg-portfolio-glass bg-opacity-10 border-b border-b-portfolio-glass-stroke p-3">
          <div className="flex items-center py-1 px-4 bg-portfolio-accent rounded-md">
            <a
              href="https://drive.google.com/file/d/182cqMIL5egzjUxaYCUp5-RQaMRXGsUjQ/view?usp=sharing"
              className="font-medium"
            >
              My Resume
            </a>
          </div>
          <Socials />
        </div>
        <div className="h-full w-full flex items-center">
          <div className="h-[45%] flex flex-col w-full items-center justify-evenly">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="Alec Blance Profile Image"
              width={150}
              height={150}
            />
            <p className="font-extralight text-xl">Hi, 👋🏻 I am </p>
            <h1 className="text-5xl gradient">Alec Blance</h1>
            <p className="font-extralight text-xl">Front End Developer</p>
          </div>
        </div>
      </div>
      <Tab />
      <div>
        <Projects />
        <Visuals />
      </div>
      <div className="py-6 px-12 bg-portfolio-black bg-opacity-40">
        <h1 className="text-xl font-bold gradient mb-3">Skills</h1>
        <p>I am comfortable working with these technologies.</p>
        <div className="mt-6 flex flex-wrap w-full justify-around gap-x-5 gap-y-5">
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
      <div className="h-[70vh] flex flex-col relative overflow-hidden">
        <div className="flex-grow mx-12 flex flex-col items-center justify-center">
          <h1 className="gradient text-5xl text-center leading-tight	">
            Let’s build something epic!
          </h1>
          <a
            href="mailto:blancealec1@gmail.com"
            className="bg-portfolio-glass mt-12 bg-opacity-30 border border-portfolio-secondary border-opacity-20 px-12 py-5 text-2xl rounded-lg"
          >
            Say Hi
          </a>
        </div>
        <div className="flex justify-between bg-portfolio-glass bg-opacity-10 border-b border-b-portfolio-glass-stroke p-3">
          <p className="gradient">Alec Blance © 2023</p>
          <Socials />
        </div>
        <div className="flex absolute w-full h-full z-[-1] items-end bottom-[-15rem]">
          <div className="h-[100vw] w-[100vw] rounded-full bg-portfolio-accent light blur-[35vw]"></div>
        </div>
      </div>
    </>
  );
};
export default Home;
