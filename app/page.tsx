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
        <div className="pointer-events-none fixed left-0 top-[-2.5rem] z-[99] h-10 w-10 rounded-full bg-indigo-400 mix-blend-screen duration-75 ease-in-out moving-circle max-lg:hidden"></div>
        {/* <div className="flex justify-center items-center absolute w-full h-full z-[-1]">
          <div className="h-[100vh] max-h-[100vw] w-[100vh] rounded-full justify-self-center bg-portfolio-accent light blur-[35vw] md:blur-[25vh]"></div>
        </div> */}

        <div
          className="flex justify-between sm:mx-[15vw] mt-6 px-12 sm:px-0 max-xs:px-[5vw]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="1000"
        >
          <div className="flex items-center py-1 px-4 rounded-md border border-portfolio-accent hover:bg-portfolio-accent font-light ease-in-out transition-all max-xs:text-xs max-xs:py-2">
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
              data-aos="fade-zoom-in"
              data-aos-easing="ease"
              data-aos-duration="500"
              data-aos-delay="100"
            />
            <div className="flex flex-col gap-y-5 xl:gap-y-8 items-center">
              <p
                className="font-extralight text-xl lg:text-2xl xl:text-3xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                Hi, 👋🏻 I am{" "}
              </p>
              <h1
                className="text-5xl font-semibold gradient lg:text-6xl xl:text-7xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                Alec Blance
              </h1>
              <p
                className="font-extralight text-xl lg:text-2xl xl:text-3xl"
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
      <div className="py-6 px-12 mt-12 md:py-12 bg-portfolio-black bg-opacity-40 sm:px-[15vw] border-y border-portfolio-glass-stroke/40">
        <h1
          className="mb-3"
          data-aos="fade-zoom-in"
          data-aos-easing="ease"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <span className="font-bold max-xs:text-lg gradient text-2xl lg:text-3xl">
            Skills
          </span>
        </h1>
        <p
          className="lg:text-xl max-xs:text-sm"
          data-aos="fade-zoom-in"
          data-aos-easing="ease"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          I am comfortable working with these technologies.
        </p>
        <div className="mt-6 md:mt-12 w-full grid skills-grid gap-4 lg:text-lg max-xs:gap-2">
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
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <TailwindIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Tailwind</p>
          </div>
          <div
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            <NodeIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Node</p>
          </div>
          <div
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <ExpressIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Express</p>
          </div>
          <div
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <MongoIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">MongoDB</p>
          </div>
          <div
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <FigmaIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Figma</p>
          </div>
          <div
            className="flex items-center  first:ml-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="1100"
          >
            <GitIcon className="mr-2 h-8 w-8 max-xs:w-5" />
            <p className="max-xs:text-sm">Git</p>
          </div>
        </div>
      </div>
      <div className="min-h-[70vh] max-xs:min-h-[90vh] h-[40vw] flex flex-col relative overflow-hidden">
        <div className="flex-grow mx-12 flex flex-col items-center justify-center">
          <h1
            className="gradient text-5xl text-center leading-tight lg:text-6xl lg:leading-normal xl:text-7xl xl:leading-relaxed"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            Let’s build something epic!
          </h1>
          <a
            href="mailto:blancealec1@gmail.com"
            className="bg-portfolio-glass/30 mt-12 max-xs:text-lg border border-portfolio-secondary border-opacity-20 px-12 py-5 text-2xl rounded-lg"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Say Hi
          </a>
        </div>
        <div className="flex justify-between bg-portfolio-glass bg-opacity-10 border-b border-b-portfolio-glass-stroke p-3 sm:px-[15vw]">
          <p className="gradient max-xs:text-xs">Alec Blance © 2023</p>
          <div className="relative">
            <div className="animate-bounce absolute bg-portfolio-accent top-[-3.5rem] px-2 py-1 left-[-9rem] rounded-lg rounded-br-none">
              <p className="text-xs">More projects on my Github!</p>
            </div>
            <Socials />
          </div>
        </div>
        {/* <div className="flex absolute w-full h-full z-[-1] items-end bottom-[-50vw] md:bottom-[-70vh] justify-center ">
          <div className="h-[100vh] max-h-[100vw] w-[100vh] rounded-full bg-portfolio-accent light blur-[35vw] md:blur-[25vh]"></div>
        </div> */}
      </div>
    </>
  );
};
export default Home;
