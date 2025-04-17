import { PortableTextBlock } from '@portabletext/types'

export const games: {
  title: string;
  media: {
    type: 'image' | 'video' | 'webgl';
    url: string;
  };
  href: string;
  shortDesc: string;
  roles: string[];
  tools: string[];
  platforms: string[];
  longDesc: PortableTextBlock[];
}[] = [
  {
    title: "Mic Check",
    media: {
      type: "image",
      url: "/games/mic-check.jpg"
    },
    href: "https://miccheck.com",
    shortDesc: "AI Rap Battle Game",
    roles: ["Game Developer", "AI Software Engineer"],
    tools: ["Unity (C#)", "FastAPI (Python)", "OpenAI API"],
    platforms: ["PC", "WebGL"],
    longDesc: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "An experimental rap battle game that blends real-time gameplay with large language models (LLMs) to deliver dynamic, interactive lyricism. Players battle AI-generated rappers, each with distinct personalities, rap styles, and cultural identities shaped by generative systems."
          }
        ]
      },
      {
        _type: "block",
        _key: "features-title",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Core Features:"
          }
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Real-Time Rap Battles:"
          },
          {
            _type: "span",
            text: " Engage in head-to-head battles with AI opponents, with lyrics generated or assisted in real time based on game context."
          }
        ]
      },
      {
        _type: "block",
        _key: "writing-modes",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Three Writing Modes:"
          }
        ]
      },
      {
        _type: "block",
        _key: "writing-modes-list",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Rhyme Sets: Complete the sentence using a rhyming word or phrase."
          }
        ]
      },
      {
        _type: "block",
        _key: "writing-modes-list-2",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Lead-ins: Finish the second half of a line based on a provided first clause."
          }
        ]
      },
      {
        _type: "block",
        _key: "writing-modes-list-3",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Bar-for-Bar: Write a full sentence to complete a set of bars."
          }
        ]
      },
      {
        _type: "block",
        _key: "npc",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "LLM-Powered NPCs:"
          },
          {
            _type: "span",
            text: " AI rappers participate in pre-battle chats, revealing character traits, audience preferences, and strategic weaknesses."
          }
        ]
      },
      {
        _type: "block",
        _key: "semantic",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Semantic Detection System:"
          },
          {
            _type: "span",
            text: " Uses GPT-based NLP to analyze chat and surface both opponent vulnerabilities and crowd sentiment."
          }
        ]
      },
      {
        _type: "block",
        _key: "scoring",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "AI Scoring Engine:"
          },
          {
            _type: "span",
            text: " Evaluates player lyrics based on rhyme structure, creativity, topical relevance, and audience alignment."
          }
        ]
      },
      {
        _type: "block",
        _key: "rag",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Retrieval-Augmented Generation (RAG):"
          },
          {
            _type: "span",
            text: " Enhances character generation with stylized cultural references and embedded backstories."
          }
        ]
      },
      {
        _type: "block",
        _key: "architecture",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Modular Backend Architecture:"
          },
          {
            _type: "span",
            text: " FastAPI server orchestrates gameplay data, character systems, and structured communication with LLM services."
          }
        ]
      }
    ]
  },
  {
    title: "Otter Agent",
    media: {
      type: "image",
      url: "/games/otter-agent.jpg"
    },
    href: "https://otteragent.com",
    shortDesc: "Social Games On Apple Watch.",
    roles: ["Game Developer", "Software Engineer"],
    tools: ["Swift", "watchOS & iOS Frameworks", "Firebase"],
    platforms: ["iOS", "Apple Watch"],
    longDesc: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "An asynchronous and real-time multiplayer mini-game collection built for the Apple Watch that explores how real-time biometric data can enhance social and ambient gameplay. Developed as part of the Beyond Touch project at CMU's Entertainment Technology Center and supported by Gierad Laput from Apple."
          }
        ]
      },
      {
        _type: "block",
        _key: "features-title",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Core Features:"
          }
        ]
      },
      {
        _type: "block",
        _key: "features-subtitle",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Two Multiplayer Mini-Games:"
          }
        ]
      },
      {
        _type: "block",
        _key: "lie-detector",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Lie Detector:"
          },
          {
            _type: "span",
            text: " A real-time social deception game (3–6 players) where players' heart rates are shared live to spot truth or lies, with haptic interaction between participants."
          }
        ]
      },
      {
        _type: "block",
        _key: "exercise-conquest",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Exercise Conquest:"
          },
          {
            _type: "span",
            text: " A week-long physical activity game where players compete by closing their Apple Watch Activity Rings, paired with a territory-expansion mechanic for strategic play."
          }
        ]
      },
      {
        _type: "block",
        _key: "real-time-data",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Real-Time Data Interaction:"
          },
          {
            _type: "span",
            text: " Enabled haptic communication and heart rate sharing during gameplay, promoting physical engagement and emergent social dynamics."
          }
        ]
      },
      {
        _type: "block",
        _key: "offline-sync",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Offline-Synchronized Architecture:"
          },
          {
            _type: "span",
            text: " Designed a clever workaround for the Apple Watch's lack of WebSocket support by distributing pre-scheduled timestamps to sync game stages locally on each device, reducing dependency on persistent network connections and minimizing battery drain."
          }
        ]
      },
      {
        _type: "block",
        _key: "cross-device",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Cross-Device Communication:"
          },
          {
            _type: "span",
            text: " Built an iOS companion app to bridge the networking gap, using WKWatchConnectivity to communicate between iPhone and Apple Watch."
          }
        ]
      },
      {
        _type: "block",
        _key: "backend-title",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Backend Infrastructure:"
          }
        ]
      },
      {
        _type: "block",
        _key: "backend-points",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Used Firebase Realtime Database for state tracking."
          }
        ]
      },
      {
        _type: "block",
        _key: "backend-points-2",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• Deployed Node.js Cloud Functions for server-side logic in response to game events."
          }
        ]
      },
      {
        _type: "block",
        _key: "production",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Production-Ready:"
          },
          {
            _type: "span",
            text: " Published on the Apple App Store, with ongoing iteration based on player feedbacks."
          }
        ]
      }
    ]
  },
  {
    title: "Monolith",
    media: {
      type: "image",
      url: "/games/monolith.jpg"
    },
    href: "https://monolith.com",
    shortDesc: "An Educational Puzzle Game About James Webb Telescope",
    roles: ["Game Developer"],
    tools: ["Unity Physics", "C#", "Cel Shading"],
    platforms: ["PC"],
    longDesc: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "A physics-based educational puzzle game that teaches core engineering concepts of the James Webb Space Telescope. Built solo in Unity, the game combines robotic simulation, optics puzzles, and real-world mechanics to create an engaging learning experience."
          }
        ]
      },
      {
        _type: "block",
        _key: "features-title",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Core Features:"
          }
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Custom Physics Systems:"
          },
          {
            _type: "span",
            text: " Combined Unity’s built-in joints (Fixed, Hinge, Spring, Slider, Configurable) with custom scripts for advanced motion control, constraint handling, and puzzle logic."
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Robotic Simulation:"
          },
          {
            _type: "span",
            text: " Simulated deployable arms, mirror arrays, and telescope structures using realistic mechanical behaviors."
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Kinematic Control:"
          },
          {
            _type: "span",
            text: " Implemented custom inverse/forward kinematics for articulated object manipulation and mirror phasing."
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Modular Puzzle Framework:"
          },
          {
            _type: "span",
            text: " Designed scalable, data-driven systems to support multiple level mechanics and physics-driven interactions."
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Stylized Rendering:"
          },
          {
            _type: "span",
            text: " Used cel shading and toon lighting to enhance readability and maintain a playful visual style."
          },
        ]
      },
      {
        _type: "block",
        _key: "features-title",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Awards & Recognition:"
          }
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Best Science Education Game:"
          },
          {
            _type: "span",
            text: " China Indie Game Alliance Developers Conference;"
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Golden Award:"
          },
          {
            _type: "span",
            text: " World Metaverse Design Contest;"
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Excellence in Socially Valuable:"
          },
          {
            _type: "span",
            text: " China University Student Game Award;"
          },
        ]
      },
      {
        _type: "block",
        _key: "features-list",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "$10,000+ in funding"
          },
          {
            _type: "span",
            text: " for further development."
          },
        ]
      }
    ]
  }
] 