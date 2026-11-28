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
  caseStudyHref?: string;
}

export const projects: Project[] = [
  {
    id: 'dextra',
    title: 'DEXTRA',
    subtitle: 'Governed Enterprise AI Workforce & Operations Platform',
    description:
      'An interactive prototype for exploring AI-assisted operations: specialized AI workers, human-defined authority, and accountable execution. It experiments with multi-agent orchestration, MCP integration, approval-based execution, deterministic policy validation, and audit trails — not a production enterprise system.',
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
    caseStudyHref: `${import.meta.env.BASE_URL}/case-study/dextra`,
    visualPlaceholder:
      'Ilustrasi arsitektur lokal, bukan screenshot produk asli.',
  },
  {
    id: 'ai-detector-mahasiswa',
    title: 'AI Detector Mahasiswa',
    subtitle: 'Indonesian Academic Writing Analyzer',
    description:
      'A live demo for exploring Indonesian academic writing with NLP. It reads pasted or uploaded txt, md, pdf, and docx files, surfaces 10 language patterns, and can run an optional local model around 130MB. It shows a score with highlighted text and a PDF report, in Indonesian and English. The score is an uncertain indicator — not proof of AI use or academic misconduct. The FAQ also states that no detector is 100% accurate, that this is not a replacement for Turnitin, and that text stays private in the browser.',
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
    caseStudyHref: `${import.meta.env.BASE_URL}/case-study/ai-detector`,
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
