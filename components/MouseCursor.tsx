"use client";

import { useEffect } from "react";

const MouseCursor = () => {
  useEffect(() => {
    const movingCircle = document.querySelector<HTMLElement>(".moving-circle");
    document.addEventListener("mousemove", function (e) {
      window.requestAnimationFrame(function () {
        movingCircle!.style.transform = `translateX(${
          e.clientX - 20
        }px) translateY(${e.clientY + 20}px)`;
      });
    });
  }, []);

  return null;
};
export default MouseCursor;
