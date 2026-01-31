import React from 'react';
import { Home, User, FileText, BookOpen, Server, Mail, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { MenuItem, ResumeItem, PortfolioItem, ServiceItem, Testimonial, Skill } from './types';

// Re-export data from separate files
export { PORTFOLIO_ITEMS } from './portfolioData';
export { RESUME_EXPERIENCE } from './experienceData';

export const SOCIAL_LINKS = [
  { icon: <Twitter size={18} />, href: "#" },
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Instagram size={18} />, href: "#" },
  { icon: <Github size={18} />, href: "#" },
  { icon: <Linkedin size={18} />, href: "#" },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'hero', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'resume', label: 'Resume', icon: <FileText size={20} /> },
  // { id: 'portfolio', label: 'Portfolio', icon: <BookOpen size={20} /> },
  { id: 'services', label: 'Services', icon: <Server size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
];

export const RESUME_EDUCATION: ResumeItem[] = [
  {
    title: 'B.Eng (Computer Engineering)',
    subtitle: 'Mahanakorn University of Technology, Bangkok, Thailand',
    duration: '1997 - 2001',
    description: ['A Bachelor of Engineering (B.Eng.) in Electrical and Computer Engineering (ECE) is a 4 - year undergraduate program combining, typically, 127–149 credits of coursework in power systems, electronics, and computer science.', 'It prepares graduates for roles in AI, robotics, embedded systems, and telecommunications, often featuring capstone projects and specialized tracks']
  },
  {
    title: 'Electrical Power, Diploma Certificate',
    subtitle: 'Phitsanulok Technical College, Phitsanulok, Thailand',
    duration: '1994 - 1997',
    description: ['A Diploma in Electrical Power Engineering (typically 1–5 years) provides technical training in the design, installation, operation, and maintenance of power systems, covering areas like generation, transmission, distribution, and renewable energy.', 'Programs focus on practical skills, including troubleshooting, electrical machinery, safety compliance, and power system analysis for roles in utility, manufacturing, and engineering firms']
  }
];

export const RESUME_CERTIFICATES: ResumeItem[] = [
  {
    title: 'Certificate of IOS Application development',
    subtitle: 'International College King Mongkuts Institute of Technology Ladkrabang',
    duration: '', // No year period as requested
    description: ['To create an Apple distribution certificate, open Keychain Access, request a certificate from a certificate authority, and upload the CSR file.']
  },
  {
    title: 'Introduction to Microsoft ASP.Net',
    subtitle: 'Microsoft Approved Course',
    duration: '',
    description: ['Part of the .NET Platform: ASP.NET extends the .NET platform with tools and libraries specifically for web development. This means developers can leverage the vast .NET ecosystem and use languages like C#, F#, and Visual Basic to write both client-side and server-side code.']
  },
  {
    title: 'Certificate of Teacher Assistance',
    subtitle: 'Teacher assistance of C Langguage',
    duration: '',
    description: ['Department of Computer Engineering, Mahanakorn University of Technology']
  }
];

export const SERVICES: ServiceItem[] = [
  { icon: <BookOpen />, title: 'End-to-End Application Development', description: 'Designing and building both client-side and server-side components from scratch.' },
  { icon: <FileText />, title: 'Web & API Development', description: 'Creating RESTful APIs, microservices, and server-side logic using Node.js, PHP (Laravel), Java (Spring Boot), and Type Script' },
  { icon: <Server />, title: 'Front-End Development', description: 'Building responsive, interactive, and user-friendly interfaces using React, Vue.js, Angular, and Next.js.' },
  { icon: <BookOpen />, title: 'System Integration & Architecture', description: 'Designing complex system architectures and connecting third-party services.' },
  { icon: <FileText />, title: 'Database Design & Management', description: 'Managing relational and non-relational databases, including MySQL, PostgreSQL, MongoDB, and Firebase.' },
  { icon: <Server />, title: 'DevOps & Cloud Deployment', description: 'Managing CI/CD pipelines, Docker, Kubernetes, and cloud services (AWS, Google Cloud, Azure).' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Saul Goodman', role: 'Ceo & Founder', quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.', image: 'https://picsum.photos/id/1005/100/100' },
  { name: 'Sara Wilsson', role: 'Designer', quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.', image: 'https://picsum.photos/id/1011/100/100' },
];

export const PROFILE_DATA = {
  name: "Ratchapon Nuch-Opas",
  role: ["Fullstack Developer", "UI/UX Designer", "WebDeveloper", "Freelancer"],
  aboutShort: "I am a passionate UX/UI designer and web developer based in Bangkok, Thailand.",
  aboutLong: "Highly motivated recent graduate with a strong foundational knowledge in Full Stack Development, specializing in Angular, Node.js and modern JavaScript frameworks. Demonstrated ability to quickly design, develop, and debug robust web applications and mobile prototypes (Flutter). Eager to apply problem-solving skills and continuous learning aptitude to contribute immediately to challenging development projects. Unit Testing, Integration Testing, E2E Testing, Performance Testing, Security Testing, Accessibility Testing, Usability Testing, A/B Testing, Cross-Browser Testing, Mobile Testing, API Testing, Database Testing, Performance Testing, Security Testing, Accessibility Testing, Usability Testing, A/B Testing, Cross-Browser Testing, Mobile Testing, API Testing, Database Testing, UAT",
  email: "looklikelove@me.com",
  phone: "+66 61-524-6858",
  city: "Bangkok, Thailand",
  degree: "Master",
  freelance: "Available",
  website: "cv.365liveitup.com",
  age: "N/A",
  birthday: "14 June"
};