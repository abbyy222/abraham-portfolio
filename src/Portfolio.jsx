import React from "react";
import { motion } from "framer-motion";

// Images
import profilePic from "./assets/profile.jpg";
import project1 from "./assets/exo.jpg";
import project3 from "./assets/csd.jpg";
import project4 from "./assets/studF.jpg";
import project5 from "./assets/CO.jpg";
import project6 from "./assets/ddig.jpg";
import project7 from "./assets/deli.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Cyber Threat Prevention System",
      desc: "AI-powered intrusion detection using ML.NET and ONNX. Features a threat monitor UI and real-time alert simulation.",
      image: project1,
    },
    {
      title: "Cassava Disease Detection System",
      desc: "ML.NET image classifier using ResNet50 for detecting cassava leaf diseases.",
      image: project3,
    },
    {
      title: "Data Warehouse Report Generator",
      desc: "Tool to export SQL Server warehouse data into well-structured PDF reports.",
      image: project4,
    },
    {
      title: "Artistic Animated Order Table",
      desc: "A modern WinForms-inspired table layout with animations, filtering, and order management UI.",
      image: project5,
    },
    {
      title: "Automated Offence Support System",
      desc: "Rule-based app for recommending penalties and actions based on offence data inputs.",
      image: project6,
    },

   {
    title: "Delivery Management System",
    desc: "A React-based logistics system using TailwindCSS and Express.js. Includes real-time delivery updates and email-based agent authentication.",
    image: project7,
   },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#111827] text-white px-6 py-10 font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <img 
          src={profilePic}
          alt="Profile"
          className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-white mb-4 object-cover"
        />
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow">
          Abraham Michael Chukwuemeka
        </h1>
        <p className="text-lg text-gray-300 mt-2">
        .NET & AI Developer | React Frontend | Cybersecurity Enthusiast
        </p>
        <p className="text-sm text-black">abrahammichael054@gmail.com</p>
      </motion.header>

      {/* About Me */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Passionate .NET developer focused on intelligent applications,
          cybersecurity, and desktop tools. I specialize in C# and also,
          I'm a versatile .NET and React developer with a focus on intelligent systems powered by machine learning. 
          I’ve developed and deployed models using Python, ONNX, and ML.NET, 
          including a custom reinforcement learning-based intrusion detection system. My projects blend AI, modern UI/UX (React + TailwindCSS), and real-world problem-solving — from secure delivery systems to automated diagnostics
        </p>
      </motion.section>

      {/* Work Experience */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mb-12 max-w-4xl mx-auto"
>
  <h2 className="text-2xl font-bold mb-4 text-cyan-300 text-center">
    Work Experience
  </h2>
  <div className="bg-[#1f2937] p-6 rounded-2xl shadow-lg text-gray-200">
    <h3 className="text-xl font-semibold text-white mb-2">
      IT Support & Development Assistant – Fidelity Bank Plc
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      Worked in the IT Support Unit, handling system troubleshooting and software assistance. 
      Collaborated with developers, where I was introduced to C# and .NET technologies. 
      This experience sparked my transition into full-stack development, leading to enterprise projects like QuickProPOS.
    </p>
  </div>
</motion.section>


      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-cyan-300 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#1f2937] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Contact Me Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="text-center mt-12"
>
  <a
    href="tel:+2349011297835"
    className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-cyan-600 transition duration-300"
  >
    Contact Me
  </a>
</motion.div>

    </div>
  );
}
