import { ResumeItem } from './types';

export const RESUME_EXPERIENCE: ResumeItem[] = [
  {
    title: 'Senior Graphic Design Specialist',
    subtitle: 'Experion, New York, NY',
    duration: '2019 - Present',
    description: [
      'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
      'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
      'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design'
    ],
    projects: [
      {
        projectName: "Brand Revolution 2024",
        client: "Experion HQ",
        framework: "Adobe CC, Figma, Cinema 4D",
        details: "Led the complete visual identity overhaul for the global brand, resulting in a 20% increase in brand recognition."
      },
      {
        projectName: "Client Analytics Dashboard",
        client: "Experion FinTech",
        framework: "Figma, React, Tailwind CSS",
        details: "Designed the UI/UX for a complex financial dashboard used by premium clients to track asset performance."
      },
      {
        projectName: "Marketing Automation System",
        client: "Internal Ops",
        framework: "Vue.js, Node.js",
        details: "Developed internal tools to streamline the production of marketing assets, reducing turnaround time by 40%."
      }
    ]
  },
  {
    title: 'Graphic Design Specialist',
    subtitle: 'Stepping Stone Advertising, New York, NY',
    duration: '2017 - 2018',
    description: [
      'Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).',
      'Managed up to 5 projects or tasks at a given time while under pressure',
      'Recommended and consulted with clients on the most appropriate graphic design'
    ],
    projects: [
      {
        projectName: "City Tourism Campaign",
        client: "NY Tourism Board",
        framework: "Adobe Illustrator, Photoshop",
        details: "Created a series of award-winning posters and digital ads promoting city landmarks."
      },
      {
        projectName: "Ecommerce Platform Redesign",
        client: "ShopEZ",
        framework: "Sketch, InVision",
        details: "Revamped the user journey for a major e-commerce retailer, improving checkout conversion by 15%."
      }
    ]
  },
  {
    title: 'Junior Web Designer',
    subtitle: 'ABC Corp, New York, NY',
    duration: '2015 - 2017',
    description: [
      'Designed internal applications for employee management.',
      'Collaborated with senior developers to implement UI designs.',
      'Participated in daily stand-up meetings and agile workflows.'
    ],
    projects: [
      {
        projectName: "Employee HR Portal",
        client: "ABC Corp HR",
        framework: "HTML5, CSS3, jQuery",
        details: "Assisted in the frontend development of the internal leave management system."
      },
      {
        projectName: "Corporate Newsletter Template",
        client: "Comms Team",
        framework: "MJML, HTML Email",
        details: "Designed responsive email templates ensuring compatibility across all major email clients."
      }
    ]
  },
  {
    title: 'Intern',
    subtitle: 'XYZ Studio, Rochester, NY',
    duration: '2014 - 2015',
    description: [
      'Assisted with basic graphic design tasks and asset preparation.',
      'Learned industry standard tools including Photoshop and Illustrator.',
      'Supported the team in delivering client projects on time.'
    ],
    projects: [
      {
        projectName: "Local Coffee Shop Menu",
        client: "Bean There",
        framework: "Adobe InDesign",
        details: "Designed print-ready menus and promotional flyers for a local startup."
      }
    ]
  }
];