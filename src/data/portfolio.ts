import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
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
      title: "Eminence 4.0 (2024) - Inter-university Technical Competition",
      description: "Champions for team \"MINT Spark\" among 35+ teams. Successfully completed challenges in HackerRank, Matlab Design, Network Simulation, and Innovation Task. For the innovation we did a Smart Home Security System using ESP8266 WiFi NodeMCU microcontroller.",
      year: 2024,
      category: "Competition",
      image: "/assets/achievement-5.png"
    },
    {
      title: "Red Cypher (2024) - CTF Competition", 
      description: "2nd Runners-up for team \"1st Lane\" among 40+ teams. Got 3rd place in the Red Cypher 1.0 competition by IEEE Computer Society of UoR. First time competing in a CTF and achieved excellent results through cybersecurity skills.",
      year: 2024,
      category: "Competition",
      image: "/assets/achievement-6.jpeg"
    },
    {
      title: "HaXtream 2.0 (2023) - Competitive Programming Competition",
      description: "7th place for team \"1st Lane\" among 80+ teams. Clinched the 7th spot in a competitive programming showdown. Our knack for problem-solving, especially with dynamic programming, was key to our success in the thrilling 3-hour contest.", 
      year: 2023,
      category: "Competition",
      image: "/assets/achievement-2.jpeg"
    },
    {
      title: "XBotiX (2023) - Robotics Competition",
      description: "6th place for team \"MINT Sparks\". Participated in the XboticX Robotic Challenge 2023 in the Undergraduate Category, showcasing expertise in robotics and autonomous systems. Led a team through complex challenges involving line following, wall following, and color detection.",
      year: 2023,
      category: "Competition",
      image: "/assets/achievement-3.jpeg"
    },
    {
      title: "Robotics Competition - DP Education Event",
      description: "Participated in robotics competition associated with DP Education of Dhammika & Priscilla Perera Foundation. University received Python robots and I was thrilled to participate and lead our team in this exciting robotic competition with Mr. Migar Amitodana & Mr. Dhammika Perera.",
      year: 2023,
      category: "Competition",
      image: "/assets/achievement-1.jpeg"
    },
    {
      title: "Eminence 3.0 (2023) - Inter-University Technical Competition",
      description: "Team \"MINT Spark\" demonstrated exceptional prowess at the Eminence 3.0 technical event, standing out among participating teams. Mastered MATLAB and CISCO Packet Tracer tasks, excelled in competitive programming and innovation with microcontrollers across diverse technical domains.",
      year: 2023,
      category: "Competition",
      image: "/assets/achievement-4.jpeg"
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "C, C++, C#", level: "Experienced" },
      { name: "Java, Python", level: "Intermediate" },
      { name: "JavaScript, TypeScript, CSS", level: "Intermediate" },
      { name: "x86 Assembly, VHDL, Verilog", level: "Basic" },
      { name: "CUDA C/C++", level: "Intermediate" }
    ],
    "Web Development": [
      { name: "Web Technologies", level: "React.js, Angular.js, Node.js, Express.js, Spring Boot" },
      { name: "UI/UX Designing", level: "Figma, WPF, Flutter" },
      { name: "Database Designing", level: "PostgreSQL, MySQL, MongoDB" }
    ],
    "Cloud & DevOps": [
      { name: "Google Cloud Platform (GCP)", level: "Google Kubernetes Engine (GKE), Cloud Load Balancer, Container Registry" },
      { name: "Containerization", level: "Docker, Kubernetes, Microservices Architecture" },
      { name: "CI/CD Pipelines", level: "GitHub Actions, Automated Deployment, Rolling Updates" },
      { name: "Message Brokers", level: "RabbitMQ, Event-Driven Architecture" },
      { name: "Caching & Databases", level: "Redis, PostgreSQL, Connection Pooling" }
    ],
    "Tools & Frameworks": [
      { name: "Git, VS Code, Jira, GitHub, IntelliJ, Eclipse", level: "" },
      { name: "Linux OS", level: "Intermediate" },
      { name: "DevOps Engineering", level: "AWS, Azure, GCP" },
      { name: "Networking", level: "Load Balancing, API Gateway, CORS, Rate Limiting" },
      { name: "High Performance Computing", level: "OpenMP, CUDA, Parallel Programming" }
    ],
    "AI Development": [
      { name: "Machine Learning", level: "Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn" },
      { name: "Deep Learning", level: "TensorFlow, PyTorch, LSTM, Neural Networks" },
      { name: "ANN & Music Generation", level: "TensorFlow, PyTorch, OpenCV, Music Pattern Recognition" }
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
      id: "online-medicine-delivery",
      title: "Online Medicine Delivery System - Microservices Architecture",
      description: "A comprehensive enterprise-grade online medicine delivery platform built with modern microservices architecture, deployed on Google Cloud Platform (GCP). The system features 6 microservices orchestrated with Kubernetes (GKE), utilizing event-driven communication through RabbitMQ, Redis caching for high performance, and PostgreSQL for data persistence. Implements secure authentication with Google OAuth 2.0, automated CI/CD pipeline with GitHub Actions, load balancing, and horizontal auto-scaling. The architecture includes API Gateway for request routing, real-time order tracking, email notifications, and admin dashboard with comprehensive monitoring and health checks.",
      image: "/assets/home_view.png",
      github: "https://github.com/sahanrashmikaslk/online-medicine-delivery",
      technologies: [ "Microservices", "Kubernetes",  "GKE", "Redis", "RabbitMQ", "Docker", "Load Balancing", "CI/CD","GCP", "Node.js", "React", "PostgreSQL"],
      featured: true,
      category: "Cloud Architecture"
    },
    {
      id: "gene-expression-hpc",
      title: "Gene Expression Data - Correlation Matrix Computing Using OpenMP & CUDA",
      description: "A high-performance computing project implementing Pearson Correlation Matrix computation for large gene expression datasets using hybrid parallelization approaches. Developed 4 different implementations: Serial baseline, OpenMP multi-core CPU parallelization, CUDA GPU acceleration, and Hybrid OpenMP-CUDA approach. Achieved significant performance improvements: OpenMP (2.16x speedup), CUDA (6.06x speedup) on NVIDIA GeForce MX230. Includes comprehensive benchmarking system, accuracy verification, and performance analysis tools with automated testing scripts.",
      image: "/assets/Architecture.png", 
      github: "https://github.com/sahanrashmikaslk/GeneExpressionData-CorrelationMatrixComputing-UsingOpenMP-CUDA",
      technologies: ["CUDA", "OpenMP", "C", "Parallel Computing", "HPC", "GPU Programming"],
      featured: true,
      category: "High Performance Computing"
    },
    {
      id: "classical-music-generator",
      title: "Classical Music Generator using Deep Learning (LSTM)",
      description: "As part of our 6th semester AI module, we developed a Classical Music Generator using LSTM (Long Short-Term Memory). We built a model with three LSTM layers followed by dense layers to predict musical features like pitch, step, and duration. Trained on the MusicNet dataset, the model learned intricate patterns from classical music. Our training process involved extracting sequences of notes, using those to train the LSTM model, and then generating new music by predicting the next notes in the sequence. Alongside the model, we created an interactive website hosted on Amazon EC2 where users can select instruments and generate music in real-time.",
      image: "/assets/generatingMusic.png", 
      github: "https://github.com/sahanrashmikaslk/AI-ClassicalMusicGenerator",
      technologies: ["Python", "TensorFlow", "LSTM", "Deep Learning", "AWS EC2"],
      featured: true,
      category: "AI/Deep Learning"
    },
     {
      id: "risc-processor-verilog",
      title: "32-Bit RISC Processor using Verilog",
      description: "This project presents a 32-bit RISC processor with a memory controller, completed as a 3rd-year group project for the HDL module at the University of Ruhuna, SL. The processor features a streamlined architecture for faster execution times, utilizing Verilog HDL for implementation and ModelSim for simulation. The project aimed to design and implement a Reduced Instruction Set Computing (RISC) processor with a memory controller. The processor is equipped with 15 essential instructions covering arithmetic, logical, data transfer, and control operations.",
      image: "/assets/project-5.png",
      github: "https://github.com/sahanrashmikaslk/HDL-32bit_RISC_Processor",
      technologies: ["Verilog", "HDL", "ModelSim", "RISC Architecture"],
      featured: false,
      category: "Hardware Design"
    },
    {
      id: "flight-delay-prediction",
      title: "Flight Delay Prediction with Machine Learning (Python)",
      description: "Our 3rd year ML (Machine Learning) group project, led by Dushmin Malisha and myself, focuses on using machine learning algorithms to predict flight delays in the United States domestic air traffic system. By analyzing a comprehensive dataset from the Bureau of Transportation Statistics for the year 2020 over 500 000+ data, we aim to develop a predictive model that can anticipate flight delays with (SVM 93.1% and KNN 87.86%) high accuracy.",
      image: "/assets/project-2.png", 
      github: "https://github.com/sahanrashmikaslk/MachineLerning-FlightDelayPrediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      featured: true,
      category: "Machine Learning"
    },
    {
      id: "chatapp-socket-java",
      title: "ChatApp using Socket Programming (Java)",
      description: "This project involves socket programming using the java and features a client GUI implemented with JavaFX. The application supports various functionalities including group chat, server notifications, individual private chats, and displaying an online user list.",
      image: "/assets/project-7.png",
      github: "https://github.com/sahanrashmikaslk/SocketProgrammingChatApp.git", 
      technologies: ["Java", "Socket Programming", "JavaFX", "Multi-threading"],
      featured: true,
      category: "Desktop Application"
    },
    {
      id: "pet-adoption-mern",
      title: "Pet Adoption Web Application using MERN",
      description: "During my second year at university, I developed a MERN stack project called Find your furMate - pet adoption website using a modern neumorphism design. This project aimed to create a platform where users can seamlessly browse, add, and adopt pets. Featuring user authentication, CRUD operations, image uploads, and search functionality, the application showcases my proficiency in full-stack web development.",
      image: "/assets/project-1.png",
      github: "https://github.com/sahanrashmikaslk/MERN-PetAdoptionWebApplication",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      featured: true,
      category: "Web Development"
    },
    {
      id: "smart-home-security",
      title: "Smart Home Security System Using NodeMCU with Telegram",
      description: "This project we done for the Eminence 4.0 competetion. It is a smart & affordable solution designed to enhance home security through IoT technology. The system utilizes ESP8266, Motion sensors, and Telegram app integration to provide real-time monitoring & control of the system from anywhere with an internet connection.",
      image: "/assets/project-9.jpg",
      github: "https://github.com/sahanrashmikaslk/SmartHomeSecuritySystem-Using_NodeMCU.git",
      technologies: ["NodeMCU", "ESP8266", "IoT", "Telegram API"],
      featured: false,
      category: "IoT/Hardware"
    },
    {
      id: "student-management-wpf",
      title: "Student Management System using WPF (C#)",
      description: "This project is a Student Management System developed during the 2nd year of university. It utilizes Windows Presentation Foundation (WPF) and C# programming language to create a graphical user interface for managing student information. The Student Management System allows users to perform various operations related to student management, including adding, editing, and viewing student details. It provides a user-friendly interface for teachers or administrators to efficiently manage student records.",
      image: "/assets/project-4.png",
      github: "https://github.com/sahanrashmikaslk/WPF-StudentManagmentSystem",
      technologies: ["C#", "WPF", ".NET", "XAML"],
      featured: false,
      category: "Desktop Application"
    },
    
   
    {
      id: "bjt-amplifier-proteus",
      title: "BJT Amplifier Using Proteus with PCB Implementation",
      description: "This electronic group project, created a common emitter BJT amplifier and ensured it met specific requirements (gain and the Bandwidth). Using Proteus for simulation, and verified its performance before transferring the design to a PCB.",
      image: "/assets/project-8.jpg",
      github: "https://github.com/sahanrashmikaslk/BJT_Amplifier-Using_Proteus.git",
      technologies: ["Proteus", "PCB Design", "Electronics", "BJT"],
      featured: false,
      category: "Electronics"
    },
    {
      id: "human-following-robot",
      title: "Human Following Robot with Arduino UNO",
      description: "This project implements a Human Following Robot using Arduino. The robot is equipped with sensors that allow it to detect objects, particularly humans, and follow their movements. It utilizes an ultrasonic sensor and IR sensors to track the position of the human and adjust its movement accordingly.",
      image: "/assets/project-3.png",
      github: "https://github.com/sahanrashmikaslk/Arduino-HumanFollowingRobot",
      technologies: ["Arduino", "C++", "Sensors", "Robotics"],
      featured: false,
      category: "Robotics"
    },
    {
      id: "atm-application-cpp",
      title: "ATM Application with Data Structures using C++",
      description: "This project is a Command Line Interface (CLI) ATM application developed during the 2nd year of university. It implements various banking operations using data structures and provides a user-friendly interface for customers to manage their accounts.",
      image: "/assets/project-6.png",
      github: "https://github.com/sahanrashmikaslk/HDL-32bit_RISC_Processor",
      technologies: ["C++", "Data Structures", "CLI", "Banking System"],
      featured: false,
      category: "Desktop Application"
    }
  ]
};