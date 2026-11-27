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
    period: '4 Months · 2025',
    bullets: [
      'Assembled and maintained computers, laptops, and printers, from initial diagnosis through repair.',
      'Installed operating systems and office applications, and checked hardware and software condition.',
      'Troubleshot hardware and software issues on PCs, laptops, and printers, escalating cases that needed further handling.',
      'Diagnosed basic network problems (connectivity, IP addressing, printer sharing) and escalated cases needing further handling.',
      'Documented technical procedures and troubleshooting steps so others could repeat the work.',
      'Explained problems and solutions to users in plain language.',
    ],
  },
  {
    id: 'poa-bpvp',
    role: 'Practical Office Advance (POA) Training',
    organization: 'BPVP Surakarta',
    period: '2026 · after graduation',
    bullets: [
      'Completed a 33-day vocational training at BPVP Surakarta after graduating from vocational school.',
      'Practical office skills covered documents, spreadsheets, presentations, data handling, and administrative documentation; the certificate was obtained after the training.',
      'BNSP certificate is still in the issuance / printing process.',
    ],
  },
  {
    id: 'pmr',
    role: 'Member, Activities Section',
    organization: 'Youth Red Cross (PMR), Wira Unit',
    period: '2023 – 2025',
    bullets: [
      'Helped plan and run social activities and basic Youth Red Cross training sessions.',
      'Prepared equipment lists and supported event rundowns together with members from other sections.',
      'Supported member administration and routine coordination.',
    ],
  },
  {
    id: 'dewan-ambalan',
    role: 'Member, Activities Section',
    organization: 'Scout Ambalan Council',
    period: '2023 – 2025',
    bullets: [
      'Assisted with activity scheduling and day-to-day coordination.',
      'Supported member administration and logistics for organizational activities.',
    ],
  },
];
