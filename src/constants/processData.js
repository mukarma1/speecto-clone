import {
  Users, TrendingUp, FileText, CheckCircle,
  Layout, Palette, Search, Map,
  Building2, Database, Layers, Braces, Network,
  Repeat, Code2,
  Component, GitMerge, Route as RouteIcon, ListChecks,
} from 'lucide-react';

export const processData = [
  {
    number: '01',
    color: '#2b6cff',
image: '/illustrations/developer.svg',
    title: 'Requirements Engineering',
    description:
      'Our meticulous and collaborative software development process delivers exceptional results, ensuring quality, reliability, and client satisfaction at every stage.',
    features: [
      { icon: Users, title: 'Elicitation', text: 'Identifying stakeholders and understanding their needs.' },
      { icon: TrendingUp, title: 'Analysis & Suggestions', text: 'We analyze requirements and suggest trending ideas and features.' },
      { icon: FileText, title: 'Document requirements', text: 'Document requirements in a clear and concise manner.' },
      { icon: CheckCircle, title: 'Verification & Validation', text: 'Checking requirements are correct and suitable for purpose.' },
    ],
  },
  {
    number: '02',
    color: '#ec4899',
image: '/illustrations/business.svg',

    title: 'Product Design',
    description:
      'Wireframing and UI/UX design to convey and refine ideas before development begins.',
    features: [
      { icon: Layout, title: 'Wireframing', text: 'Creating a basic visual outline of structure and features.' },
      { icon: Palette, title: 'UI/UX Design', text: 'Aesthetically pleasing and easy to use interfaces.' },
      { icon: Search, title: 'Technical Review', text: 'Evaluating practicality and implementation of design choices.' },
      { icon: Map, title: 'Roadmap', text: 'Strategic timeline, milestones and stages for the product.' },
    ],
  },
  {
    number: '03',
    color: '#8b5cf6',
image: '/illustrations/ai-tech.png',

    title: 'System Design',
    description:
      'Creating a high-level overview of system structure to ensure scalability and performance.',
    features: [
      { icon: Building2, title: 'Architectural Design', text: 'High-level overview ensuring scalability and modularity.' },
      { icon: Database, title: 'Database Design', text: 'Efficient, scalable data storage solutions.' },
      { icon: Layers, title: 'Interface Design', text: 'Clear, consistent interface architecture.' },
      { icon: Braces, title: 'APIs', text: 'Clear communication protocol between components.' },
      { icon: Network, title: 'GraphQL', text: 'Optimized schema for performance and consistency.' },
    ],
  },
  {
    number: '04',
    color: '#f97316',
image: '/illustrations/web-dev.png',
    title: 'Development',
    description:
      'We use Scrum to develop iteratively, prioritizing customer satisfaction and product quality.',
    features: [
      { icon: Repeat, title: 'Using Scrum', text: 'Iterative development in close collaboration with clients.' },
      { icon: Code2, title: 'Code Quality', text: 'Automated testing, code reviews, and coding standards.' },
    ],
  },
  {
    number: '05',
    color: '#14b8a6',
image: '/illustrations/developer.svg',

    title: 'Testing',
    description:
      'Identifying and fixing defects early through various testing strategies.',
    features: [
      { icon: Component, title: 'Unit Testing', text: 'Identify and fix defects in individual code components.' },
      { icon: GitMerge, title: 'Integration Testing', text: 'Ensuring different parts of the codebase work together.' },
      { icon: RouteIcon, title: 'End-to-End Testing', text: 'Resolving defects not caught by other testing methods.' },
      { icon: ListChecks, title: 'Test-Driven Development', text: 'Writing tests before code for reliable results.' },
    ],
  },
  {
    number: '06',
    color: '#6366f1',
image: '/illustrations/mobile-app.png',
    title: 'Production',
    description:
      'Finalizing development, testing, and preparing for deployment with operations teams.',
    features: [],
  },
  {
    number: '07',
    color: '#06b6d4',
image: '/illustrations/ai-tech.png',
    title: 'Automated Deployment',
    description:
      'Streamlining deployment through continuous integration and delivery tools for faster releases.',
    features: [],
  },
];