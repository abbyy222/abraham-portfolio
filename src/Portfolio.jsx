import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code, Briefcase, Award, Zap } from "lucide-react";

// Images
import profilePic from "./assets/profile.jpg";
import project1 from "./assets/exo.JPG";
import project3 from "./assets/csd.JPG";
import project4 from "./assets/StudF.JPG";
import project4i from "./assets/Fipic.JPG";
import project4ii from "./assets/chapM.JPG";
import project5 from "./assets/myx.JPG";
import project6 from "./assets/ddig.JPG";
import project6i from "./assets/AddCo.JPG";
import project6ii from "./assets/tyy.JPG";
import project6iii from "./assets/evii.JPG";
import project7 from "./assets/deli.JPG";
import project8 from "./assets/beaut.JPG";
import project8i from "./assets/cd1.JPG";
import project8ii from "./assets/cd2.JPG";
import project8iii from "./assets/ca3.JPG";
import project8iv from "./assets/ca4.JPG";
import project8v from "./assets/ca5.JPG";
import project9 from "./assets/psudo11.JPG";
import project10 from "./assets/cool.JPG";
import project10i from "./assets/orderr.JPG";
import project10ii from "./assets/prog9.JPG";
import project10iii from "./assets/item1.JPG";
import project10iv from "./assets/item2.JPG";


