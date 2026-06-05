"use client";

import { useState } from "react";
import Image from "next/image";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaArrowRight,
  FaBars,
  FaCode,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaFigma,
  FaArrowUp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiOpenai,
  SiJavascript,
} from "react-icons/si";

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const skills = [

    { icon: <FaReact />, title: "React.js" },
    { icon: <SiNextdotjs />, title: "Next.js" },
    { icon: <FaPython />, title: "Python" },
    { icon: <FaNodeJs />, title: "Node.js" },
    { icon: <SiMongodb />, title: "MongoDB" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
    { icon: <SiTensorflow />, title: "TensorFlow" },
    { icon: <FaDatabase />, title: "Data Analytics" },
    { icon: <FaCode />, title: "Full Stack Development" },
    { icon: <FaBrain />, title: "Machine Learning" },
    { icon: <FaRobot />, title: "Artificial Intelligence" },
    { icon: <FaChartLine />, title: "Data Visualization" },
    { icon: <FaCloud />, title: "Cloud Computing" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { icon: <SiFirebase />, title: "Firebase" },
    { icon: <SiOpenai />, title: "OpenAI API" },
    { icon: <FaFigma />, title: "UI/UX Design" },
    { icon: <SiJavascript />, title: "JavaScript" },

  ];

  const projects = [

    {
      title: "Vanabhoomi Platform",
      desc: "AI-powered agriculture and smart farming platform.",
    },

    {
      title: "Lead Management CRM",
      desc: "Customer lead management system.",
    },

    {
      title: "AI Resume Analyzer",
      desc: "AI-driven resume screening platform.",
    },

    {
      title: "Smart Attendance System",
      desc: "Face recognition attendance platform.",
    },

    {
      title: "MS Jewellery Website",
      desc: "Professional jewellery showcase website.",
    },

    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with Next.js.",
    },

  ];

  return (

    <main className="bg-[#fffafb] text-[#111827] overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,113,133,0.15),transparent_35%)]"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-pink-100">

        <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-6 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-pink-500">
            Subhani
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <FaBars />
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section
        id="home"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <div className="bg-pink-100 text-pink-500 inline-flex px-5 py-2 rounded-full">

              AI Engineer

            </div>

            <h1 className="text-5xl md:text-7xl font-bold mt-8">

              Shaik{" "}

              <span className="text-pink-500">
                Subhani
              </span>

            </h1>

            <p className="text-xl text-gray-500 mt-6">

              AI Engineer • Full Stack Developer • Data Analyst

            </p>

            <p className="mt-8 text-gray-600 leading-8 max-w-xl">

              Passionate about building intelligent applications,
              AI-powered solutions, data-driven platforms,
              and modern web experiences.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="bg-pink-500 text-white px-7 py-4 rounded-2xl flex items-center gap-3"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/Shaik_Subhani_Resume.pdf"
                download
                className="border border-pink-200 px-7 py-4 rounded-2xl"
              >
                Download Resume
              </a>

            </div>

            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/subbu9849"
                target="_blank"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/shaik-subhani-745542328"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://instagram.com/subhani___99"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>

            </div>

          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            className="flex justify-center"
          >

            <Image
              src="/profile.jpg"
              alt="Shaik Subhani"
              width={420}
              height={420}
              className="rounded-full"
            />

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-24"
      >

        <h2 className="text-4xl font-bold text-center">

          About <span className="text-pink-500">Me</span>

        </h2>

        <p className="max-w-4xl mx-auto text-center mt-8 text-gray-600 leading-8">

          I am Shaik Subhani, a B.Tech Artificial Intelligence
          and Data Science student at Vignan Institute of
          Information Technology. I enjoy building AI-powered
          applications, full-stack web platforms, and
          data-driven solutions that solve real-world problems.

        </p>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 pb-28">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-pink-500">10+</h3>
            <p>Projects</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-pink-500">7.69</h3>
            <p>CGPA</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-pink-500">3rd</h3>
            <p>Year Student</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-pink-500">1+</h3>
            <p>Internship</p>
          </div>

        </div>

      </section>      {/* EDUCATION */}

      <section
        id="education"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Education
        </motion.h2>

        <div className="bg-white rounded-3xl p-10 shadow-xl mt-16 border border-pink-100">

          <h3 className="text-2xl font-bold">
            Vignan Institute of Information Technology
          </h3>

          <p className="text-pink-500 mt-3 font-medium">
            B.Tech – Artificial Intelligence & Data Science
          </p>

          <p className="mt-3 text-gray-600">
            2024 – 2028
          </p>

          <p className="mt-3 text-gray-600">
            Current CGPA: 7.69
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            Focused on Artificial Intelligence, Machine Learning,
            Data Analytics, Software Engineering, and Full Stack
            Application Development.
          </p>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <div className="bg-white rounded-3xl p-10 shadow-xl mt-16 border border-pink-100">

          <h3 className="text-2xl font-bold">
            AI & Full Stack Developer Intern
          </h3>

          <p className="text-pink-500 mt-3 font-medium">
            Future Interns
          </p>

          <ul className="mt-6 space-y-3 text-gray-600">

            <li>
              • Built responsive web applications using modern
              frontend technologies.
            </li>

            <li>
              • Worked on AI-powered solutions and automation tools.
            </li>

            <li>
              • Developed full-stack applications and APIs.
            </li>

            <li>
              • Deployed applications and optimized performance.
            </li>

          </ul>

        </div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28 text-center"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Skills & <span className="text-pink-500">Technologies</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg border border-pink-100 hover:-translate-y-2 transition"
            >

              <div className="text-3xl text-pink-500 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {skill.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-pink-500">
              10+
            </h3>
            <p className="mt-3">
              Full Stack & AI Projects Built
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-pink-500">
              Internship
            </h3>
            <p className="mt-3">
              AI & Full Stack Developer Intern
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-pink-500">
              7.69
            </h3>
            <p className="mt-3">
              Current Academic CGPA
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Featured <span className="text-pink-500">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg border border-pink-100 hover:-translate-y-2 transition"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-6">

                <a
                  href="https://github.com/subbu9849"
                  target="_blank"
                  className="text-pink-500 font-medium"
                >
                  GitHub →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>      {/* JOURNEY */}

      <section
        id="journey"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          My Journey
        </motion.h2>

        <div className="space-y-6 mt-16">

          {[
            "Started Programming",
            "Learned Web Development",
            "Built Full Stack Applications",
            "Entered Artificial Intelligence & Data Science",
            "Completed Professional Internship",
            "Building Production-Ready Applications",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
            >

              <div className="flex items-center gap-4">

                <div className="w-4 h-4 rounded-full bg-pink-500"></div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >

            Let's Build Something Amazing Together

          </motion.h2>

          <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-8">

            Open to internships, freelance projects,
            collaborations and exciting opportunities
            in AI, Full Stack Development and Data Analytics.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:ssk461262@gmail.com"
              className="bg-white text-pink-500 px-8 py-4 rounded-2xl font-semibold"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/subbu9849"
              target="_blank"
              className="border border-white/40 px-8 py-4 rounded-2xl font-semibold"
            >
              GitHub Profile
            </a>

          </div>

          <div className="mt-10 space-y-2">

            <p>
              📧 ssk461262@gmail.com
            </p>

            <p>
              📍 Guntur, Andhra Pradesh, India
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#111827] text-white mt-10">

        <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-16">

          <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT */}

            <div>

              <h2 className="text-3xl font-bold">

                Shaik{" "}

                <span className="text-pink-500">
                  Subhani
                </span>

              </h2>

              <p className="text-gray-400 mt-5">

                AI Engineer • Full Stack Developer • Data Analyst

              </p>

              <p className="text-gray-500 mt-4 leading-7">

                Passionate about Artificial Intelligence,
                Full Stack Development, Data Analytics,
                and building impactful software solutions.

              </p>

            </div>

            {/* CENTER */}

            <div>

              <h3 className="text-xl font-semibold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 mt-5 text-gray-400">

                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <h3 className="text-xl font-semibold">
                Social Links
              </h3>

              <div className="flex gap-4 mt-5">

                <a
                  href="https://github.com/subbu9849"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/shaik-subhani-745542328"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://instagram.com/subhani___99"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">

          © 2026 Shaik Subhani. All rights reserved.

        </div>

      </footer>

      {/* BACK TO TOP */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 bg-pink-500 text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition z-50"
      >

        <FaArrowUp />

      </button>

    </main>

  );

}