'use client';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'games' | 'projects' | 'about'>('games');
  
  const games = [
    {
      title: "Mic Check",
      image: "/games/mic-check.jpg",
      href: "/games/mic-check",
      shortDesc: "Rap Battle AI Game",
      roles: ["AI Programmer", "Backend Programmer"],
      tools: ["FastAPI Server", "Unity Engine", "C# & Python"],
      longDesc: "Beyond Touch is an ETC project team supported by Gierad Laput from Apple. Our goal is to leverage the unique capabilities of the Apple Watch, a wearable device that enables real-time body data collection, in gaming experiences."
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

  const renderProjects = () => (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.title} className="group">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="absolute inset-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <div className="h-full flex gap-8">
                  {/* Left Column */}
                  <div className="w-1/3 flex flex-col">
                    <h3 className="text-xl font-medium mb-6">{project.shortDesc}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-yellow-400 text-sm font-medium mb-2">Roles</h4>
                        <ul className="space-y-1">
                          {project.roles.map((role, index) => (
                            <li key={index} className="text-gray-300 italic">
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-yellow-400 text-sm font-medium mb-2">Skills & Tools</h4>
                        <ul className="space-y-1">
                          {project.tools.map((tool, index) => (
                            <li key={index} className="text-gray-300 italic">
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="w-2/3">
                    <p className="text-gray-200 leading-relaxed">
                      {project.longDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">{project.title}</h2>
            <a
              href={project.href}
              className="text-sm text-gray-600 hover:text-black flex items-center"
            >
              View <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );

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
      {/* Left Sidebar */}
      <aside className="w-64 fixed h-full p-8 bg-white">
        <h1 className="text-2xl font-bold mb-8">Portfolio</h1>
        
        {/* Navigation */}
        <nav className="space-y-4 mb-12">
          <button
            onClick={() => setActiveSection('games')}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'games' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Games
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'projects' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
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
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {activeSection === 'games' && (
            <div className="space-y-8">
              {games.map((game) => (
                <div key={game.title} className="group">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="object-cover w-full h-full"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="absolute inset-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="h-full flex gap-8">
                          {/* Left Column */}
                          <div className="w-1/3 flex flex-col">
                            <h3 className="text-xl font-medium mb-6">{game.shortDesc}</h3>
                            
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-yellow-400 text-sm font-medium mb-2">Roles</h4>
                                <ul className="space-y-1">
                                  {game.roles.map((role, index) => (
                                    <li key={index} className="text-gray-300 italic">
                                      {role}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-yellow-400 text-sm font-medium mb-2">Skills & Tools</h4>
                                <ul className="space-y-1">
                                  {game.tools.map((tool, index) => (
                                    <li key={index} className="text-gray-300 italic">
                                      {tool}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="w-2/3">
                            <p className="text-gray-200 leading-relaxed">
                              {game.longDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium">{game.title}</h2>
                    <a
                      href={game.href}
                      className="text-sm text-gray-600 hover:text-black flex items-center"
                    >
                      View <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeSection === 'projects' && renderProjects()}
          {activeSection === 'about' && renderAbout()}
        </div>
      </main>
    </div>
  );
}
