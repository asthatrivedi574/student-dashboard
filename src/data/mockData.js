export const studentProfile = {
  name: "Astha",
  lastName: "Trivedi",
  fullName: "Astha Trivedi",
  role: "Grade 11 • Robotics & CS Major",
  studentId: "STU-88241",
  email: "astha.trivedi@smartech.edu",
  avatar: "/images/sophia.jpg",
  gpa: "3.92",
  rank: "#3 in Class",
  status: "Active Student",
  school: "Smartech Academy of Engineering"
};

export const linkedTeachers = [
  {
    id: "t1",
    name: "Olivia Miller",
    role: "mentor",
    subject: "Robotics & Artificial Intelligence",
    email: "olivia.miller@smartech.edu",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    status: "online",
    unread: 1,
    officeHours: "Mon, Wed 14:00 - 16:00",
    bio: "Senior Robotics Researcher and AI Mentor with 8+ years guiding student competitive teams."
  },
  {
    id: "t2",
    name: "Liam Garcia",
    role: "teacher",
    subject: "Electronics & Microcontroller Circuits",
    email: "liam.garcia@smartech.edu",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    status: "online",
    unread: 0,
    officeHours: "Tue, Thu 10:00 - 12:00",
    bio: "Hardware prototyping instructor, Arduino & Raspberry Pi enthusiast."
  },
  {
    id: "t3",
    name: "Jackson Lopez",
    role: "lecturer",
    subject: "Advanced C++ & Algorithm Design",
    email: "jackson.lopez@smartech.edu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    status: "offline",
    unread: 2,
    officeHours: "Friday 15:00 - 18:00",
    bio: "Computer Science Lecturer specializing in embedded systems and real-time computing."
  }
];

export const upcomingEvents = [
  {
    id: "e1",
    title: "The main event in your life 'Robot Fest'...",
    fullTitle: "The Main Event in Your Life 'Robot Fest 2025'",
    date: "22 May 2025",
    time: "13:00",
    duration: "4 hours",
    location: "Main Innovation Arena & Live Stream",
    category: "Competition",
    avatar: "/images/events.jpg",
    description: "Annual regional robotics championship featuring battle bots, obstacle autonomous rovers, and AI drone presentations. Astha's team is competing in Track 2!",
    registered: true,
    speaker: "Dr. Ethan Vance & Robotics Committee"
  },
  {
    id: "e2",
    title: "Webinar of new tools in Minecraft",
    fullTitle: "Webinar: Educational Tools & Scripting in Minecraft Education",
    date: "31 May 2025",
    time: "17:00",
    duration: "1.5 hours",
    location: "Discord Stage & Zoom Virtual Hall",
    category: "Workshop",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    description: "Hands-on session exploring python scripting, block-based automation, and custom educational mods built for interactive classroom STEM simulations.",
    registered: false,
    speaker: "Alex Rivera (Lead Minecraft STEM Developer)"
  },
  {
    id: "e3",
    title: "STEM Innovation Hackathon",
    fullTitle: "48-Hour High School STEM Innovation Hackathon",
    date: "05 Jun 2025",
    time: "09:00",
    duration: "2 days",
    location: "Smartech Maker Space",
    category: "Hackathon",
    avatar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=150&auto=format&fit=crop&q=80",
    description: "Collaborative prototype sprint building hardware-software solutions for urban sustainability.",
    registered: true,
    speaker: "Hackathon Mentorship Board"
  }
];