export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Cyber Threat Prevention System",
      desc: "AI-powered intrusion detection using ML.NET and ONNX. Features a threat monitor UI and real-time alert simulation.",
      fullDesc: "Developed a comprehensive cybersecurity solution using reinforcement learning and ML.NET. The system monitors network traffic in real-time, detects anomalies, and provides instant alerts. Built with C# for backend processing and a custom UI for threat visualization.",
      images: [project1],
      tech: ["C#", "ML.NET", "Python",  "WinForms"],
      github: "https://github.com/abbyy222/CyberDetec.git",
      demo: null
    },
    {
      title: "Cassava Disease Detection System",
      desc: "ML.NET image classifier using ResNet50 for detecting cassava leaf diseases.",
      fullDesc: "Agricultural AI solution that helps farmers identify cassava plant diseases early. Trained ResNet50 model on thousands of leaf images achieving 94% accuracy. Includes a simple interface for farmers to upload photos and get instant diagnoses.",
      images: [project3],
      tech: ["Python", "ML.NET", "ResNet50", "Image Classification"],
      github: "https://github.com/abbyy222/CassavaDetection.git",
      demo: null
    },
    {
      title: "Data Warehouse Report Generator",
      desc: "Tool to export SQL Server warehouse data into well-structured PDF reports.",
      fullDesc: "Enterprise reporting tool that connects to SQL Server data warehouses and generates professional PDF reports with charts, tables, and analytics. Features custom templates, scheduled generation, and email distribution.",
      images: [project4, project4i, project4ii],
      tech: ["C#", "SQL Server", "PDF Generation", ".NET"],
      github: "https://github.com/abbyy222/DataWarehouse.git",
      demo: null
    },
    {
      title: "Myxeilla Assessment Page",
      desc: "A fully- designed analytics dashboard built with React",
      fullDesc: "A fully-designed analytics dashboard built with React, TailwindCSS, Recharts, and modern UI principles.The Myxeilla Admin Dashboard is a dynamic, data-driven frontend application I built as part of a frontend developer assessment. Although I was not selected for the role, this remains one of my strongest UI/UX engineering projects and showcases my ability to build clean, responsive, and interactive admin interfaces.The dashboard simulates a real-world admin experience with fully designed components, charts, and analytics widgets.",
      images: [project5],
      tech: ["C#", "WinForms", "UI/UX Design"],
      github: "https://github.com/abbyy222/myxeilla.git",
      demo: "https://steady-baklava-fff761.netlify.app/"
    },
    {
      title: "Automated Offence Support System",
      desc: "Rule-based app for recommending penalties and actions based on offence data inputs.",
      fullDesc: "Legal tech application that processes offence data and recommends appropriate penalties based on predefined rules and precedents. Helps streamline decision-making in judicial processes.",
      images: [project6,project6i, project6ii, project6iii],
      tech: ["C#", ".NET", "Rule Engine", "Legal Tech"],
      github: "https://github.com/abbyy222/OffenceDec.git",
      demo: null
    },
    {
      title: "Mental Health Support Chatbot (Aurora)",
      desc: "An empathetic AI chatbot offering emotional support in English and Pidgin, powered by Mistral/Gemini models. Backend in Express, frontend in React with TailwindCSS.",
      fullDesc: "Compassionate AI chatbot providing mental health support in multiple languages including Nigerian Pidgin. Uses advanced NLP models for context-aware conversations. Built with modern tech stack for scalability.",
      images: [project9],
      tech: ["React", "Express.js", "Mistral AI", "Gemini", "TailwindCSS"],
      github: "https://github.com/abbyy222/ChattBot.git",
      demo: null
    },
    {
      title: "Car Rental Tracking System",
      desc: "Full-stack app to manage car rentals and vehicle tracking using React, Express, Sequelize, and PostgreSQL with secure role-based login.",
      fullDesc: "Complete car rental management solution with real-time vehicle tracking, booking system, payment integration, and admin dashboard. Features role-based access control and comprehensive reporting.",
      images: [project8, project8i, project8ii, project8iii, project8iv, project8v],
      tech: ["React", "Express.js", "PostgreSQL", "Sequelize", "Auth, Map API (Google Maps / Leaflet.js)"],
      github: "https://github.com/abbyy222/CarTrackingProg.git",
      demo: null
    },
    {
      title: "E-Commerce Platform with Delivery Management System",
      desc: "E-Commerce Platform with Delivery Management | MERN Stack",
      fullDesc: "Developed a comprehensive full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js) with an integrated delivery management system. Features include a complete admin dashboard for product/order/rider management, real-time inventory tracking, JWT-based authentication with role-based access control, and a responsive customer interface. Currently implementing checkout flow, GPS tracking, and payment gateway integration.",
      images: [project10, project10i, project10ii, project10iii, project10iv],
      tech: ["React", "Express.js", "TailwindCSS", "Email Integration",  "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
      github: "https://github.com/abbyy222/Ecommerce-Sys.git",
      demo: null
    },
    {
      title: "Delivery Management System",
      desc: "A React-based logistics system using TailwindCSS and Express.js. Includes real-time delivery updates and email-based agent authentication.",
      fullDesc: "Modern logistics platform for managing deliveries end-to-end. Features real-time GPS tracking, route optimization, agent management, and automated email notifications for status updates.",
      images: [project7],
      tech: ["React", "Express.js", "TailwindCSS", "Email Integration"],
      github: "https://github.com/abbyy222/real-time--delivery-system.git",
      demo: null
    },
  ];

  const blogPosts = [
    {
      title: "My Journey into Machine Learning with .NET",
      date: "2024-10-15",
      excerpt: "How I transitioned from traditional .NET development to building intelligent systems with ML.NET and discovered the power of AI in solving real-world problems.",
      readTime: "5 min read"
    },
    {
      title: "Building My First Intrusion Detection System",
      date: "2024-09-20",
      excerpt: "The challenges and breakthroughs I experienced while developing a reinforcement learning-based cybersecurity system from scratch.",
      readTime: "8 min read"
    },
    {
      title: "From IT Support to Full-Stack Development",
      date: "2024-08-05",
      excerpt: "My career transformation story: how working in IT support at Fidelity Bank sparked my passion for software development and led me to where I am today.",
      readTime: "6 min read"
    },
    {
      title: "Why I Chose React + .NET Stack",
      date: "2024-07-12",
      excerpt: "Exploring the powerful combination of React for frontend and .NET for backend - and why this stack is perfect for building modern, scalable applications.",
      readTime: "7 min read"
    }
  ];

  const skills = [
    { name: "C# & .NET", level: 95 },
    { name: "React & Frontend", level: 90 },
    { name: "ML.NET & AI", level: 85 },
     { name: "Nodejs, expressjs, next.js", level: 89 },
    { name: "SQL & Databases", level: 88 },
    { name: "Python", level: 80 },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-orange-500/20 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-pink-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-10 text-6xl text-orange-500/10 font-mono">{"</>"}</div>
        <div className="absolute top-20 right-40 text-4xl text-pink-500/10 font-mono">{"{ }"}</div>
        <div className="absolute bottom-40 right-20 text-5xl text-purple-500/10 font-mono">{"[ ]"}</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-6 sm:mb-8 border-4 border-orange-400 shadow-2xl shadow-orange-400/50"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent px-2"
          >
            Abraham Michael Chukwuemeka
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 text-center mb-2 px-4"
          >
            .NET & AI Developer | React Frontend | Cybersecurity Enthusiast
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-orange-400 text-sm sm:text-lg mb-6 sm:mb-8"
          >
            abrahammichael054@gmail.com
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4"
          >
            <a
              href="tel:+2349011297835"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400 rounded-full font-semibold hover:bg-orange-400/10 transition-all duration-300 text-center text-sm sm:text-base"
            >
              View Work
            </a>
          </motion.div>
        </motion.section>

        {/* About Section - Redesigned */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
                  I'm a passionate .NET developer who transforms ideas into intelligent, scalable applications. 
                  My expertise spans from building AI-powered systems with ML.NET to crafting beautiful, 
                  responsive frontends with React.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  From developing reinforcement learning models for cybersecurity to creating full-stack 
                  solutions that solve real-world problems, I blend technical excellence with creative 
                  problem-solving. Every project is an opportunity to push boundaries and deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-orange-500/30">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-2 sm:mb-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">8+</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-purple-500/30">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">5+</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Tech Stacks</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-4 sm:mb-6">Technical Expertise</h3>
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm sm:text-base text-orange-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-orange-400 to-pink-400"></div>
            
            <div className="relative pl-10 sm:pl-8 md:pl-0">
              <div className="md:flex md:justify-end md:w-1/2 md:pr-8 mb-8">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl hover:border-orange-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    <span className="text-orange-400 font-semibold text-sm sm:text-base">2023 - 2024</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    IT Support & Development Assistant
                  </h3>
                  <p className="text-pink-400 font-semibold mb-3 text-sm sm:text-base">Fidelity Bank Plc</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Worked in the IT Support Unit, handling system troubleshooting and software assistance. 
                    Collaborated with developers, where I was introduced to C# and .NET technologies. 
                    This experience sparked my transition into full-stack development, leading to enterprise 
                    projects like QuickProPOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 20px 60px rgba(251, 146, 60, 0.3)"
                }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 cursor-pointer group"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => openProject(project)}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-pink-500/30 group-hover:from-orange-500/30 group-hover:to-pink-500/50 transition-all duration-300"></div>
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-xs text-orange-300 border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/50 rounded-lg text-orange-400 font-semibold hover:from-orange-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            My Learning Path
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Documenting my journey through code, AI, and continuous learning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-purple-400 text-xs sm:text-sm mb-3">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{post.date}</span>
                  <span className="ml-auto text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <button className="text-orange-400 font-semibold hover:text-orange-300 transition-colors flex items-center gap-2 text-sm sm:text-base">
                  Read More
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="tel:+2349011297835"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Call Me
            </a>
            <a
              href="mailto:abrahammichael054@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400 rounded-full font-semibold hover:bg-orange-400/10 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Email Me
            </a>
          </div>
        </motion.section>

        {/* Project Modal */}
       {/* Project Modal */}
{selectedProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
    onClick={closeProject}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-[#1a1625] rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border-2 border-orange-400 shadow-2xl shadow-orange-400/20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-[#1a1625] border-b border-white/10 p-4 sm:p-6 flex justify-between items-center z-10">
        <h3 className="text-lg sm:text-2xl font-bold text-white pr-4">{selectedProject.title}</h3>
        <button
          onClick={closeProject}
          className="p-2 hover:bg-white/5 rounded-full transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </button>
      </div>

      <div className="p-4 sm:p-6">
        {/* Image Carousel - Improved */}
        <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-pink-500/10">
          <div className="relative h-64 sm:h-80 md:h-96 bg-gray-900/50 flex items-center justify-center">
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Carousel Controls */}
          {selectedProject.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/50 rounded-full px-2 sm:px-4 py-1.5 sm:py-2">
                {selectedProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-orange-400 scale-125"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              {/* Image Counter */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-white">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </>
          )}
        </div>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
          {selectedProject.fullDesc}
        </p>

        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-orange-400 mb-2 sm:mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-lg text-xs sm:text-sm text-white border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 border border-white/10 hover:border-orange-400/50 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View Code
          </a>
          {selectedProject.demo && (
            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-lg hover:shadow-orange-500/50 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
        {/* Footer */}
        <footer className="border-t border-white/10 py-6 sm:py-8 text-center text-gray-500 px-4">
          <p className="text-xs sm:text-sm md:text-base">© 2024 Abraham Michael Chukwuemeka. Built with React & TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
}