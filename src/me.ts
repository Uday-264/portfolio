import {
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiExpress,
  SiShadcnui,
  SiDrizzle,
  SiPrisma,
  SiMongoose,
  SiRedux
} from "react-icons/si";
import { RiNextjsFill,RiTailwindCssFill,RiJavaFill } from "react-icons/ri";
import { TbBrandSocketIo } from "react-icons/tb";
import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Udaykumar Bethi",
  // Facts are optional
  facts: [
    "You can use this website as your portfolio too. If you need help, just ask!",
    "Did you know? You can hire me!",
    "This website is fully navigable with a keyboard.",
    "You can change your color scheme by clicking the top right icon.",
    "I built my own bus tracker display, so I'm never late in the morning.",
    "I track temperature and humidity in my room and have 3 months of data. Ask me what I found!",
    "Try clicking on random thins; you might find some fun animations.",
    "I spent about 6 hours on the theme button alone.",
    "I've spent too long on the animations and theme system of this website.",
    "I'm a huge fan of the show Silicon Valley.",
    "Sometimes, I redesign parts of this website just for fun. Call it a 'perpetual beta.'",
    "This website has a dark mode because, let’s be real, we're programmers.",
  ],
  subtitle: "Web Developer",
  tagline:
    "I love to build fun, high-quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I make things",
    blue: "for the web",
  },
  about:
   "I’m a passionate web developer focused on creating user-friendly, responsive websites. I love solving problems and exploring new technologies, always seeking to make a positive impact through innovative solutions and collaboration.",
  location: "Amherst, MA",
  image: "assets/uday.png",
  education: [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      school: "Vaagdevi College Of Engineering",
      graduation: "2018 - 2022",
    },
  ],
  
  projects: [
    {
      name: "Schedular",
      description:
       "Developed a full-stack scheduling application with secure user authentication and efficient database management. The app allows users to view individual timelines and manage appointments through personalized profiles",
      technologies: [
        "Next.js",
        "Postgresql",
        "Prisma",
        "Socket io",
        "Docker",
        "Clerk Auth",
      ],
      links: [
        {
          name: "Github",
          uri: "https://github.com/Uday-264/schedular",
        },
        
      ],
      image: "assets/logo.png",
    },
  
    {
      name: "Discord Clone",
      description:
        "Developed a Discord clone featuring real-time chat, voice channels, and screen sharing. Users can create servers and join channels, facilitating seamless communication in a modern, user-friendly interface. Ideal for community building and collaboration.",
      technologies: ["Nextjs","Postgresql","zustand","primsa","Clerk Auth","SocketIo","TailwindCSS","Shadcn"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/Uday-264/discord-clone",
        },
        
      ],
      image: "assets/discord.png",
    },
    {
      name: "SwiftVid",
      description:
        "Created a landing page that showcases key features, pricing, customer reviews, and FAQs. The design is straightforward and user-friendly, making it easy for visitors to understand the value of the service.",
      image: "assets/favicon.ico",
      technologies: ["Nextjs", "TypeScript", "TailwindCSS"],
      links: [
       
        { name: "Github", uri: "https://github.com/Uday-264/SwiftVid" },
      ],
    },
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name:"Nextjs",
      icon:RiNextjsFill,
    },

    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name:"Exressjs",
      icon:SiExpress,
     },
     {
      name:"Socket.io",
      icon:TbBrandSocketIo,
     },
     {
      name:"Redux Toolkit",
      icon:SiRedux,
     },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name:"Java",
      icon:RiJavaFill
    },
    {
      name:"Prisma",
      icon:SiPrisma,
    },
    {
      name:"Drizzle",
      icon:SiDrizzle,
    },
    {
      name:"Mongoose",
      icon:SiMongoose,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name:"TailwindCSS",
      icon:RiTailwindCssFill
    },
    
    {
      name:"Shadcn",
      icon: SiShadcnui,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "uday.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/uday-264/",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/udaykumarBethi/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "udaykumar26456@gmail.com",
  },
} as IMe;
