export interface SkillGroup {
  name: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI & Modern Technologies',
    items: [
      'AI Tools',
      'AI-Assisted Development',
      'Prompt Engineering',
      'AI Agents',
      'MCP',
      'Workflow Automation',
    ],
  },
  {
    name: 'Software & Integration',
    items: [
      'Next.js',
      'React',
      'Python',
      'FastAPI',
      'TypeScript',
      'REST APIs',
      'Playwright',
    ],
  },
  {
    name: 'IT & Networking',
    items: [
      'Computer Troubleshooting',
      'Computer Hardware',
      'Networking',
      'MikroTik',
      'Fiber Optics',
    ],
  },
  {
    name: 'Office & Productivity',
    items: [
      'Microsoft Office',
      'Document Processing',
      'Data Management',
      'Administrative Support',
      'Documentation',
    ],
  },
];
