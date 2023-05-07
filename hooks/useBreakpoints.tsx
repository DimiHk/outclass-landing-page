import { useState, useEffect } from "react";

const useBrakepoints = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setBreakpoint("xs");
      } else if (width < 768) {
        setBreakpoint("sm");
      } else if (width < 992) {
        setBreakpoint("md");
      } else if (width < 1280) {
        setBreakpoint("lg");
      } else if (width < 1440) {
        setBreakpoint("xl");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBrakepoints;
