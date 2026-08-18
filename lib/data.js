// ============================================================
// All portfolio content lives here. Edit this file to update
// your name, bio, projects, experience, and skills.
// ============================================================

export const profile = {
  name: 'Chetan Narayan Sharma',
  tagline: 'Innovator and CS (AI/ML) candidate with strong expertise in AI model development, cloud integration, and cross-platform solutions.',
  intro:
    'Double clicking the folders on the desktop will reveal my journey through academia, professional experiences, technical projects, and acquired skills.',
  systemLabel: 'System 7.5',
  systemSub: 'PowerPC',
  // Contact handles (added)
  github: 'https://github.com/narayanChetan',
  linkedin: 'https://www.linkedin.com/in/chetan-narayan-sharma-a9192b278/',
};

export const projects = [
  {
    title: 'Smart Hearing Glasses',
    stack: 'ESP32, Python, Arduino',
    icon: 'hearing',
    bullets: [
      'Designing an end-to-end accessibility wearable using ESP32 microcontrollers, Python, and Arduino tools to assist individuals with hearing and communication limitations.',
      'Building live language translation with real-time subtitles to help users communicate seamlessly with anyone around them.',
      'Integrating an AI layer that analyzes conversational context to suggest ice-breaking prompts, discussion topics, and key talking points during meetings and social interactions.',
    ],
    link: '#',
  },
  {
    title: 'Email Automation Website',
    stack: 'HTML, CSS, JavaScript, Python Flask',
    icon: 'mail',
    bullets: [
      'Built a responsive email automation website using HTML, CSS, and JavaScript on the frontend with a Python Flask backend.',
      'Implemented SMTP-based bulk transactional email delivery with custom Python scripts for single-click execution.',
    ],
    link: '#',
  },
  {
    title: 'Discord Music and Chat Bot',
    stack: 'Python, discord.py, yt-dlp',
    icon: 'music_note',
    bullets: [
      'Engineered a Python-based Discord bot to scrape, parse, stream, and manage media through real-time user commands and API calls.',
      'Used the yt-dlp library for locating and retrieving music/media, and the discord.py audio library for streaming and playback control.',
    ],
    link: '#',
  },
  {
    title: 'Coaching Management System',
    stack: 'HTML, CSS, JavaScript, Django',
    icon: 'groups',
    bullets: [
      'Developed a centralized web platform using HTML, CSS, and JavaScript on the frontend with a Django backend.',
      'Built an all-in-one system to manage student and teacher profiles, courses, batch allocation, attendance, and payments in a single, easy-to-use website.',
    ],
    link: '#',
  },
  {
    title: 'Live Audio Visualizer',
    stack: 'JavaScript, Web Audio API',
    icon: 'graphic_eq',
    bullets: [
      'Built a real-time audio visualization tool that renders dynamic waveform and frequency graphics synced to live audio input.',
    ],
    link: '#',
  },
  {
    title: 'AEGIS – AI Assistant',
    stack: 'AI, Task Automation, Conversational UX',
    icon: 'smart_toy',
    bullets: [
      'Developed an AI-powered personal assistant with conversational and task-automation capabilities.',
    ],
    link: '#',
  },
];

export const experience = [
  {
    role: 'Automation Lead',
    period: '1 Year – Present',
    org: 'Intellia Society',
    bullets: [
      'Workflow Scripting: Architected custom Python automation scripts to streamline outreach workflows and system integrations.',
      'Credential System: Programmed automated QR code and certificate generation scripts, and built an email automation website, to secure and accelerate credential distribution.',
    ],
  },
  {
    role: 'Creative Lead (Part-Time)',
    period: '2 Years – Present',
    org: 'Rooh We Care',
    bullets: [
      'Social Media & Marketing: Managed social media pages and designed digital campaigns to maximize engagement.',
      'Marketing Analytics: Analyzed marketing performance data using Power BI and Tableau to inform outreach strategy.',
    ],
  },
  {
    role: 'Senior Designer',
    period: '6 Months',
    org: 'Siddhi Creative Wallet',
    bullets: [
      'Organized large operational assets and built UI/UX collateral with Premiere Pro and Figma.',
    ],
  },
];

export const skillGroups = [
  {
    id: 'programming',
    label: 'Backend & Languages',
    heading: 'Programming Languages & Backend',
    skills: [
      { name: 'Python', level: 'Expert Level', pct: 95, icon: 'data_object' },
      { name: 'JavaScript / Node.js', level: 'Advanced Level', pct: 85, icon: 'javascript' },
      { name: 'SQL / PostgreSQL', level: 'Proficient', pct: 75, icon: 'database' },
      { name: 'C++', level: 'Intermediate', pct: 55, icon: 'memory' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    heading: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow / Keras', level: 'Advanced Level', pct: 85, icon: 'hub' },
      { name: 'PyTorch', level: 'Proficient', pct: 75, icon: 'psychology' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Data',
    heading: 'Automation Tools & Data',
    skills: [
      { name: 'Docker & Kubernetes', level: 'Advanced Level', pct: 85, icon: 'dock' },
    ],
  },
];

export const certifications = [
  { name: 'MongoDB: Certified Developer', meta: 'Link', icon: 'storage' },
  { name: 'Accenture: Software Engineer Job Simulation', meta: 'Link', icon: 'work' },
  { name: 'Walmart USA: Advanced Software Engineering Simulation', meta: 'Link', icon: 'shopping_bag' },
  { name: 'Deloitte: Data Analytics Job Simulation', meta: 'Link', icon: 'analytics' },
  { name: 'Anthropic: AI Capabilities and Limitations', meta: 'Link', icon: 'psychology' },
  { name: 'Tata: GenAI Powered Data Analytics Job Simulation', meta: 'Link', icon: 'bar_chart' },
  { name: 'NASA ARSET', meta: 'Certificate ID: 5799127325CN', icon: 'rocket_launch' },
  { name: 'AWS: No-Code Machine Learning and Generative AI Training', meta: 'Link', icon: 'cloud_done' },
  { name: 'Google: Gemini Certified Student', meta: 'Link', icon: 'school' },
];

export const desktopFolders = [
  { key: 'education', label: 'Education', icon: 'folder', href: '/experience' },
  { key: 'projects', label: 'Projects', icon: 'folder', href: '/projects' },
  { key: 'experience', label: 'Experience', icon: 'folder', href: '/experience' },
  { key: 'skills', label: 'Skills', icon: 'folder', href: '/skills' },
];

export const navItems = [
  { key: 'about', label: 'About', icon: 'person', href: '/' },
  { key: 'projects', label: 'Projects', icon: 'folder_open', href: '/projects' },
  { key: 'skills', label: 'Skills', icon: 'star', href: '/skills' },
  { key: 'experience', label: 'Exp', icon: 'history', href: '/experience' },
  { key: 'terminal', label: 'Terminal', icon: 'terminal', href: '/terminal' },
  { key: 'guestbook', label: 'Guestbook', icon: 'reviews', href: '/guestbook' },
];
