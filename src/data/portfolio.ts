export const portfolioData = {
  name: "Sahan Lelwala",
  title: "Computer Engineer",
  email: "sahanrashmikaslk@gmail.com",
  bio: "A driven 3rd year Computer Engineering undergrad at Faculty of Engineering, University of Ruhuna, SL, with a fervent passion for Embedded Software / Systems development, IOT & Robotics. Proficient in Git to AWS, and an array of programming languages, I specialize in Software & Hardware both. Furthermore, as an innovator, I actively engaged in IEEE activities, from organizing workshops to participating in technical events and committed to leveraging technology for positive change.",
  
  social: {
    linkedin: "https://linkedin.com/in/sahan-lelwala/",
    github: "https://github.com/sahanrashmikaslk/",
    facebook: "https://www.facebook.com/sahan.rashmika.921/",
    instagram: "https://www.instagram.com/_rash_98sl_/"
  },

  education: [
    {
      degree: "BSc.(Hons) in Computer Engineering",
      institution: "University of Ruhuna, SL",
      period: "2021 - Present",
      current: true
    },
    {
      degree: "High School",
      institution: "Kingswood College, Kandy",
      period: "2006 - 2020",
      current: false
    }
  ],

  achievements: [
    {
      title: "Eminence 4.0 (2024) - Technical Competition",
      description: "Champions for team \"MINT Sparks\"",
      year: 2024,
      category: "Competition"
    },
    {
      title: "Red Cypher (2024) - CTF Competition",
      description: "2nd Runners-up for team \"1st Lane\"",
      year: 2024,
      category: "Competition"
    },
    {
      title: "HaXtream 2.0 (2023) - Competitive Programming Competition",
      description: "7th place for team \"1st Lane\"",
      year: 2023,
      category: "Competition"
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "C, C++, C#", level: "Experienced" },
      { name: "Java, Python", level: "Intermediate" },
      { name: "JavaScript, TypeScript, CSS", level: "Intermediate" },
      { name: "x86 Assembly, VHDL, Verilog", level: "Basic" }
    ],
    "Web Development": [
      { name: "Web Technologies", level: "React.js, Angular.js, Node.js, Express.js, Spring Boot" },
      { name: "UI/UX Designing", level: "Figma, WPF, Flutter" },
      { name: "Database Designing", level: "MySQL, MongoDB" }
    ],
    "Tools & Frameworks": [
      { name: "Git, VS Code, Jira, GitHub, IntelliJ, Eclipse", level: "" },
      { name: "Linux OS", level: "Intermediate" },
      { name: "DevOps Engineering", level: "AWS, Azure" },
      { name: "Networking", level: "Cisco Packet Tracer" }
    ],
    "AI Development": [
      { name: "Machine Learning", level: "Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn" },
      { name: "ANN", level: "TensorFlow, PyTorch, OpenCV" }
    ],
    "Electronics & Robotics": [
      { name: "Embedded Systems", level: "MPLAB X, Atmel Studio" },
      { name: "HDL", level: "VHDL, Verilog, Modelsim" },
      { name: "Microcontrollers", level: "Arduino, NodeMCU, Raspberry PI" },
      { name: "IOT", level: "Strong understanding of IOT, Cloud environments" }
    ]
  },

  projects: [
    {
      title: "Pet Adoption Web Application using MERN",
      description: "Full-stack web application for pet adoption with user authentication, pet listings, and adoption management.",
      image: "/assets/project-1.png",
      github: "https://github.com/sahanrashmikaslk/MERN-PetAdoptionWebApplication",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      featured: true
    },
    {
      title: "Flight Delay Prediction using Machine Learning",
      description: "Machine learning model to predict flight delays using historical data and weather patterns.",
      image: "/assets/project-2.png",
      github: "https://github.com/sahanrashmikaslk/MachineLerning-FlightDelayPrediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      featured: true
    },
    {
      title: "ChatApp using Socket Programming",
      description: "Real-time chat application built with Java socket programming for multi-client communication.",
      image: "/assets/project-7.png",
      github: "https://github.com/sahanrashmikaslk/SocketProgrammingChatApp.git",
      technologies: ["Java", "Socket Programming", "Swing", "Multi-threading"],
      featured: true
    }
  ]
};