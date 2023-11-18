"use client";

import { useEffect } from "react";
import AOS from "aos";

const Effects = () => {
  const followMouse = () => {
    const movingCircle = document.querySelector<HTMLElement>(".moving-circle");
    document.addEventListener("mousemove", function (e) {
      window.requestAnimationFrame(function () {
        movingCircle!.style.transform = `translateX(${
          e.clientX - 20
        }px) translateY(${e.clientY + 20}px)`;
      });
    });
  };

  const hoverGif = () => {
    const gif = document.querySelectorAll<HTMLElement>("[data-gif]");
    const withGif = Array.from(gif).filter((photo) =>
      photo.getAttribute("data-gif")
    );
    withGif.map((image) => {
      const backupImage = image.style.backgroundImage;
      image.onmouseover = function () {
        image.style.backgroundImage = `url('${image.getAttribute(
          "data-gif"
        )!}')`;
      };

      image.onmouseout = function () {
        image.style.backgroundImage = backupImage;
      };
    });
  };

  useEffect(() => {
    followMouse();
    hoverGif();
    AOS.init();
  }, []);

  return null;
};
export default Effects;
