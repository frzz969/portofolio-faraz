export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  status: string;
  visualPlaceholder: string;
  liveUrl?: string;
  liveLabel?: string;
}

export const projects: Project[] = [
  {
    id: 'dextra',
    title: 'DEXTRA',
    subtitle: 'Governed Enterprise AI Workforce & Operations Platform',
    description:
      'An AI-powered operations platform designed around specialized AI workers, human-defined authority, and accountable execution. The platform explores multi-agent orchestration, MCP integration, approval-based execution, deterministic policy validation, and audit trails.',
    focus: [
      'AI Agents',
      'Next.js',
      'React',
      'Python',
      'FastAPI',
      'MCP',
      'System Integration',
    ],
    status: 'BUILT',
    liveUrl: 'https://dextra-office-agent.vercel.app',
    liveLabel: 'Live demo (prototype / demo interaktif) ↗',
    visualPlaceholder:
      'Ilustrasi arsitektur lokal, bukan screenshot produk asli.',
  },
  {
    id: 'ai-detector-mahasiswa',
    title: 'AI Detector Mahasiswa',
    subtitle: 'Indonesian Academic Writing Analyzer',
    description:
      'A live demo for analyzing Indonesian academic writing with NLP. It reads pasted or uploaded txt, md, pdf, and docx files, checks 10 language patterns, and can run an optional local model around 130MB. Results show a score with highlighted text and a PDF report, in Indonesian and English. The FAQ states clearly that no detector is 100% accurate, that this is not a replacement for Turnitin, and that text stays private in the browser.',
    focus: [
      'NLP',
      'Indonesian Language Analysis',
      'AI Evaluation',
      'Text Classification',
      'Writing Quality',
    ],
    status: 'LIVE DEMO',
    liveUrl: 'https://ai-detector-mahasiswa.vercel.app',
    liveLabel: 'Live demo ↗',
    visualPlaceholder:
      'Ilustrasi antarmuka lokal, bukan tangkapan layar produk pihak ketiga.',
  },
  {
    id: 'ai-technical-experiments',
    title: 'AI & Technical Experiments',
    subtitle: 'Independent Learning & Exploration',
    description:
      'A collection of technical experiments involving AI tools, agentic workflows, API integration, MCP, and AI-assisted software development. This section documents ongoing learning, prototypes, technical explorations, and practical experiments.',
    focus: [
      'AI Tools',
      'Agentic Workflows',
      'API Integration',
      'MCP',
      'AI-Assisted Development',
    ],
    status: 'ONGOING EXPLORATION',
    visualPlaceholder:
      'Dokumentasi eksperimen AI, MCP, API, dan workflow.',
  },
];
