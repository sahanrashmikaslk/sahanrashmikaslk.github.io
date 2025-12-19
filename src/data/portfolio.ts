import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Sahan Lelwala",
  title: "Computer Engineer",
  email: "sahanrashmikaslk@gmail.com",
  bio: "A final year Computer Engineering student at University of Ruhuna with expertise in embedded systems, IoT monitoring, robotics, electronics, IC design, and full-stack development. During my Magicbit internship, I mastered Embedded firmware programming for solar energy monitoring systems with IoT platforms and edge computing. I excel in bridging hardware and software domains, from low-level FPGA programming to cloud microservices. Furthermore, as an innovator, I actively engaged in IEEE activities, from organizing workshops to participating in technical events and committed to leveraging technology for positive change.",
  
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

  workExperience: [
    {
      id: "magicbit-intern",
      position: "Computer Engineering Intern",
      company: "Magicbit (Pvt) Ltd",
      period: "6 months",
      location: "Colombo, Sri Lanka",
      briefDescription: "Fully integrated into the development team, contributing to design, implementation, and deployment of industrial IoT solutions using ThingsBoard platform for solar energy and manufacturing sectors.",
      description: "During my six-month industrial training as a Computer Engineering intern at Magicbit (Pvt) Ltd, I was fully integrated into the development team, contributing significantly to the design, implementation, and deployment of industrial IoT solutions. The experience provided a comprehensive application of engineering principles, spanning software development, IoT architecture, and embedded systems development. My core responsibilities centered on the end-to-end development of IoT monitoring and control systems using the ThingsBoard platform. I was entrusted with critical tasks across high-impact projects, including the Windforce Kebithigollawa Solar Plant and the multi-plant MAS Thulhiriya Rooftop Solar projects.",
      keyHighlights: [
        "Embedded Systems Development & Data Acquisition: Developed firmware logic and data processing scripts to interface directly with industrial hardware. Created solutions to read and interpret specific device registry addresses from inverters (Kaco and P341 devices), decoding raw, low-level data streams including consolidated byte arrays and multi-register bitwise flags, converting them into meaningful telemetry (voltage, current, power, alarm states) for monitoring dashboards.",
        "Advanced Dashboard & UI/UX Development: Designed and built sophisticated, real-time data visualization dashboards including dynamic SCADA Single Line Diagram (SLD) using custom HTML/SVG, implementing hierarchical dashboard views for intuitive plant navigation, and developing custom widgets for enhanced user experience and operational efficiency.",
        "Complex Data Processing & Rule Chain Management: Became proficient with the ThingsBoard Rule Engine, developing complex rule chains that processed raw decoded values from the embedded level. Implemented robust alarm systems with separate creation and clearing logic for enhanced reliability, and resolved timing issues with delay nodes for optimal system performance.",
        "Critical Problem-Solving & System Optimization: Developed 'activity_checker' rule chain to accurately display offline device status; Fixed inverter status glitch in multi-tab browser sessions by migrating status logic from client-side to server-side rule chain; Implemented refined yield calculation method (Max-Min total generation) to resolve data accuracy discrepancies; Conducted on-site investigation at MAS Thulhiriya to diagnose and propose solutions for intermittent hardware connectivity issues.",
        "Device Control & API Integration: Successfully implemented remote control functionalities for inverters, utilizing both RPC for start/stop commands and Shared Attributes for max power adjustment. Integrated OpenWeather API to enrich dashboards with external weather data, providing comprehensive environmental monitoring capabilities.",
        "Client Interaction & Professional Development: Actively participated in client meetings, presented project progress, and gathered stakeholder feedback. Direct engagement enhanced professional communication and collaboration skills, while involvement in events like Techno 2024 expanded industry networking and technical presentation abilities."
      ],
      technologies: ["ThingsBoard", "IoT Platform Development", "SCADA Systems", "Industrial IoT", "Embedded Systems", "Firmware Development", "Data Processing", "Dashboard Development", "HTML/SVG", "JavaScript", "Rule Engine", "Device Integration", "Solar Energy Systems", "Real-time Monitoring", "API Integration", "OpenWeather API", "RPC Communication", "Hardware Interfacing", "Inverter Systems", "Kaco Devices", "P341 Devices"],
      image: "/assets/magicbit_at_work.jpg",
      additionalImages: [
        "/assets/magicbit_at_company.jpg",
        "/assets/magicbit_techno.jpg"
      ],
      companyLogo: "/assets/magicbit_logo.png"
    },
    {
      id: "ieee-volunteering",
      position: "Volunteering & Leadership Experience",
      company: "IEEE Student Branch, University of Ruhuna",
      period: "2022 - Present",
      location: "University of Ruhuna, Sri Lanka",
      briefDescription: "Active IEEE student leader: Core organizer for major events like IoTrix 2025 and SparkLink 1.0. Led technical teams, managed logistics, and drove impactful student engagement in technology and leadership.",
      description: "\nActive IEEE student leader: Core organizer for major events like IoTrix 2025 and SparkLink 1.0. Led technical teams, managed logistics, and drove impactful student engagement in technology and leadership.",
      keyHighlights: [
        "Technical Team Lead - IoTrix 2025 (IOT Design Competition): Leading the technical development of IoTrix 2025, the flagship Internet of Things (IoT) event hosted by the IEEE Communications Society at the University of Ruhuna. This initiative aims to foster innovation and hands-on learning in IoT among students and professionals. Spearheading the design and implementation of IoT systems for workshops and competitions, ensuring alignment with current industry standards. Managing a diverse team of engineers and students, coordinating efforts to deliver high-quality technical content and experiences. Collaborating closely with academic and industry partners to integrate real-world challenges and solutions into the event's curriculum. Driving the adoption of emerging technologies and methodologies to enhance the learning experience and event outcomes. Successfully organized a series of hands-on workshops, including sessions on IoT product development and PCB design, featuring industry experts like Eng. Lasitha Jananjaya. Facilitated a collaborative environment that encouraged participants to ideate, integrate, and innovate, leading to the development of prototype IoT solutions. Enhanced the technical capabilities of the IEEE ComSoc student chapter, positioning it as a leader in IoT education and innovation within Sri Lanka.",
        "Logistics Team Lead - SparkLink 1.0 - 2023 (Electronic Design Competition): As the Logistic Lead for SparkLink 1.0, I oversaw all aspects of event coordination, including venue logistics, transportation, and supply management, ensuring seamless operations throughout. Additionally, my team and I efficiently managed delegated tasks through Zoom, optimizing communication and organization in the lead-up to the competition. On the day of the event, we expertly handled these responsibilities, ensuring everything ran smoothly and delegates were properly managed. Our meticulous planning and execution contributed to the success of SparkLink 1.0, leaving a lasting impact on its legacy.",
      ],
      technologies: ["Leadership", "Event Management", "Teamwork", "IoT", "Robotics", "Technical Event Organization"],
      image: " ",
      additionalImages: [
        "/assets/iotrix-1.jpeg",
        "/assets/sparklink_lead.jpeg",
        "/assets/sparklink_oc.jpeg"
      ],
      companyLogo: "/assets/ieee-logo.png"
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
    "Languages": [
      { name: "Python", level: "Advanced" },
      { name: "TypeScript / JavaScript", level: "Intermediate" },
      { name: "C / C++", level: "Intermediate" },
      { name: "C#", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "CUDA C/C++", level: "Intermediate" },
      { name: "VHDL / Verilog", level: "Basic" }
    ],
    "Frontend & UI": [
      { name: "React + Vite", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "Flutter", level: "Intermediate" },
      { name: "WPF", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" }
    ],
    "Backend & APIs": [
      { name: "Node.js + Express", level: "Intermediate" },
      { name: "FastAPI (Python)", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Auth (JWT, bcrypt)", level: "Intermediate" },
      { name: "Spring Boot", level: "Basic" }
    ],
    "Databases": [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Basic" },
      { name: "Prisma ORM", level: "Intermediate" }
    ],
    "Cloud, DevOps & Networking": [
      { name: "Google Cloud Platform", level: "Compute Engine, Cloud Run, Cloud SQL" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes / GKE", level: "Basic" },
      { name: "CI/CD", level: "GitHub Actions" },
      { name: "Reverse Proxy", level: "Nginx" },
      { name: "Secure Remote Access", level: "Tailscale (VPN)" }
    ],
    "IoT & Messaging": [
      { name: "ThingsBoard", level: "Dashboards, Rule Chains, Telemetry" },
      { name: "MQTT", level: "Edge-to-cloud telemetry" },
      { name: "RabbitMQ", level: "Basic" },
      { name: "Redis", level: "Basic" }
    ],
    "AI/ML & Signal Processing": [
      { name: "PyTorch / TensorFlow", level: "Intermediate" },
      { name: "scikit-learn", level: "Intermediate" },
      { name: "Computer Vision", level: "OpenCV, YOLOv8, EasyOCR/Tesseract" },
      { name: "Audio DSP", level: "librosa, MFCC, FFT" },
      { name: "Edge Inference", level: "ONNX export, on-device deployment" }
    ],
    "Embedded Systems": [
      { name: "Raspberry Pi", level: "Advanced" },
      { name: "Arduino / ESP8266", level: "Intermediate" },
      { name: "GPIO + sensors", level: "Intermediate" },
      { name: "MATLAB / Simulink", level: "Intermediate" }
    ],
    "Tools": [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "VS Code / IntelliJ", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Jira", level: "Intermediate" }
    ]
  },

  projects: [
    {
      id: "neocare-fyp",
      title: "NeoCare (FYP) - Smart Infant Incubator Monitoring & Decision Support System",
      description: "End-to-end edge–cloud monitoring platform developed for neonatal incubator supervision. A Raspberry Pi 4B+ runs on-device ML (jaundice detection, cry detection/classification, incubator LCD reading) and an NTE rule engine to recommend safe temperature ranges. Telemetry is published via MQTT to ThingsBoard CE and visualised through role-based web dashboards (clinical, admin, parent) plus a Flutter NICU mobile app (clinicians and parents). The cloud side is deployed on Google Cloud (ThingsBoard CE hosted on a VM, with supporting services on Cloud Run and Cloud SQL) and exposed through an Nginx reverse proxy. Live video is streamed from the edge device and accessed remotely through a VPN-secured path (Tailscale), enabling clinicians and parents to view authorised feeds without opening the Pi directly to the public internet. Key system features include: real-time alarms for NTE deviations, jaundice/cry events with confidence scores, per-infant history and charts, device/edge service management via the admin portal, and a foundation to scale from a single incubator to multiple monitored units. We obtained promising quantitative results: jaundice detection 93.0% accuracy (97.6% specificity), cry detection 97.8% accuracy, cry classification 92.9% test accuracy, LCD reader 99.3% mAP@50, and NTE recommendations 100% accuracy on evaluated cases.",
      image: "/assets/neocare.png",
      github: "https://github.com/sahanrashmikaslk/incubator_monitoring_with_thingsboard_integration",
      links: [
        { label: "Edge Services (Pi)", url: "https://github.com/sahanrashmikaslk/Neonatal_incubator_edgeDevice_PI-services" },
        { label: "Display Simulator", url: "https://github.com/sahanrashmikaslk/Neonatal_incubator_displaySimulator" },
        { label: "ThingsBoard Backup", url: "https://github.com/sahanrashmikaslk/Neonatal_incubator_monitoring_system_TB" },
        { label: "Jaundice Model", url: "https://github.com/sahanrashmikaslk/Neonatal_jaundice_detection" },
        { label: "LCD Display Reader", url: "https://github.com/sahanrashmikaslk/Neonatal_incubator_displayReader" },
        { label: "NTE Engine", url: "https://github.com/sahanrashmikaslk/NTE_recommendation_engine" },
        { label: "Cry Model", url: "https://github.com/HasiniPrasadika/Cry-Detection-Classification-Model" },
        { label: "NICU Mobile App", url: "https://github.com/HasiniPrasadika/NICU_Mobile_App" }
      ],
      technologies: ["Raspberry Pi 4B+", "Edge AI", "MQTT", "ThingsBoard CE", "GCP (Cloud Run/SQL/VM)", "Tailscale", "Nginx", "Live Streaming", "Python", "FastAPI", "React", "Flutter", "YOLOv8", "MobileNetV3"],
      featured: true,
      category: "Final Year Project"
    },
    {
      id: "baby-cry-detection-classification",
      title: "Baby Cry Detection & Classification - Edge AI System for Neonatal Monitoring",
      description: "Real-time edge computing system deployed on Raspberry Pi for intelligent baby cry detection and classification, featuring a two-stage ML pipeline: YAMNet-based detection (97.8% accuracy, Threshold: 0.212) followed by ensemble classification (93% accuracy) into 5 cry types (belly pain, burping, discomfort, hungry, tired). The edge device performs FFT-based audio analysis (300-2000 Hz cry frequency range) with automatic 5-second recording, resampling from 48kHz to 16kHz, and local inference using YAMNet embeddings (2048-dim) + Logistic Regression for detection, then 111 audio features (MFCC, Chroma, Mel, Spectral) + Ensemble Voting (RF+SVM+KNN+XGBoost) for classification. Integrated with ThingsBoard IoT platform via MQTT for real-time telemetry publishing (cry status, audio levels, classification results, confidence scores). FastAPI classification service (Port 8890) handles HTTP requests with confidence thresholding (0.6), while HTTP API (Port 8888) provides monitoring and control endpoints. Developed as part of final-year research project 'Development of an Automated Condition Controlling and Monitoring System for an Infant Incubator'.",
      image: "/assets/cry_detection_architecture.png", 
      github: "https://github.com/sahanrashmikaslk/Cry-Detection-Classification-Model",
      technologies: ["Python", "Raspberry Pi", "Edge Computing", "YAMNet", "TensorFlow", "Ensemble Learning", "FastAPI", "PyAudio", "Librosa", "FFT Analysis", "IoT", "MQTT", "ThingsBoard", "Real-time Audio Processing"],
      featured: true,
      category: "Edge AI/IoT"
    },
    {
      id: "neonatal-jaundice-detection",
      title: "Neonatal Jaundice Detection - Dual-Head Multi-Task Learning System",
      description: "State-of-the-art dual-head multi-task learning system for detecting neonatal jaundice from infant images. Features a MobileNetV3-Small backbone with two specialized classification heads: jaundice detection (Normal/Jaundice binary classification) and image quality assessment. Trained on Kaggle dataset (~200 jaundice, ~560 normal cases) achieving exceptional performance: Accuracy 93.0%, Sensitivity 81.3%, Specificity 97.6%, ROC AUC 97.4%. The system simultaneously performs jaundice detection and learned quality assessment, providing transparent confidence scoring even under challenging lighting conditions. Includes comprehensive training pipeline with early stopping, threshold optimization, and ONNX export. Streamlit application features multi-input support (upload/webcam/live feed), quality-aware predictions, and real-time analysis. Developed as part of final-year research project 'Development of an Automated Condition Controlling and Monitoring System for an Infant Incubator'.",
      image: "/assets/jaundice-detection architecture.jpg", 
      github: "https://github.com/sahanrashmikaslk/Neonatal_jaundice_detection",
      technologies: ["Python", "PyTorch", "MobileNetV3", "Multi-Task Learning", "Deep Learning", "Computer Vision", "Streamlit", "ONNX", "Medical AI"],
      featured: true,
      category: "Medical AI/Computer Vision"
    },
    {
      id: "neonatal-incubator-display-reader",
      title: "Neonatal Incubator Display Reader - YOLOv8 & OCR Pipeline",
      description: "End-to-end pipeline to automatically detect and read neonatal incubator display regions using YOLOv8 object detection, followed by OCR (EasyOCR) to extract vital parameters like temperature, humidity, and oxygen levels. Dataset collected on-site at National Hospital Galle NICU (250+ live incubator display images) and manually labeled in Label Studio for YOLO training. Achieved high model performance: Precision 0.994, Recall 0.992, mAP@0.5: 0.993. Features include real-time validation with range checks, decimal correction, confidence filtering, and a Streamlit UI for live webcam monitoring, batch processing, and telemetry logging. Developed as part of final-year research project 'Development of an Automated Condition Controlling and Monitoring System for an Infant Incubator'.",
      image: "/assets/lcd_ocr.png", 
      github: "https://github.com/sahanrashmikaslk/Neonatal_incubator_displayReader",
      technologies: ["Python", "YOLOv8", "EasyOCR", "Computer Vision", "Deep Learning", "Streamlit", "OpenCV", "PyTorch", "CUDA"],
      featured: true,
      category: "Computer Vision/Healthcare"
    },
    {
      id: "ai-network-analysis",
      title: "AINet - AI-Powered Network Anomaly Detection System",
      description: "An intelligent enterprise-grade network monitoring and anomaly detection system that leverages AI to analyze network metrics and detect unusual patterns across infrastructure. Built with LangGraph and LangChain for sophisticated analysis workflows, featuring real-time monitoring, automated analysis, and actionable insights. The system includes distributed architecture with lightweight agents on Linux machines, centralized analysis server with FastAPI, AI-powered anomaly detection using statistical methods and machine learning, interactive dashboard with real-time alerts, and comprehensive risk assessment with automated recommendations. Supports scalable deployment handling hundreds of monitored machines with secure API key authentication.",
      image: "/assets/AINet.png",
      github: "https://github.com/sahanrashmikaslk/AI_Network_Analysis",
      technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "SQLAlchemy", "AI/ML", "Network Monitoring", "Anomaly Detection", "Real-time Analytics", "Distributed Systems"],
      featured: true,
      category: "AI/Network Analysis"
    },

    {
      id: "online-medicine-delivery",
      title: "Online Medicine Delivery System - Microservices Architecture",
      description: "A comprehensive enterprise-grade online medicine delivery platform built with modern microservices architecture, deployed on Google Cloud Platform (GCP). The system features 6 microservices orchestrated with Kubernetes (GKE), utilizing event-driven communication through RabbitMQ, Redis caching for high performance, and PostgreSQL for data persistence. Implements secure authentication with Google OAuth 2.0, automated CI/CD pipeline with GitHub Actions, load balancing, and horizontal auto-scaling. The architecture includes API Gateway for request routing, real-time order tracking, email notifications, and admin dashboard with comprehensive monitoring and health checks.",
      image: "/assets/home_view.png",
      github: "https://github.com/sahanrashmikaslk/online-medicine-delivery",
      technologies: ["Microservices", "Kubernetes", "GCP", "GKE", "Docker", "Load Balancing", "CI/CD", "Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ"],
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
