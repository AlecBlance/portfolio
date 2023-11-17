import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    emoji: "🎶",
    title: "Podz",
    app: "Music Player",
    gif: "",
    image: "/podz-laptop.png",
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

export async function GET() {
  return NextResponse.json(posts);
}
