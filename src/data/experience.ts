export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'it-support-intern',
    role: 'IT Support Intern',
    organization: 'Soerya Global Komputer',
    period: '4 Months',
    bullets: [
      'Performed computer hardware and software troubleshooting.',
      'Installed and configured operating systems and office applications.',
      'Assisted with computer maintenance and technical support.',
      'Conducted hardware and software inspections.',
      'Documented technical procedures and troubleshooting activities.',
    ],
  },
  {
    id: 'pmr-dewan-ambalan',
    role: 'Organizational Experience',
    organization: 'PMR & Dewan Ambalan',
    period: '2023 – 2025',
    bullets: [
      'Assisted with organizational activity scheduling.',
      'Supported member administration.',
      'Participated in organizational activities and coordination.',
    ],
  },
];
