"use client";

import { useEffect, useState } from "react";

function getWindowDimensions() {
  interface Window {
    innerWidth: number;
    innerHeight: number;
  }

  const win: Window = window;

  const { innerWidth: width, innerHeight: height } = win;

  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
