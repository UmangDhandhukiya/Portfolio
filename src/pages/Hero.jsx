import { useEffect } from "react";
import { motion } from "framer-motion";

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

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Marwadi University",
      year: "2024 - 2026",
      description:
        "Focused on software development, web technologies. Built real-world projects using MERN stack.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Saurashtra University(Sarvodaya College)",
      year: "2021 - 2024",
      description:
        "Studied fundamentals of computer science, programming, databases. Create stock Analysis and E-Auction project.",
    },
    {
      degree: "Higher Secondary Education (Commerce)",
      college: "S.G. Dholakiya School",
      year: "2019 - 2021",
      description:
        "Studied core commerce subjects including accountancy, economics, and business studies. Gained a strong foundation in financial and commercial principles.",
    },
    {
      degree: "Secondary School Certificate (10th)",
      college: "J.V. Vidhyalay",
      year: "2018 - 2019",
      description:
        "Completed foundational education with a focus on mathematics, science, and general subjects. Built strong analytical and problem-solving skills.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full bg-black text-white">
      {/* Hero */}
      <div
        id="home"
        className="relative w-screen h-screen overflow-hidden bg-black"
      >
        <div className="flex justify-center items-center h-full relative z-10">
          <h2
            className="parallax-item text-[40px] sm:text-[50px] uppercase font-bold tracking-[10px] sm:tracking-[20px] md:tracking-[28px] lg:tracking-[32px] leading-tight sm:leading-[50px] md:leading-[60px] text-center"
            data-value="3"
          >
            Hello I am
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
              className="absolute object-contain w-full h-full parallax-item pointer-events-none"
              data-value={getDataValue(num)}
              style={{ top: 0, left: 0 }}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      {/* About */}
      <section
        id="about"
        className="w-full py-16 px-4 flex flex-col items-center bg-black max-w-7xl"
      >
        <h1 className="text-3xl font-bold mb-8">About Me</h1>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border-4 md:border-8 border-white object-cover"
              src="/avtar.png"
              alt="Avatar"
            />
          </div>
          <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-10 text-sm sm:text-base">
            <p>
              I am Umang Dhandhukiya, passionate about technology and innovation.
              As a software developer, I create intuitive, user-friendly
              interfaces with a strong focus on responsive design and
              performance optimization. Proficient in HTML, CSS, JavaScript, and
              React JS. I am eager to apply my technical skills and problem
              solving to real-world projects.
            </p>

            <button
              className="h-10 bg-gray-600 px-6 mt-4 hover:text-black text-white rounded-md"
              onClick={() => window.open("/Umang_Resume.pdf", "_blank")}
            >
              Download CV
            </button>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 w-full" />

      {/* Education */}
      <section
        id="education"
        className="bg-black py-20 px-6 md:px-20 w-full max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-16 text-center text-white">
          Education
        </h1>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl"
          />

          <div className="space-y-28 relative z-10">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex justify-between items-center flex-col md:flex-row"
                >
                  {isLeft ? (
                    <>
                      <div className="w-full md:w-5/12">
                        <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md text-white hover:scale-[1.02] transition-transform duration-300 shadow-md text-center">
                          <h2 className="text-xl font-semibold text-blue-400">
                            {edu.degree}
                          </h2>
                          <p className="text-gray-300 mt-1">
                            {edu.college}, {edu.year}
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            {edu.description}
                          </p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-full shadow-[0_0_20px_6px_rgba(99,102,241,0.5)] border-4 border-black z-20" />

                      <div className="hidden md:block md:w-5/12" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:w-5/12" />

                      {/* Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-full shadow-[0_0_20px_6px_rgba(99,102,241,0.5)] border-4 border-black z-20" />

                      <div className="w-full md:w-5/12">
                        <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md text-white hover:scale-[1.02] transition-transform duration-300 shadow-md text-center">
                          <h2 className="text-xl font-semibold text-blue-400">
                            {edu.degree}
                          </h2>
                          <p className="text-gray-300 mt-1">
                            {edu.college}, {edu.year}
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-gray-700 w-full" />

      {/* Skills */}
      <section
        id="skills"
        className="w-full py-16 px-4 flex flex-col items-center bg-black max-w-7xl"
      >
        <h1 className="text-3xl font-bold mb-8">Skills & Ability</h1>
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
      </section>

      <hr className="border-gray-700 w-full" />

      {/* Projects */}
      <section
        id="project"
        className="w-full py-16 px-4 flex flex-col items-center bg-black max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-12 text-white">My Projects</h1>

        <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
          {project.map((proj, idx) => (
            <a
              key={idx}
              href={proj.path}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs w-full bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-800 hover:border-white"
            >
              <img
                className="w-full h-48 object-cover"
                src={proj.image}
                alt={proj.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white text-center">
                  {proj.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
