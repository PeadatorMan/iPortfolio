import React from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  projectName: string;
  client: string;
  framework: string;
  details: string[]; // Changed to array of strings
  link?: string;     // Added optional link
}

export interface ResumeItem {
  title: string;
  subtitle: string;
  duration: string;
  description: string[];
  projects?: Project[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'app' | 'web' | 'card';
  image: string;
  description: string;
  links: { label: string; url: string }[];
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}