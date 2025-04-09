import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleParallax = (e) => {
      document.querySelectorAll(".parallax-item").forEach((item) => {
        const movingValue = item.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleParallax);
    return () => document.removeEventListener("mousemove", handleParallax);
  }, []);

  const getDataValue = (num) => {
    const values = {
      1: -2,
      2: 6,
      3: 4,
      4: -6,
      5: 8,
      6: -4,
      7: 5,
      9: -5,
    };
    return values[num];
  };

  const skill = [
    { title: "HTML", image: "/html.png" },
    { title: "CSS", image: "/css.png" },
    { title: "JavaScript", image: "/js.png" },
    { title: "TailWind", image: "/tailwind.png" },
    { title: "React JS", image: "/react.png" },
    { title: "Node JS", image: "/node.png" },
    { title: "GitHub", image: "/git.png" },
  ];

  const project = [
    {
      title: "Adventure-Awaits",
      path: "https://adventure-awaits-two.vercel.app/",
      image: "/adven.JPG",
    },
    {
      title: "Music-Player",
      path: "https://music-player-react-indol.vercel.app/",
      image: "/music.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        id="home"
        className="relative w-screen h-screen overflow-hidden bg-cover bg-black"
      >
        <div className="flex justify-center items-center h-full">
          <h2
            className="parallax-item z-10 text-white text-[40px] sm:text-[50px] uppercase font-bold tracking-[10px] sm:tracking-[20px] md:tracking-[28px] lg:tracking-[32px] leading-tight sm:leading-[50px] md:leading-[60px] text-center"
            data-value="3"
          >
            Hello I'm
            <br />
            <span className="text-[20px] sm:text-[30px] md:text-[34px] font-medium tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[10px]">
              Umang Dhandhukiya
            </span>
          </h2>

          {[1, 2, 3, 4, 5, 6, 7, 9].map((num) => (
            <img
              key={num}
              src={`/${num}.png`}
              alt={`Layer ${num}`}
              className="absolute object-contain w-full h-full parallax-item"
              data-value={getDataValue(num)}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      <div
        id="about"
        className="w-full flex flex-col justify-evenly items-center bg-black py-16 px-4"
      >
        <h1 className="text-white text-3xl font-bold mb-8">About Me</h1>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border-4 md:border-8 border-white object-cover"
              src="/public/avtar.png"
              alt="Avatar"
            />
          </div>
          <div className="w-full lg:w-2/3 text-white p-4 sm:p-6 md:p-10 text-sm sm:text-base">
            <p>
              I'm Umang Dhandhukiya, and I'm passionate about all things related
              to technology and innovation. As a dedicated software developer,
              I'm curious for developing innovative solutions and exploring
              emerging technologies. I specialize in creating intuitive,
              user-friendly interfaces with a strong focus on responsive design
              and performance optimization. Proficient in HTML, CSS, JavaScript
              and React JS. I am eager to apply my technical skills and
              problem-solving abilities to real-world projects.
            </p>

            <button className="h-10 bg-gray-600 px-6 mt-4 hover:text-black text-white rounded-md">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      <div
        id="skills"
        className="w-full flex flex-col justify-evenly items-center bg-black py-16 px-4"
      >
        <h1 className="text-white text-3xl font-bold mb-8">Skills & Ability</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-10 sm:gap-8 p-4">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-white shadow-md transition-transform duration-300 ease-in-out transform hover:rotate-3 hover:bg-gray-500 origin-bottom-left flex flex-col items-center justify-center p-6 w-32 h-40 mx-auto"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h4 className="text-md text-white text-center">{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      <div
        id="project"
        className="w-full flex flex-col justify-evenly items-center bg-black py-16 px-4"
      >
        <h1 className="text-white text-3xl font-bold mb-8">Project Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map((proj, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-2 border-white backdrop-blur-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-4"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <div className="flex flex-col justify-between h-28 text-white">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <a
                  href={proj.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center px-4 py-2 bg-white/30 text-white border border-white rounded-lg text-sm hover:bg-white hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      <div
        id="contact"
        className="w-full flex flex-col justify-evenly items-center bg-black py-16 px-4"
      >
        <h1 className="text-white text-3xl font-bold mb-8">Contact Me</h1>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="text-white mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="text-white mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-white mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-center mt-4 px-8 py-3 rounded-lg bg-white/20 text-white border border-white/30 hover:bg-white hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-700 w-full" />
    </div>
  );
};

export default Hero;
