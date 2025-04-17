'use client';
import { useState } from 'react';
import { Inter } from "next/font/google";
import { games } from '@/data/games'
import { projects } from '@/data/projects'
import PortableText from '@/components/PortableText'
import { PortableTextBlock } from '@portabletext/types'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type MediaItem = {
  title: string;
  media: {
    type: 'image' | 'video' | 'webgl';
    url: string;
  };
  href: string;
  shortDesc: string;
  roles: string[];
  tools: string[];
  platforms?: string[];
  longDesc: PortableTextBlock[];
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<'games' | 'projects' | 'about'>('games');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});
  
  const handleScroll = (e: WheelEvent, title: string) => {
    // Only handle horizontal scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setScrollPositions(prev => {
        const currentPosition = prev[title] || 0;
        const newPosition = currentPosition + e.deltaX;
        // Limit scroll position between 0 and 100
        return {
          ...prev,
          [title]: Math.min(Math.max(newPosition, 0), 100)
        };
      });
    }
  };

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
        <div className="w-[85%] max-w-[2560px]">
          <div className="space-y-12 p-4 sm:p-6 md:p-8">
            {activeSection === 'about' ? (
              renderAbout()
            ) : (
              (activeSection === 'games' ? games : projects).map((item: MediaItem) => (
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
                      {item.media.type === 'video' ? (
                        <iframe
                          src={item.media.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : item.media.type === 'webgl' ? (
                        <iframe
                          src={item.media.url}
                          className="w-full h-full"
                          allow="autoplay"
                        />
                      ) : (
                        <img
                          src={item.media.url}
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      )}
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
                        marginLeft: activeCard === item.title ? '24px' : '0',
                        transform: `translateX(${scrollPositions[item.title] || 0}%)`
                      }}
                      onClick={() => {
                        if (activeCard !== item.title) {
                          setActiveCard(item.title);
                        }
                      }}
                      onWheel={(e) => handleScroll(e as unknown as WheelEvent, item.title)}
                    >
                      {/* Content */}
                      <div className="h-full w-full px-[10%] py-[8%] relative flex items-center justify-center">
                        {/* Two-column layout */}
                        <div className="relative h-full flex flex-col md:flex-row gap-8">
                          {/* Left Column */}
                          <div className="w-full md:w-1/3 flex flex-col gap-16">
                            {/* Title Section */}
                            <div className="space-y-8">
                              <h3 className={`text-[1.5cqw] font-bold transition-colors ${inter.className}
                                ${activeCard === item.title 
                                  ? 'text-white' 
                                  : 'text-gray-200 group-hover:text-white'}`}>
                                {item.shortDesc}
                              </h3>
                            </div>

                            {/* Roles Section */}
                            <div className="space-y-1">
                              <h4 className={`text-[1.5cqw] font-bold transition-colors ${inter.className}
                                ${activeCard === item.title 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-200'}`}>
                                Roles
                              </h4>
                              <ul className="space-y-0">
                                {item.roles.map((role: string, index: number) => (
                                  <li key={index} className={`text-[0.8cqw] font-bold transition-colors ${inter.className}
                                    ${activeCard === item.title 
                                      ? 'text-gray-200' 
                                      : 'text-gray-200'}`}>
                                    {role}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills & Tools Section */}
                            <div className="space-y-1">
                              <h4 className={`text-[1.5cqw] font-bold transition-colors ${inter.className}
                                ${activeCard === item.title 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-200'}`}>
                                Stack
                              </h4>
                              <ul className="space-y-0">
                                {item.tools.map((tool: string, index: number) => (
                                  <li key={index} className={`text-[0.8cqw] font-bold italic transition-colors ${inter.className}
                                    ${activeCard === item.title 
                                      ? 'text-gray-200' 
                                      : 'text-gray-200'}`}>
                                    {tool}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Platform Section */}
                            <div className="space-y-1">
                              <h4 className={`text-[1.5cqw] font-bold transition-colors ${inter.className}
                                ${activeCard === item.title 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-200'}`}>
                                Platform
                              </h4>
                              <ul className="space-y-0">
                                {item.platforms?.map((platform: string, index: number) => (
                                  <li key={index} className={`text-[0.8cqw] font-bold italic transition-colors ${inter.className}
                                    ${activeCard === item.title 
                                      ? 'text-gray-200' 
                                      : 'text-gray-200'}`}>
                                    {platform}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="w-full md:w-2/3">
                            <div className="space-y-4">
                              <PortableText content={item.longDesc} />
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
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