export const scheduleAgenda = [
  {
    id: "s1",
    day: 18,
    dateStr: "18 May 2025",
    title: "Robotics lesson",
    time: "19:30",
    room: "Lab 302 - Maker Wing",
    instructor: "Olivia Miller",
    topic: "Tread Traction & PID Motor Control",
    color: "#8e7087"
  },
  {
    id: "s2",
    day: 19,
    dateStr: "19 May 2025",
    title: "Electronics lesson",
    time: "16:00",
    room: "Hardware Lab B",
    instructor: "Liam Garcia",
    topic: "Oscilloscope Diagnostics & Signal Conditioning",
    color: "#2dd4bf"
  },
  {
    id: "s3",
    day: 20,
    dateStr: "20 May 2025",
    title: "C++ lesson",
    time: "17:30",
    room: "Virtual Room 4",
    instructor: "Jackson Lopez",
    topic: "Pointers, Dynamic Memory & Embedded C++ STL",
    color: "#f59e0b"
  },
  {
    id: "s4",
    day: 22,
    dateStr: "22 May 2025",
    title: "Robot Fest Prep & Check-in",
    time: "11:00",
    room: "Auditorium Main Stage",
    instructor: "Olivia Miller",
    topic: "Pre-competition sensor calibration and battery testing",
    color: "#ff758f"
  },
  {
    id: "s5",
    day: 24,
    dateStr: "24 May 2025",
    title: "Physics of Mechanics",
    time: "14:00",
    room: "Lecture Hall A",
    instructor: "Dr. Robert Chen",
    topic: "Torque, gear ratios, and rotational inertia",
    color: "#a855f7"
  }
];

export const myProjects = [
  {
    id: "p1",
    code: "Homework 15",
    title: "Autonomous Rover Bot",
    image: "/images/project15.jpg",
    grade: "98/100",
    status: "Completed & Graded",
    subject: "Robotics & AI",
    date: "12 May 2025",
    instructor: "Olivia Miller",
    description: "Heavy-duty dual-tread rover featuring ultrasonic proximity sensors, EV3 programmable core, and custom obstacle navigation algorithms.",
    skills: ["Lego EV3", "Ultrasonic Ping", "Autonomous Navigation", "Python"],
    feedback: "Outstanding work! The edge detection algorithm smoothly handles 90-degree corner obstacles without stalling."
  },
  {
    id: "p2",
    code: "Homework 16",
    title: "3D Printed Robotic Arm & Gripper",
    image: "/images/project16.jpg",
    grade: "95/100",
    status: "Completed & Graded",
    subject: "Electronics 101",
    date: "16 May 2025",
    instructor: "Liam Garcia",
    description: "4-DOF articulated robotic arm driven by Arduino Uno, dual SG90 micro-servos, breadboard power regulator, and gear clamp mechanism.",
    skills: ["Arduino", "PWM Servos", "Circuit Prototyping", "Kinematics"],
    feedback: "Very clean cable management and excellent servo response calibration."
  }
];

export const statCardsData = {
  attendance: {
    title: "Attendance",
    percentage: 60,
    color: "#ff758f", // Pink
    bgGradient: "from-pink-500/20 to-rose-500/20",
    badge: "Good Standing",
    details: "18 out of 30 classes attended this term. No unexcused absences.",
    trend: "+4% from last month",
    breakdown: [
      { subject: "Robotics", rate: "95%" },
      { subject: "Electronics", rate: "90%" },
      { subject: "C++ Programming", rate: "80%" },
      { subject: "Calculus", rate: "70%" },
      { subject: "Physics", rate: "65%" }
    ]
  },
  homework: {
    title: "Homework",
    percentage: 90,
    color: "#2dd4bf", // Teal
    bgGradient: "from-teal-500/20 to-emerald-500/20",
    badge: "Exemplary",
    details: "27 of 30 assignments submitted on time with top marks.",
    trend: "+8% this semester",
    breakdown: [
      { code: "HW 16", title: "Robotic Gripper", score: "95%" },
      { code: "HW 15", title: "Rover Bot", score: "98%" },
      { code: "HW 14", title: "Binary Search Trees", score: "100%" },
      { code: "HW 13", title: "PWM Signal Modulation", score: "88%" }
    ]
  },
  rating: {
    title: "Rating",
    percentage: 75,
    color: "#fbbf24", // Gold
    bgGradient: "from-amber-500/20 to-yellow-500/20",
    badge: "Top 10%",
    details: "Overall academic index rating across practical and theoretical exams.",
    trend: "Consistent top quartile",
    breakdown: [
      { category: "Practical Labs", score: "96%" },
      { category: "Coding Challenges", score: "92%" },
      { category: "Theory Quizzes", score: "84%" },
      { category: "Class Participation", score: "88%" }
    ]
  }
};

