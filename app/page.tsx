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
  NextIcon,
} from "@/components/Icon";
import Visuals from "@/components/Tab/Visuals";
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <>
      <div className="relative flex min-h-[100dvh] flex-col">
        <div className="moving-circle pointer-events-none fixed left-0 top-[-2.5rem] z-[99] h-10 w-10 rounded-full bg-indigo-400 mix-blend-screen duration-75 ease-in-out max-lg:hidden"></div>
        {/* <div className="absolute z-[-1] flex h-full w-full items-center justify-center">
          <div className="light h-[100vh] max-h-[100vw] w-[100vh] justify-self-center rounded-full bg-portfolio-accent blur-[35vw] md:blur-[25vh]"></div>
        </div> */}

        <div
          className="mt-6 flex justify-between px-12 max-xs:px-[5vw] sm:mx-[15vw] sm:px-0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="1000"
        >
          <div className="flex items-center rounded-md border border-portfolio-accent px-4 py-1 font-light transition-all ease-in-out hover:bg-portfolio-accent max-xs:py-2 max-xs:text-xs">
            <a href="https://drive.google.com/file/d/182cqMIL5egzjUxaYCUp5-RQaMRXGsUjQ/view?usp=sharing">
              My Resume
            </a>
          </div>
          <Socials />
        </div>
        <div className="flex h-full w-full flex-grow items-center">
          <div className="flex h-[45%] w-full flex-col items-center gap-y-10">
            <Image
              className="w-32 rounded-full lg:w-36 xl:w-40"
              src="/profile.jpg"
              alt="Alec Blance Profile Image"
              width={150}
              height={150}
              data-aos="fade-zoom-in"
              data-aos-easing="ease"
              data-aos-duration="500"
              data-aos-delay="100"
            />
            <div className="flex flex-col items-center gap-y-5 xl:gap-y-8">
              <p
                className="text-xl font-extralight lg:text-2xl xl:text-3xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                Hi, 👋🏻 I am{" "}
              </p>
              <h1
                className="gradient text-5xl font-semibold lg:text-6xl xl:text-7xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                Alec Blance
              </h1>
              <p
                className="text-xl font-extralight lg:text-2xl xl:text-3xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease"
                data-aos-duration="500"
                data-aos-delay="700"
              >
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
      <div className="mt-12 border-y border-portfolio-glass-stroke/40 bg-portfolio-black bg-opacity-40 px-12 py-6 sm:px-[15vw] md:py-12">
        <h1
          className="mb-3"
          data-aos="fade-zoom-in"
          data-aos-easing="ease"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <span className="gradient text-2xl font-bold max-xs:text-lg lg:text-3xl">
            Skills
          </span>
        </h1>
        <p
          className="max-xs:text-sm lg:text-xl"
          data-aos="fade-zoom-in"
          data-aos-easing="ease"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          I am comfortable working with these technologies.
        </p>
        <div className="skills-grid mt-6 grid w-full gap-4 max-xs:gap-2 md:mt-12 lg:text-lg">
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <ReactIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">React</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <TypescriptIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Typescript</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <TailwindIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Tailwind</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            <NodeIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Node</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <ExpressIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Express</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <MongoIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">MongoDB</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <FigmaIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Figma</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="1100"
          >
            <GitIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Git</p>
          </div>
          <div
            className="flex items-center first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="1200"
          >
            <NextIcon className="mr-2 h-6 w-6 max-xs:w-5" />
            <p className="max-xs:text-sm">NextJS</p>
          </div>
        </div>
      </div>
      <div className="relative flex h-[40vw] min-h-[70vh] flex-col overflow-hidden max-xs:min-h-[90vh]">
        <div className="mx-12 flex flex-grow flex-col items-center justify-center">
          <h1
            className="gradient text-center text-5xl leading-tight lg:text-6xl lg:leading-normal xl:text-7xl xl:leading-relaxed"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            Let’s build something epic!
          </h1>
          <a
            href="mailto:blancealec1@gmail.com"
            className="mt-12 rounded-lg border border-portfolio-secondary border-opacity-20 bg-portfolio-glass/30 px-12 py-5 text-2xl max-xs:text-lg"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Say Hi
          </a>
        </div>
        <div className="flex justify-between border-b border-b-portfolio-glass-stroke bg-portfolio-glass bg-opacity-10 p-3 sm:px-[15vw]">
          <p className="gradient max-xs:text-xs">Alec Blance © 2023</p>
          <div className="relative">
            <div className="absolute left-[-9rem] top-[-3.5rem] animate-bounce rounded-lg rounded-br-none bg-portfolio-accent px-2 py-1">
              <p className="text-xs">More projects on my Github!</p>
            </div>
            <Socials />
          </div>
        </div>
        {/* <div className="absolute bottom-[-50vw] z-[-1] flex h-full w-full items-end justify-center md:bottom-[-70vh]">
          <div className="light h-[100vh] max-h-[100vw] w-[100vh] rounded-full bg-portfolio-accent blur-[35vw] md:blur-[25vh]"></div>
        </div> */}
      </div>
    </>
  );
};
export default Home;
