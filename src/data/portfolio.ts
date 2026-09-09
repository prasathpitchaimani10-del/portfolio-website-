import { SkillCategory, EducationItem, CertificationItem, InterestItem } from '../types';

export const PERSONAL_INFO = {
  name: 'PRASATH P',
  initials: 'PP',
  title: 'BCA Student | Aspiring Software Developer | Web Technology Enthusiast',
  shortBio: 'I’m a third-year BCA student passionate about software development, web technologies, programming, and building practical digital solutions.',
  tagline: 'Curious to Learn. Passionate to Build. Ready to Make an Impact.',
  location: 'Trichy, Tamil Nadu, India',
  phone: '7708625964',
  email: 'prasathpitchaimani10@gmail.com',
  githubUrl: 'https://github.com/prasathpitchaimani10-del?tab=repositories',
  githubUsername: 'prasathpitchaimani10-del',
  educationSummary: 'National College, Trichy • BCA 2024–2027',
  currentStatus: 'Currently learning & building',
  languages: ['Tamil', 'English'],
};

export const ABOUT_DATA = {
  heading: 'More Than a Resume',
  paragraphs: [
    'I am a third-year Bachelor of Computer Applications (BCA) student at National College, with a strong interest in software development, web technologies, and programming.',
    'I enjoy learning new technologies, solving problems, and turning ideas into practical solutions. Through projects, certifications, hackathon participation, and hands-on learning, I am continuously developing both my technical and collaborative skills.',
    'I believe every challenge is an opportunity to learn something new, and my goal is to grow into a skilled software developer who builds useful, reliable, and user-focused digital solutions.',
  ],
  currently: {
    role: 'BCA Student',
    institution: 'National College',
    timeline: '2024 → 2027',
    stage: 'Third Year',
  },
  focusAreas: [
    { title: 'Software Development', desc: 'Crafting structured, maintainable code' },
    { title: 'Web Technologies', desc: 'Responsive interfaces & clean semantics' },
    { title: 'Programming', desc: 'Algorithmic thinking & fundamentals' },
    { title: 'AI Exploration', desc: 'Practical concepts & productivity tools' },
  ],
  personalTraits: [
    'Curious',
    'Friendly',
    'Ambitious',
    'Technical',
    'Creative',
    'Reliable',
    'Continuous learner',
    'Problem solver',
    'Team player',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    category: 'PROGRAMMING',
    description: 'Core languages used for building applications, understanding logic, and data handling',
    skills: [
      { name: 'C', description: 'System-level fundamentals & memory model', iconName: 'Terminal' },
      { name: 'C++', description: 'Object-oriented programming & standard library', iconName: 'Cpu' },
      { name: 'JavaScript', description: 'Interactive web applications & event-driven code', iconName: 'FileCode' },
      { name: 'Visual Basic', description: 'Desktop GUI development & event architecture', iconName: 'Layout' },
      { name: 'Data Structures & Algorithms', description: 'Arrays, linked structures, sorting & search logic', iconName: 'Network' },
    ],
  },
  {
    title: 'Web Technologies',
    category: 'WEB',
    description: 'Building clean, semantic, and modern user experiences for the web',
    skills: [
      { name: 'HTML', description: 'Semantic structure, accessibility, and modern standards', iconName: 'Code' },
      { name: 'CSS', description: 'Responsive styling, flexbox, grid, and layout design', iconName: 'Palette' },
    ],
  },
  {
    title: 'Developer Tools',
    category: 'TOOLS',
    description: 'Workflow efficiency, version control, and everyday developer environments',
    skills: [
      { name: 'Git', description: 'Version control, branch workflows, and commit history', iconName: 'GitBranch' },
      { name: 'VS Code', description: 'Primary editor setup, debugging tools, and extensions', iconName: 'Laptop' },
    ],
  },
  {
    title: 'Core Concepts',
    category: 'CORE CONCEPTS',
    description: 'Computer science principles that govern robust software design',
    skills: [
      { name: 'Object-Oriented Programming', description: 'Encapsulation, inheritance, polymorphism, and abstraction', iconName: 'Boxes' },
      { name: 'Data Structures', description: 'Linear and non-linear memory arrangements', iconName: 'Layers' },
    ],
  },
  {
    title: 'Soft Skills & Mindset',
    category: 'SOFT SKILLS',
    description: 'How I collaborate with peers and approach day-to-day engineering challenges',
    skills: [
      { name: 'Teamwork', description: 'Collaborating actively in development groups', iconName: 'Users' },
      { name: 'Problem Solving', description: 'Breaking complex problems into solvable steps', iconName: 'Puzzle' },
      { name: 'Collaboration', description: 'Clear communication and active listening', iconName: 'MessageSquare' },
      { name: 'Continuous Learning', description: 'Daily curiosity to explore new tools and methods', iconName: 'Sparkles' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science & Software Applications',
    institution: 'National College',
    period: '2024 — 2027',
    status: 'Currently pursuing Third Year',
    description:
      'Rigorous academic curriculum covering programming fundamentals, database concepts, data structures, software engineering, and web development principles.',
    highlights: [
      'Comprehensive study of C, C++, and Object-Oriented paradigms',
      'Foundation in data structures, algorithms, and computational thinking',
      'Active team project work and technology exploration',
      'Trichy, Tamil Nadu, India',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-01',
    title: 'IBM SkillBuild – Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillBuild',
    year: '2026',
    description: 'Developed foundational knowledge of Artificial Intelligence and related concepts.',
    focusAreas: ['AI Principles', 'Machine Learning Concepts', 'Ethical AI Fundamentals'],
  },
  {
    id: 'cert-02',
    title: 'IBM SkillBuild – FITT Formation: AI Tools for Jobs',
    issuer: 'IBM SkillBuild / FITT',
    description: 'Gained exposure to AI-powered tools and their practical applications for career and workplace productivity.',
    focusAreas: ['Workplace AI Tools', 'Workflow Automation', 'Productivity Enhancement'],
  },
];

export const HACKATHON_DATA = {
  title: 'Smart India Hackathon Participation',
  badge: 'National Innovation Initiative',
  role: 'Development Team Member',
  description:
    'Participated in Smart India Hackathon as part of a development team and collaborated on designing and building a functional chatbot prototype.',
  highlights: [
    {
      title: 'Team Collaboration',
      description: 'Worked synchronously with fellow teammates, dividing frontend design and query routing logic.',
      icon: 'Users',
    },
    {
      title: 'Problem Solving',
      description: 'Addressed real-world communication hurdles and designed conversational flow states.',
      icon: 'Lightbulb',
    },
    {
      title: 'Prototype Development',
      description: 'Turned the conceptual idea into an interactive working chatbot proof-of-concept under time limits.',
      icon: 'Workflow',
    },
  ],
  prototypeArchitecture: [
    { step: '01', title: 'Intent Mapping', detail: 'Identified user prompts and structured response trees' },
    { step: '02', title: 'Interface UI', detail: 'Created responsive chat bubbles & prompt suggestions' },
    { step: '03', title: 'Team Sync', detail: 'Integrated frontend components with prototype logic' },
  ],
};

export const INTERESTS_DATA: InterestItem[] = [
  {
    title: 'Software Development',
    category: 'Core Craft',
    description: 'Building practical applications and improving programming skills.',
    details: 'Excited by the process of writing well-structured code, understanding algorithmic trade-offs, and building software that genuinely helps users accomplish daily tasks.',
    keyTopics: ['C / C++', 'Code Structure', 'Algorithm Efficiency', 'Software Design'],
  },
  {
    title: 'Web Development',
    category: 'Frontend & UI',
    description: 'Creating clean, responsive, and user-friendly web experiences.',
    details: 'Passionate about modern responsive web design, semantic HTML, tactile CSS interactions, and making digital interfaces feel effortless and intuitive on any screen.',
    keyTopics: ['Responsive Design', 'HTML5 / CSS3', 'JavaScript Interactions', 'Accessible UI'],
  },
  {
    title: 'Artificial Intelligence',
    category: 'Emerging Tech',
    description: 'Exploring AI concepts and understanding how intelligent technology can solve real-world problems.',
    details: 'Deepening foundational AI knowledge through IBM SkillBuild courses and experimenting with how AI tools can enhance productivity and empower software solutions.',
    keyTopics: ['AI Fundamentals', 'Chatbot Architectures', 'Productivity Tooling', 'Practical Applications'],
  },
  {
    title: 'Continuous Learning',
    category: 'Growth Mindset',
    description: 'Learning new tools, technologies, and development practices.',
    details: 'Constantly curious. Actively reading documentation, participating in hackathons, exploring open source repositories, and testing new programming paradigms.',
    keyTopics: ['Version Control (Git)', 'Self-Paced Courses', 'Hands-on Coding', 'Problem Solving'],
  },
];

export const CAREER_GOAL_DATA = {
  heading: "Where I'm Headed",
  quote: {
    line1: 'Learn continuously.',
    line2: 'Build intentionally.',
    line3: 'Grow together.',
  },
  content:
    'My goal is to grow as a software developer by transforming ideas into meaningful digital solutions while continuously improving my technical and problem-solving abilities.',
  aspirations: [
    {
      title: 'Solid Technical Foundation',
      text: 'Strengthening programming fundamentals in data structures, algorithms, and modular design through hands-on practice.',
    },
    {
      title: 'Impactful Digital Products',
      text: 'Contributing to real-world software products that solve practical problems for people, teams, and communities.',
    },
    {
      title: 'Collaborative Engineering',
      text: 'Learning from experienced senior engineers, contributing constructively to team goals, and fostering open knowledge sharing.',
    },
  ],
};