export const sampleChatMessages = {
  t1: [
    { id: 1, sender: "Olivia Miller", time: "10:15 AM", text: "Hi Astha! Have you finalized the motor sync script for Robot Fest?", isMe: false },
    { id: 2, sender: "Astha Trivedi", time: "10:20 AM", text: "Yes Ms. Miller! I tested Homework 15 rover with the dual ultrasonic sensors and it's turning smoothly without drift.", isMe: true },
    { id: 3, sender: "Olivia Miller", time: "10:22 AM", text: "Brilliant! Make sure to bring an extra LiPo battery pack to Lab 302 on Monday.", isMe: false }
  ],
  t2: [
    { id: 1, sender: "Liam Garcia", time: "Yesterday", text: "Hey Astha, your gripper servo calibration on HW 16 was top notch.", isMe: false },
    { id: 2, sender: "Astha Trivedi", time: "Yesterday", text: "Thank you Mr. Garcia! The PWM pulse width adjustment really reduced the jitter.", isMe: true }
  ],
  t3: [
    { id: 1, sender: "Jackson Lopez", time: "May 14", text: "Astha, remember that the C++ pointer quiz will cover custom smart pointer implementations.", isMe: false },
    { id: 2, sender: "Astha Trivedi", time: "May 14", text: "Got it, I'm reviewing std::unique_ptr reference counting notes right now.", isMe: true }
  ]
};

export const myClassesList = [
  {
    id: "c1",
    code: "CS-301",
    name: "Advanced Robotics & AI",
    instructor: "Olivia Miller",
    credits: 4,
    progress: 78,
    schedule: "Mon 19:30 • Lab 302",
    grade: "A (96%)",
    color: "#8e7087",
    modules: 12,
    completedModules: 9,
    description: "Hands-on robotics engineering covering sensor fusion, inverse kinematics, and autonomous pathfinding."
  },
  {
    id: "c2",
    code: "EE-204",
    name: "Electronics & Microcontrollers",
    instructor: "Liam Garcia",
    credits: 3,
    progress: 85,
    schedule: "Tue 16:00 • Hardware Lab B",
    grade: "A- (92%)",
    color: "#2dd4bf",
    modules: 10,
    completedModules: 8,
    description: "Circuit board design, power regulation, microcontroller peripherals, and sensor interfaces."
  },
  {
    id: "c3",
    code: "CS-202",
    name: "C++ Data Structures & Systems",
    instructor: "Jackson Lopez",
    credits: 4,
    progress: 68,
    schedule: "Wed 17:30 • Virtual Room 4",
    grade: "B+ (88%)",
    color: "#fbbf24",
    modules: 14,
    completedModules: 9,
    description: "High-performance memory management, pointers, custom template libraries, and graph traversal."
  },
  {
    id: "c4",
    code: "PHY-110",
    name: "Applied Mechanics & Dynamics",
    instructor: "Dr. Robert Chen",
    credits: 3,
    progress: 60,
    schedule: "Fri 14:00 • Hall A",
    grade: "B (84%)",
    color: "#ff758f",
    modules: 8,
    completedModules: 5,
    description: "Classical dynamics, torque calculations, rotational equilibrium, and structural load analysis."
  }
];

export const notificationsList = [
  {
    id: "n1",
    title: "Robot Fest registration confirmed",
    time: "10 mins ago",
    read: false,
    type: "event",
    detail: "You are registered for Track 2 (Autonomous Rover Challenge)."
  },
  {
    id: "n2",
    title: "Homework 16 graded: 95/100",
    time: "2 hours ago",
    read: false,
    type: "grade",
    detail: "Liam Garcia left a comment on your 3D Printed Robotic Arm submission."
  },
  {
    id: "n3",
    title: "Schedule reminder: Robotics at 19:30",
    time: "Yesterday",
    read: true,
    type: "reminder",
    detail: "Don't forget your EV3 controller and battery kit."
  }
];
