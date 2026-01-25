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
  { id: 'portfolio', label: 'Portfolio', icon: <BookOpen size={20} /> },
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
    title: 'Master of Fine Arts & Graphic Design',
    subtitle: 'Rochester Institute of Technology, Rochester, NY',
    duration: '2015 - 2016',
    description: ['Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.', 'Eveniet sole quia optio itiner']
  },
  {
    title: 'Bachelor of Fine Arts & Graphic Design',
    subtitle: 'Rochester Institute of Technology, Rochester, NY',
    duration: '2010 - 2014',
    description: ['Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila']
  }
];

export const RESUME_CERTIFICATES: ResumeItem[] = [
  {
    title: 'Advanced React Patterns',
    subtitle: 'Frontend Masters',
    duration: '', // No year period as requested
    description: ['Advanced React hooks, context, and performance optimization techniques.']
  },
  {
    title: 'Full Stack Web Development',
    subtitle: 'Udemy',
    duration: '',
    description: ['Comprehensive course covering MERN stack development.']
  }
];

export const SERVICES: ServiceItem[] = [
  { icon: <BookOpen />, title: 'Lorem Ipsum', description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' },
  { icon: <FileText />, title: 'Dolor Sitema', description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata' },
  { icon: <Server />, title: 'Sed ut perspiciatis', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Saul Goodman', role: 'Ceo & Founder', quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.', image: 'https://picsum.photos/id/1005/100/100' },
  { name: 'Sara Wilsson', role: 'Designer', quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.', image: 'https://picsum.photos/id/1011/100/100' },
];

export const PROFILE_DATA = {
  name: "Ratchapon Nuch-Opas",
  role: ["Fullstack Developer", "UI/UX Designer", "WebDeveloper", "Freelancer"],
  aboutShort: "I am a passionate UX/UI designer and web developer based in Bangkok, Thailand.",
  aboutLong: "Highly motivated recent graduate with a strong foundational knowledge in Full Stack Development, specializing in Angular, Node.js and modern JavaScript frameworks. Demonstrated ability to quickly design, develop, and debug robust web applications and mobile prototypes (Flutter). Eager to apply problem-solving skills and continuous learning aptitude to contribute immediately to challenging development projects.",
  email: "looklikelove@me.com",
  phone: "+66 61-524-6858",
  city: "Bangkok, Thailand",
  degree: "Master",
  freelance: "Available",
  website: "cv.365liveitup.com",
  age: "N/A",
  birthday: "14 June"
};