'use client';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'games' | 'projects' | 'about'>('games');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const games = [
    {
      title: "Mic Check",
      image: "/games/mic-check.jpg",
      href: "/games/mic-check",
      shortDesc: "Rap Battle AI Game",
      roles: ["AI Programmer", "Backend Programmer"],
      tools: ["Unity(C#)", "FastAPI(Python)", "OpenAI API", "NLP"],
      longDesc: "This is an AI-powered rap battle game that combines creative gameplay with advanced natural language processing. Players face off against AI rappers, each with distinct personalities, backgrounds, and lyrical styles. The game offers an engaging blend of competition and creativity, powered by a robust backend and AI systems."
    },
    {
      title: "Otter Agent",
      image: "/games/otter-agent.jpg",
      href: "/games/otter-agent",
      shortDesc: "Apple Watch Game Collection",
      roles: ["Game Developer", "Backend Engineer"],
      tools: ["Unity", "SwiftUI", "Node.js"],
      longDesc: "Beyond Touch is an ETC project team supported by Gierad Laput from Apple. Our goal is to leverage the unique capabilities of the Apple Watch, a wearable device that enables real-time body data collection, in gaming experiences."
    },
    {
      title: "Monolith",
      image: "/games/monolith.jpg",
      href: "/games/monolith",
      shortDesc: "Puzzle Adventure Game",
      roles: ["Game Designer", "Unity Developer"],
      tools: ["Unity", "C#", "Blender"],
      longDesc: "A mysterious puzzle game that challenges players to uncover the secrets of an ancient monolith. Players must solve intricate puzzles and explore detailed environments to progress through the story."
    },
    {
      title: "Beyond Touch",
      image: "/games/monolith.jpg",
      href: "/games/beyond-touch",
      shortDesc: "Apple Watch Fitness Games",
      roles: ["Lead Developer", "System Architect"],
      tools: ["Unity", "SwiftUI", "HealthKit"],
      longDesc: "Beyond Touch explores innovative ways to create engaging fitness experiences using the Apple Watch. The project features multiple mini-games that leverage heart rate monitoring, motion sensors, and activity tracking."
    },
    {
      title: "Echo Chamber",
      image: "/games/monolith.jpg", 
      href: "/games/echo-chamber",
      shortDesc: "Audio-Based Horror Game",
      roles: ["Game Designer", "Audio Programmer"],
      tools: ["Unreal Engine", "FMOD", "Blueprint"],
      longDesc: "Echo Chamber is a psychological horror game where sound is your only ally. Players must navigate through a dark, abandoned facility using only audio cues and echoes to avoid dangers."
    }
  ];

  const projects = [
    {
      title: "AI Music Generator",
      image: "/projects/portfolio.jpg",
      href: "/projects/music-gen",
      shortDesc: "Deep Learning Music Creation",
      roles: ["ML Engineer", "Full-stack Developer"],
      tools: ["PyTorch", "React", "Python"],
      longDesc: "An AI-powered music generation system that creates original compositions based on user input and preferences. The system uses deep learning models to understand musical patterns and generate new pieces."
    },
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      href: "/projects/portfolio",
      shortDesc: "Personal Portfolio",
      roles: ["Frontend Developer", "Designer"],
      tools: ["Next.js", "Tailwind CSS", "TypeScript"],
      longDesc: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dynamic content loading, and an intuitive user interface."
    },
    {
      title: "Data Visualization",
      image: "/projects/portfolio.jpg",
      href: "/projects/data-viz",
      shortDesc: "Interactive Data Explorer",
      roles: ["Data Scientist", "Frontend Developer"],
      tools: ["D3.js", "React", "Python"],
      longDesc: "An interactive data visualization platform that helps users explore and understand complex datasets through intuitive visual representations and real-time filtering."
    }
  ];

  const renderAbout = () => (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          Hi, I'm [Your Name]. I'm a game developer and creative technologist based in [Location].
        </p>
        <p className="mb-4">
          I specialize in creating interactive experiences that blend technology with creative expression.
          My work spans game development, AI/ML, and interactive installations.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Game Developer at [Company] (2020-Present)</li>
          <li>Creative Technologist at [Studio] (2018-2020)</li>
          <li>Masters in Entertainment Technology, Carnegie Mellon University</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Wider Left Sidebar */}
      <aside className="w-[20%] min-w-[200px] max-w-[300px] fixed h-full bg-white">
        <div className="p-4 sm:p-6">
          <h1 className="text-xl font-bold mb-6">Portfolio</h1>
          
          {/* Navigation */}
          <nav className="space-y-3 mb-8">
            <button
              onClick={() => setActiveSection('games')}
              className={`block w-full text-left px-3 py-2 transition-colors ${
                activeSection === 'games' 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`block w-full text-left px-3 py-2 transition-colors ${
                activeSection === 'projects' 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`block w-full text-left px-3 py-2 transition-colors ${
                activeSection === 'about' 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              About
            </button>
          </nav>
          
          {/* Social Links */}
          <div className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-black">Twitter</a>
            <a href="#" className="block text-gray-600 hover:text-black">Instagram</a>
            <a href="#" className="block text-gray-600 hover:text-black">Email</a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[20%] flex-1 overflow-x-hidden">
        <div className="w-[90%] max-w-[1600px]"> {/* Increased from 80% and 1200px */}
          <div className="space-y-12 p-4 sm:p-6 md:p-8">
            {(activeSection === 'games' ? games : projects).map((item) => (
              <div key={item.title} className="w-full">
                {/* Image and Card Container */}
                <div className="relative w-full">
                  {/* Image Card */}
                  <div 
                    className={`w-full aspect-[16/9] bg-white shadow-lg overflow-hidden
                      ${activeCard === item.title ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (activeCard === item.title) {
                        setActiveCard(null);
                      }
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Sliding Card */}
                  <div 
                    className={`absolute top-0 h-full group
                      transform transition-all duration-500 ease-in-out
                      ${activeCard === item.title 
                        ? 'left-full -translate-x-[90%] bg-black' 
                        : 'left-full translate-x-[0%] bg-white border border-gray-200'}
                      cursor-pointer overflow-hidden
                      ${activeCard === item.title ? '' : 'hover:bg-black hover:border-transparent'}
                      transition-all`}
                    style={{ 
                      width: '100%',
                      marginLeft: activeCard === item.title ? '24px' : '0'
                    }}
                    onClick={() => {
                      if (activeCard !== item.title) {
                        setActiveCard(item.title);
                      }
                    }}
                  >
                    {/* Content */}
                    <div className="h-full p-[4%] relative">
                      {/* Two-column layout */}
                      <div className="relative h-full flex gap-[4%]">
                        {/* Left Column */}
                        <div className="w-1/3 flex flex-col gap-[4%]">
                          {/* Title Section */}
                          <div>
                            <h2 className={`text-[2.5cqw] font-medium mb-[0.8em] transition-colors
                              ${activeCard === item.title 
                                ? 'text-white' 
                                : 'text-gray-600 group-hover:text-white'}`}>
                              {item.title}
                            </h2>
                            <h3 className={`text-[1.8cqw] font-light transition-colors
                              ${activeCard === item.title 
                                ? 'text-gray-300' 
                                : 'text-gray-500 group-hover:text-white'}`}>
                              {item.shortDesc}
                            </h3>
                          </div>

                          {/* Roles Section */}
                          <div className={`rounded-lg p-[5%] transition-all group/roles flex-1
                            ${activeCard === item.title ? 'bg-white/5 backdrop-blur-sm hover:bg-white' : ''}`}>
                            <h4 className={`text-[1.2cqw] font-medium mb-[0.8em] uppercase tracking-wider transition-colors
                              ${activeCard === item.title 
                                ? 'text-yellow-400 group-hover/roles:text-yellow-600' 
                                : 'text-gray-600 group-hover:text-yellow-400'}`}>
                              Roles
                            </h4>
                            <ul className="space-y-[0.5em]">
                              {item.roles.map((role, index) => (
                                <li key={index} className={`text-[1cqw] italic transition-colors
                                  ${activeCard === item.title 
                                    ? 'text-gray-300 group-hover/roles:text-gray-700' 
                                    : 'text-gray-500 group-hover:text-white'}`}>
                                  {role}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills & Tools Section */}
                          <div className={`rounded-lg p-[5%] transition-all group/tools flex-1
                            ${activeCard === item.title ? 'bg-white/5 backdrop-blur-sm hover:bg-white' : ''}`}>
                            <h4 className={`text-[1.2cqw] font-medium mb-[0.8em] uppercase tracking-wider transition-colors
                              ${activeCard === item.title 
                                ? 'text-yellow-400 group-hover/tools:text-yellow-600' 
                                : 'text-gray-600 group-hover:text-yellow-400'}`}>
                              Skills & Tools
                            </h4>
                            <ul className="space-y-[0.5em]">
                              {item.tools.map((tool, index) => (
                                <li key={index} className={`text-[1cqw] italic transition-colors
                                  ${activeCard === item.title 
                                    ? 'text-gray-300 group-hover/tools:text-gray-700' 
                                    : 'text-gray-500 group-hover:text-white'}`}>
                                  {tool}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-2/3">
                          <div className={`rounded-lg p-[5%] h-full transition-all group/about
                            ${activeCard === item.title ? 'bg-white/5 backdrop-blur-sm hover:bg-white' : ''}`}>
                            <h4 className={`text-[1.2cqw] font-medium mb-[0.8em] uppercase tracking-wider transition-colors
                              ${activeCard === item.title 
                                ? 'text-yellow-400 group-hover/about:text-yellow-600' 
                                : 'text-gray-600 group-hover:text-yellow-400'}`}>
                              About
                            </h4>
                            <p className={`text-[1cqw] leading-[1.6] transition-colors
                              ${activeCard === item.title 
                                ? 'text-gray-300 group-hover/about:text-gray-700' 
                                : 'text-gray-500 group-hover:text-white'}`}>
                              {item.longDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-black flex items-center"
                  >
                    View <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {activeSection === 'about' && (
            <div className="p-4 sm:p-6 md:p-8">
              {renderAbout()}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
