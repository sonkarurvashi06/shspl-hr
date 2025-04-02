import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticalBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 40,
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.6,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticalBackground;
