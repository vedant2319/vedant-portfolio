
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, Users, Award, Calendar, ArrowRight, Menu, X, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1MEBXte7SCDfuqYiO1LtwS_vFtDISRkPS/view?usp=sharing', '_blank');
  };

  const skills = {
    "Programming": ["Python", "Java", "JavaScript", "SQL"],
    "Web Technologies": ["HTML5", "CSS3", "React.js", "Node.js", "MERN Stack"],
    "Tools & Platforms": ["Git", "Docker", "Jenkins", ".NET"],
    "Concepts": ["OOP", "DSA", "SDLC", "RESTful APIs", "Software Testing"]
  };

  const projects = [
    {
      title: "UniSched – Smart Timetable Scheduler",
      tech: "Flutter, Dart, Python",
      description: "AI-based scheduling app to minimize conflicts and automate time-table generation with constraint-satisfaction algorithms.",
      features: ["AI-powered scheduling", "Conflict minimization", "Room & faculty optimization"]
    },
    {
      title: "Upahar – Food Ordering Web App",
      tech: "MERN Stack",
      description: "Responsive food delivery platform with secure authentication and real-time order tracking.",
      features: ["JWT Authentication", "Stripe Integration", "WebSocket real-time tracking"]
    },
    {
      title: "TripZip – Travel Planner Website",
      tech: "HTML, CSS, JavaScript",
      description: "Interactive tourism platform with API integration for comprehensive travel planning.",
      features: ["Booking.com API", "Chatbot assistance", "Geolocation suggestions"]
    },
    {
      title: "Employee Management System",
      tech: "Java, JSP, MySQL",
      description: "CRUD-based system for centralized employee data management with dynamic updates.",
      features: ["CRUD operations", "Dynamic updates", "Data maintenance"]
    }
  ];

  const experience = [
    {
      title: "Machine Learning Intern",
      company: "Feynn Labs",
      period: "Jun – Aug 2024",
      description: "Developed and deployed ML models using Python and scikit-learn to analyse consumer behaviour data.",
      achievements: ["Led team of 5 members", "Generated business insights", "Market research domain expertise"]
    },
    {
      title: "AI/ML Virtual Intern",
      company: "IBM SkillsBuild via CSRBOX",
      period: "Jun – Jul 2024",
      description: "Built AI-based prototype with team applying IBM Cloud tools and Watson Studio.",
      achievements: ["IBM Cloud tools", "Watson Studio", "Core AI/ML concepts"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 100 ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-blue-100' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Vedant Naik
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md'
                      }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-blue-100 hover:bg-blue-200 inline-flex items-center justify-center p-2 rounded-xl text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:bg-blue-100 hover:text-blue-700 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-purple-200/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vedant Naik
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-4 font-light">
              Computer Science Engineer
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 font-medium">
              AI & Machine Learning Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm sm:text-base">
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <MapPin size={20} className="mr-2 text-blue-500" />
                Sawantwadi, Maharashtra
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Phone size={20} className="mr-2 text-blue-500" />
                +91 9503657153
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:naikvedant82@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Mail size={20} className="mr-2 group-hover:animate-bounce" />
                Contact Me
              </a>
              <button
                onClick={handleResumeDownload}
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-500 hover:border-blue-600 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
              <a
                href="https://www.linkedin.com/in/vedantnaik2319/"
                className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-500 hover:border-purple-600 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Linkedin size={20} className="mr-2 group-hover:animate-bounce" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Results-oriented Computer Science Engineer with a specialization in Artificial Intelligence and Machine Learning.
                I demonstrate strong proficiency in full-stack development, machine learning, and cloud-native tools.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With proven leadership in technical projects, internships, and campus activities, I'm committed to delivering
                scalable, real-world solutions that make a meaningful impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 hover:bg-blue-100 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <Brain size={32} className="mx-auto mb-2 text-blue-500 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">AI/ML Expert</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Specialized in artificial intelligence and machine learning</p>
                </div>
                <div className="bg-purple-50 hover:bg-purple-100 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <Code size={32} className="mx-auto mb-2 text-purple-500 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Full-Stack Dev</h3>
                  <p className="text-xs sm:text-sm text-gray-500">MERN stack and modern web technologies</p>
                </div>
                <div className="bg-pink-50 hover:bg-pink-100 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <Users size={32} className="mx-auto mb-2 text-pink-500 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Team Leader</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Proven leadership in technical projects</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-base sm:text-lg">Bachelor of Engineering - Computer Science [AI & ML]</h4>
                  <p className="text-blue-600 text-sm sm:text-base">Finolex Academy of Management & Technology</p>
                  <p className="text-gray-500 text-xs sm:text-sm">University of Mumbai • 78% • May 2025</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-sm sm:text-base">Higher Secondary School Certificate (HSC)</h4>
                  <p className="text-purple-600 text-sm">Rani Parvati Devi Highschool & Jr. College</p>
                  <p className="text-gray-500 text-xs sm:text-sm">80.83% • June 2021</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-sm sm:text-base">Secondary School Certificate (SSC)</h4>
                  <p className="text-pink-600 text-sm">Shantiniketan English Medium School</p>
                  <p className="text-gray-500 text-xs sm:text-sm">82.40% • June 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white/70 hover:bg-white/90 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">{category}</h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm sm:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-purple-600">Soft Skills & Languages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-blue-600">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {["Communication", "Leadership", "Problem Solving", "Teamwork", "Time Management", "Adaptability"].map((skill) => (
                    <span key={skill} className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-purple-600">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {["English", "Hindi", "Marathi"].map((language) => (
                    <span key={language} className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-white/80 hover:bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100 hover:border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110" />
                </div>
                <p className="text-purple-600 text-xs sm:text-sm mb-3 font-medium">{project.tech}</p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/70 hover:bg-white p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">{exp.title}</h3>
                    <p className="text-lg sm:text-xl text-purple-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 lg:mt-0">
                    <Calendar size={20} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <span key={achIndex} className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Certifications */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-600 flex items-center">
                <Users size={24} className="mr-2" />
                Leadership & Activities
              </h3>
              <div className="space-y-3">
                {[
                  "Head, Event Management Committee",
                  "Coordinator, ACSES",
                  "Class Representative (B.E. CSE)",
                  "CC, Chess Tournament",
                  "ACC, Brainwaves Technical Quiz"
                ].map((role, index) => (
                  <div key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm sm:text-base">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600 flex items-center">
                <Award size={24} className="mr-2" />
                Certifications
              </h3>
              <div className="space-y-3">
                {[
                  "Project Management Simulation – Accenture",
                  "Getting Started with AI – IBM",
                  "Power BI Job Simulation – PwC Switzerland",
                  "Data Visualization Internship – IBM"
                ].map((cert, index) => (
                  <div key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm sm:text-base">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on innovative AI/ML projects or discuss opportunities in full-stack development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="text-center p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Mail size={32} className="text-blue-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:naikvedant82@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                  naikvedant82@gmail.com
                </a>
              </div>

              <div className="text-center p-6 bg-purple-50 hover:bg-purple-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Phone size={32} className="text-purple-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+919503657153" className="text-purple-600 hover:text-purple-700 transition-colors text-sm sm:text-base">
                  +91 9503657153
                </a>
              </div>

              <div className="text-center p-6 bg-pink-50 hover:bg-pink-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Linkedin size={32} className="text-pink-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/vedantnaik2319/" className="text-pink-600 hover:text-pink-700 transition-colors text-sm sm:text-base">
                  vedant2319
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
                <MapPin size={24} className="text-blue-500 mr-2" />
                <span className="text-gray-600 text-base sm:text-lg">Sawantwadi, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-50 to-purple-50 py-8 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2025 Vedant Naik. Crafted with passion for innovation in AI & ML.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom hover animations */
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: 0.875rem;
          }
        }
        
        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .hero-spacing {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio; 
