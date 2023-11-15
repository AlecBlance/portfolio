import { NextResponse } from "next/server";

const visuals = [
  {
    id: 1,
    image: "/podz-mobile.png",
    isPortrait: true,
  },
  {
    id: 2,
    image: "/podz-laptop.png",
    isPortrait: false,
  },
  {
    id: 3,
    image: "/podz-card.png",
    isPortrait: false,
  },
];

export async function GET() {
  return NextResponse.json(visuals);
}
