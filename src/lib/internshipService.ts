import { supabase } from './supabaseClient';
import {
  InternshipOpportunity,
  InternshipApplication,
  Participant,
  Certificate,
  AdminStats,
  DepartmentCategory,
  ApplicationStatus,
  ParticipationStatus,
  VerificationStatus,
} from './internshipTypes';

// Initial Seed Opportunities
const DEFAULT_OPPORTUNITIES: InternshipOpportunity[] = [
  {
    id: 'opp-1',
    title: 'Full Stack Web Development Intern',
    department: 'Technology & Development',
    description:
      'Work alongside senior engineers to develop scalable web applications, responsive user interfaces, and robust backend APIs using Next.js, React, and Supabase.',
    skills_required: ['JavaScript/TypeScript', 'React or Next.js', 'Tailwind CSS', 'Git & GitHub', 'RESTful APIs'],
    learning_outcomes: ['Production Next.js deployment experience', 'Database modeling and API integration', 'Component-driven frontend architecture'],
    eligibility: 'College students or recent graduates with basic web development knowledge',
    duration: '3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 'opp-2',
    title: 'Python & Backend Development Intern',
    department: 'Technology & Development',
    description:
      'Build and maintain server-side architectures, database schemas, web scrapers, and automation pipelines using Python and modern backend frameworks.',
    skills_required: ['Python 3.x', 'FastAPI or Flask', 'PostgreSQL / SQL', 'Data Structures', 'Git'],
    learning_outcomes: ['REST API design patterns', 'Database query optimization', 'Automated script pipelines and testing'],
    eligibility: 'Enrolled in CS/IT or demonstrable Python project experience',
    duration: '3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 'opp-3',
    title: 'Generative AI & LLM Applications Intern',
    department: 'AI & Emerging Technologies',
    description:
      'Design and build intelligent AI-powered agents, prompt pipelines, and embeddings-based retrieval systems leveraging modern LLM APIs.',
    skills_required: ['Python', 'OpenAI / Gemini APIs', 'Prompt Engineering', 'LangChain or LlamaIndex', 'Basic Vector DBs'],
    learning_outcomes: ['Hands-on generative AI application development', 'RAG pipeline design', 'Agentic workflow orchestration'],
    eligibility: 'Strong analytical mindset with prior coding experience in Python',
    duration: '2 - 3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-02T10:00:00.000Z',
  },
  {
    id: 'opp-4',
    title: 'Machine Learning & Data Science Intern',
    department: 'AI & Emerging Technologies',
    description:
      'Develop predictive models, perform exploratory data analysis, and train supervised/unsupervised machine learning models on curated datasets.',
    skills_required: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'Data Visualization', 'Basic Statistics'],
    learning_outcomes: ['End-to-end ML project lifecycle', 'Feature engineering and model evaluation', 'Real-world data cleaning techniques'],
    eligibility: 'Students in Data Science, AI, Mathematics, or Computer Science',
    duration: '3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-02T10:00:00.000Z',
  },
  {
    id: 'opp-5',
    title: 'UI/UX & Product Design Intern',
    department: 'UI/UX & Creative Design',
    description:
      'Craft intuitive user flows, wireframes, high-fidelity prototypes, and design systems for web and mobile platforms inspired by Apple and Linear.',
    skills_required: ['Figma', 'User Research', 'Wireframing & Prototyping', 'Design Systems', 'Responsive Web Principles'],
    learning_outcomes: ['Complete Figma design system creation', 'User journey mapping & usability testing', 'Design handoff to development'],
    eligibility: 'Design students or self-taught UI/UX enthusiasts with a portfolio',
    duration: '2 - 3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-03T10:00:00.000Z',
  },
  {
    id: 'opp-6',
    title: 'Digital Marketing & Growth Intern',
    department: 'Digital Marketing & Social Media',
    description:
      'Execute growth marketing campaigns, organic social media strategies, SEO keyword optimization, and audience engagement experiments.',
    skills_required: ['Social Media Management', 'Content Strategy', 'SEO Fundamentals', 'Canva / Visual Tools', 'Analytics Tools'],
    learning_outcomes: ['Data-driven campaign optimization', 'Organic community engagement tactics', 'Search engine keyword ranking mastery'],
    eligibility: 'Students passionate about brand growth, marketing, and storytelling',
    duration: '2 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-03T10:00:00.000Z',
  },
  {
    id: 'opp-7',
    title: 'Technical Content & Blog Writer Intern',
    department: 'Content Writing & Research',
    description:
      'Write educational articles, developer guides, and coding tutorials that clarify complex programming concepts for young learners and tech enthusiasts.',
    skills_required: ['Technical Writing', 'Markdown', 'Basic Coding Concepts', 'Research & Fact-checking', 'SEO Optimization'],
    learning_outcomes: ['Published articles under your byline', 'SEO-friendly content optimization skills', 'Clear technical communication'],
    eligibility: 'Excellent written English skills and enthusiasm for software technology',
    duration: '2 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-04T10:00:00.000Z',
  },
  {
    id: 'opp-8',
    title: 'Business Development & Operations Intern',
    department: 'Business & Management',
    description:
      'Assist in operational planning, competitor analysis, student outreach initiatives, and institutional partnership development.',
    skills_required: ['Communication Skills', 'Market Research', 'Google Sheets / Excel', 'Problem Solving', 'Project Coordination'],
    learning_outcomes: ['Client communication and outreach strategies', 'Operational pipeline management', 'Market analysis and pitch presentation'],
    eligibility: 'Undergraduate students in BBA, Commerce, Management, or Engineering',
    duration: '3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-04T10:00:00.000Z',
  },
  {
    id: 'opp-9',
    title: 'Coding Teaching Assistant Intern',
    department: 'Education & Community',
    description:
      'Support live coding batches, assist young learners with bug solving in Python/Scratch/Web, and help mentors prepare interactive learning resources.',
    skills_required: ['Python or Scratch / Web', 'Patience & Empathy', 'Clear Verbal Communication', 'Classroom Assistance'],
    learning_outcomes: ['Mentorship and pedagogical skills', 'Live debugging under real-world constraints', 'Student leadership and engagement'],
    eligibility: 'College students who love teaching and working with young learners (ages 7-17)',
    duration: '3 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-05T10:00:00.000Z',
  },
  {
    id: 'opp-10',
    title: 'Software Testing & QA Intern',
    department: 'Software Testing & QA',
    description:
      'Execute manual test cases, identify visual and functional defects across web applications, log detailed bug reports, and verify fixes.',
    skills_required: ['Manual Testing', 'Cross-browser Testing', 'Bug Reporting & Tracking', 'Attention to Detail', 'DevTools'],
    learning_outcomes: ['Test plan and case writing experience', 'Defect tracking in modern agile boards', 'Quality assurance validation best practices'],
    eligibility: 'Detail-oriented students with passion for software quality and stability',
    duration: '2 Months',
    mode: 'Remote / Online',
    status: 'closed',
    published: true,
    openings_count: 0,
    created_at: '2026-06-05T10:00:00.000Z',
  },
];

// Initial Seed Certificates
const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-shaurya-01',
    credential_id: 'CSA-2026-000108',
    student_name: 'Shaurya Sahani',
    programme_name: 'Coding Skills Academy Internship Programme',
    certificate_type: 'Certificate of Internship & Project Completion',
    department: 'AI & Emerging Technologies',
    role: 'AI Project Development Intern',
    duration: '6 Months',
    issue_date: '2026-11-15',
    verification_status: 'VERIFIED',
    issuing_authority: 'Coding Skills Academy (ISO 9001:2015 Certified)',
    qr_code_url: 'https://codingskills.co.in/verify-certificate?id=CSA-2026-000108',
    created_at: '2026-11-15T12:00:00.000Z',
  },
];

// Initial Seed Applications
const DEFAULT_APPLICATIONS: InternshipApplication[] = [
  {
    id: 'app-seed-1',
    application_id: 'CSA-APP-2026-0001',
    full_name: 'Rohan Sharma',
    email: 'rohan.sharma@example.com',
    phone: '+91 98765 43210',
    date_of_birth: '2004-05-14',
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    education_level: 'Undergraduate',
    institution: 'Delhi Technological University',
    current_year: '3rd Year',
    field_of_study: 'Computer Science and Engineering',
    preferred_department: 'Technology & Development',
    preferred_role: 'Full Stack Web Development Intern',
    skills: 'React, Next.js, TypeScript, Node.js, Tailwind CSS',
    motivation: 'I want to build real-world ed-tech tools and work with seasoned mentors at CSA.',
    previous_projects: 'Built a responsive LMS portal and a real-time markdown editor.',
    github_url: 'https://github.com/rohansharma',
    linkedin_url: 'https://linkedin.com/in/rohansharma',
    portfolio_url: 'https://rohansharma.dev',
    availability: 'Part-time (20 hours/week)',
    expected_start_date: '2026-05-01',
    requires_guardian_consent: false,
    application_status: 'Selected',
    created_at: '2026-04-15T09:30:00.000Z',
  },
  {
    id: 'app-seed-2',
    application_id: 'CSA-APP-2026-0002',
    full_name: 'Pooja Iyer',
    email: 'pooja.iyer@example.com',
    phone: '+91 91234 56789',
    date_of_birth: '2005-08-22',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    education_level: 'Undergraduate',
    institution: 'RV College of Engineering',
    current_year: '2nd Year',
    field_of_study: 'Artificial Intelligence & ML',
    preferred_department: 'AI & Emerging Technologies',
    preferred_role: 'Generative AI & LLM Applications Intern',
    skills: 'Python, PyTorch, OpenAI API, LangChain, FastEmbeddings',
    motivation: 'Passionate about integrating modern LLM models with educational workflows for kids.',
    previous_projects: 'Developed an AI storytelling bot for children.',
    github_url: 'https://github.com/poojaiyer',
    linkedin_url: 'https://linkedin.com/in/poojaiyer',
    availability: 'Full-time (40 hours/week)',
    expected_start_date: '2026-06-15',
    requires_guardian_consent: false,
    application_status: 'Under Review',
    created_at: '2026-06-10T14:15:00.000Z',
  },
  {
    id: 'app-seed-3',
    application_id: 'CSA-APP-2026-0003',
    full_name: 'Aryan Kapoor',
    email: 'aryan.kapoor@example.com',
    phone: '+91 99887 76655',
    date_of_birth: '2009-02-18', // Age 17 (requires guardian consent)
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    education_level: 'High School (Class 11/12)',
    institution: 'Delhi Public School',
    current_year: 'Class 12',
    field_of_study: 'Science (PCM with Computer Science)',
    preferred_department: 'Technology & Development',
    preferred_role: 'Python & Backend Development Intern',
    skills: 'Python, Flask, SQLite, Pygame, Algorithms',
    motivation: 'I love problem-solving and want to gain industry-grade experience before starting college.',
    previous_projects: 'Created a student attendance tracker with Python and Tkinter.',
    github_url: 'https://github.com/aryankapoor',
    availability: 'Part-time (15 hours/week)',
    expected_start_date: '2026-07-01',
    requires_guardian_consent: true,
    guardian_name: 'Sunil Kapoor',
    guardian_relationship: 'Father',
    guardian_phone: '+91 98220 11223',
    guardian_consent_granted: true,
    application_status: 'Shortlisted',
    created_at: '2026-06-18T11:00:00.000Z',
  },
];

// Initial Seed Participants
const DEFAULT_PARTICIPANTS: Participant[] = [
  {
    id: 'part-1',
    application_id: 'CSA-APP-2026-0001',
    participant_code: 'CSA-P-2026-001',
    full_name: 'Rohan Sharma',
    email: 'rohan.sharma@example.com',
    department: 'Technology & Development',
    role: 'Full Stack Web Development Intern',
    assigned_mentor: 'Vikramaditya Rao (Lead Engineer)',
    start_date: '2026-05-01',
    end_date: '2026-08-01',
    participation_status: 'Completed',
    github_repo_url: 'https://github.com/csa-interns/rohan-web-project',
    created_at: '2026-05-01T09:00:00.000Z',
  },
  {
    id: 'part-2',
    application_id: 'CSA-APP-2026-0003',
    participant_code: 'CSA-P-2026-002',
    full_name: 'Aryan Kapoor',
    email: 'aryan.kapoor@example.com',
    department: 'Technology & Development',
    role: 'Python & Backend Development Intern',
    assigned_mentor: 'Priyanshu Kumar (Head of Tech)',
    start_date: '2026-07-01',
    participation_status: 'Active',
    github_repo_url: 'https://github.com/csa-interns/aryan-python-api',
    created_at: '2026-07-01T09:00:00.000Z',
  },
];

// Helper to access LocalStorage safe in SSR
function getLocalItem<T>(key: string, defaultVal: T): T {
  if (typeof window === 'undefined') return defaultVal;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.warn(`LocalStorage read error for ${key}:`, e);
    return defaultVal;
  }
}

function setLocalItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`LocalStorage write error for ${key}:`, e);
  }
}

// STORAGE KEYS
const STORAGE_KEYS = {
  OPPORTUNITIES: 'csa_internship_opportunities_v4',
  APPLICATIONS: 'csa_internship_applications_v4',
  PARTICIPANTS: 'csa_internship_participants_v4',
  CERTIFICATES: 'csa_internship_certificates_v5',
};

// ============================================================================
// Unified Service Implementation
// ============================================================================
export const internshipService = {
  // --------------------------------------------------------------------------
  // OPPORTUNITIES
  // --------------------------------------------------------------------------
  async getOpportunities(department?: string): Promise<InternshipOpportunity[]> {
    // Attempt Supabase
    try {
      let query = supabase
        .from('internship_opportunities')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (department && department !== 'All') {
        query = query.eq('department', department);
      }

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as InternshipOpportunity[];
      }
    } catch {
      // Fallback
    }

    // LocalStorage Fallback
    const local = getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
    return local.filter((opp) => {
      if (!opp.published) return false;
      if (department && department !== 'All' && opp.department !== department) return false;
      return true;
    });
  },

  async getAllOpportunitiesAdmin(): Promise<InternshipOpportunity[]> {
    try {
      const { data, error } = await supabase
        .from('internship_opportunities')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data as InternshipOpportunity[];
      }
    } catch {
      // Fallback
    }

    return getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
  },

  async getOpportunityById(id: string): Promise<InternshipOpportunity | null> {
    try {
      const { data, error } = await supabase
        .from('internship_opportunities')
        .select('*')
        .eq('id', id)
        .single();
      if (!error && data) return data as InternshipOpportunity;
    } catch {
      // Fallback
    }

    const local = getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
    return local.find((o) => o.id === id) || null;
  },

  async createOpportunity(opp: Partial<InternshipOpportunity>): Promise<InternshipOpportunity> {
    const newOpp: InternshipOpportunity = {
      id: opp.id || `opp-${Date.now()}`,
      title: opp.title || 'Untitled Opportunity',
      department: opp.department || 'Technology & Development',
      description: opp.description || '',
      skills_required: opp.skills_required || [],
      learning_outcomes: opp.learning_outcomes || [],
      eligibility: opp.eligibility || 'Open to all eligible students',
      duration: opp.duration || '3 Months',
      mode: opp.mode || 'Remote / Online',
      status: opp.status || 'open',
      published: opp.published !== undefined ? opp.published : true,
      openings_count: opp.openings_count || 3,
      created_at: new Date().toISOString(),
    };

    try {
      await supabase.from('internship_opportunities').insert([newOpp]);
    } catch (e) {
      console.warn('Supabase opportunity insert failed, syncing local:', e);
    }

    const all = getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
    const updated = [newOpp, ...all];
    setLocalItem(STORAGE_KEYS.OPPORTUNITIES, updated);
    return newOpp;
  },

  async updateOpportunity(id: string, updates: Partial<InternshipOpportunity>): Promise<InternshipOpportunity | null> {
    try {
      await supabase.from('internship_opportunities').update(updates).eq('id', id);
    } catch (e) {
      console.warn('Supabase opportunity update failed:', e);
    }

    const all = getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
    const index = all.findIndex((o) => o.id === id);
    if (index === -1) return null;

    all[index] = { ...all[index], ...updates };
    setLocalItem(STORAGE_KEYS.OPPORTUNITIES, all);
    return all[index];
  },

  async deleteOpportunity(id: string): Promise<boolean> {
    try {
      await supabase.from('internship_opportunities').delete().eq('id', id);
    } catch (e) {
      console.warn('Supabase opportunity delete failed:', e);
    }

    const all = getLocalItem<InternshipOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, DEFAULT_OPPORTUNITIES);
    const filtered = all.filter((o) => o.id !== id);
    setLocalItem(STORAGE_KEYS.OPPORTUNITIES, filtered);
    return true;
  },

  // --------------------------------------------------------------------------
  // APPLICATIONS
  // --------------------------------------------------------------------------
  async submitApplication(
    app: Omit<InternshipApplication, 'id' | 'application_id' | 'application_status' | 'created_at'>
  ): Promise<{ success: boolean; applicationId: string; message?: string }> {
    const all = getLocalItem<InternshipApplication[]>(STORAGE_KEYS.APPLICATIONS, DEFAULT_APPLICATIONS);

    // Prevent duplicate application for same email & preferred role within current period
    const duplicate = all.find(
      (a) =>
        a.email.toLowerCase() === app.email.toLowerCase() &&
        a.preferred_role.toLowerCase() === app.preferred_role.toLowerCase()
    );

    if (duplicate) {
      return {
        success: false,
        applicationId: duplicate.application_id,
        message: `An application from ${app.email} for the role "${app.preferred_role}" has already been received with Application ID: ${duplicate.application_id}.`,
      };
    }

    // Generate unique Application ID: CSA-APP-2026-XXXX
    const year = new Date().getFullYear();
    const count = all.length + 1;
    const padded = String(count).padStart(4, '0');
    const applicationId = `CSA-APP-${year}-${padded}`;

    const newApplication: InternshipApplication = {
      id: `app-${Date.now()}`,
      application_id: applicationId,
      application_status: 'Submitted',
      created_at: new Date().toISOString(),
      ...app,
    };

    // Attempt Supabase Insert
    try {
      await supabase.from('applications').insert([newApplication]);
    } catch (e) {
      console.warn('Supabase application submission failed, falling back to local sync:', e);
    }

    const updated = [newApplication, ...all];
    setLocalItem(STORAGE_KEYS.APPLICATIONS, updated);

    return {
      success: true,
      applicationId,
    };
  },

  async getApplications(filters?: {
    search?: string;
    department?: string;
    status?: ApplicationStatus;
  }): Promise<InternshipApplication[]> {
    try {
      let query = supabase.from('applications').select('*').order('created_at', { ascending: false });
      if (filters?.department && filters.department !== 'All') {
        query = query.eq('preferred_department', filters.department);
      }
      if (filters?.status && (filters.status as string) !== 'All') {
        query = query.eq('application_status', filters.status);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as InternshipApplication[];
      }
    } catch {
      // Fallback
    }

    let all = getLocalItem<InternshipApplication[]>(STORAGE_KEYS.APPLICATIONS, DEFAULT_APPLICATIONS);

    if (filters?.department && filters.department !== 'All') {
      all = all.filter((a) => a.preferred_department === filters.department);
    }
    if (filters?.status && (filters.status as string) !== 'All') {
      all = all.filter((a) => a.application_status === filters.status);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      all = all.filter(
        (a) =>
          a.full_name.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          a.application_id.toLowerCase().includes(q) ||
          a.preferred_role.toLowerCase().includes(q)
      );
    }

    return all;
  },

  async updateApplicationStatus(
    id: string,
    status: ApplicationStatus,
    adminNotes?: string
  ): Promise<InternshipApplication | null> {
    try {
      await supabase
        .from('applications')
        .update({ application_status: status, admin_notes: adminNotes })
        .eq('id', id);
    } catch (e) {
      console.warn('Supabase application update failed:', e);
    }

    const all = getLocalItem<InternshipApplication[]>(STORAGE_KEYS.APPLICATIONS, DEFAULT_APPLICATIONS);
    const index = all.findIndex((a) => a.id === id || a.application_id === id);
    if (index === -1) return null;

    all[index] = {
      ...all[index],
      application_status: status,
      admin_notes: adminNotes !== undefined ? adminNotes : all[index].admin_notes,
    };
    setLocalItem(STORAGE_KEYS.APPLICATIONS, all);
    return all[index];
  },

  // --------------------------------------------------------------------------
  // PARTICIPANTS
  // --------------------------------------------------------------------------
  async getParticipants(): Promise<Participant[]> {
    try {
      const { data, error } = await supabase
        .from('participants')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data as Participant[];
    } catch {
      // Fallback
    }

    return getLocalItem<Participant[]>(STORAGE_KEYS.PARTICIPANTS, DEFAULT_PARTICIPANTS);
  },

  async createParticipantFromApplication(
    app: InternshipApplication,
    mentor = 'Senior CSA Mentor'
  ): Promise<Participant> {
    const participants = getLocalItem<Participant[]>(STORAGE_KEYS.PARTICIPANTS, DEFAULT_PARTICIPANTS);
    const year = new Date().getFullYear();
    const count = participants.length + 1;
    const participantCode = `CSA-P-${year}-${String(count).padStart(3, '0')}`;

    const newParticipant: Participant = {
      id: `part-${Date.now()}`,
      application_id: app.application_id,
      participant_code: participantCode,
      full_name: app.full_name,
      email: app.email,
      department: app.preferred_department,
      role: app.preferred_role,
      assigned_mentor: mentor,
      start_date: new Date().toISOString().split('T')[0],
      participation_status: 'Active',
      created_at: new Date().toISOString(),
    };

    try {
      await supabase.from('participants').insert([newParticipant]);
    } catch (e) {
      console.warn('Supabase participant insert error:', e);
    }

    const updated = [newParticipant, ...participants];
    setLocalItem(STORAGE_KEYS.PARTICIPANTS, updated);

    // Also update application status to 'Selected'
    await this.updateApplicationStatus(app.id, 'Selected');

    return newParticipant;
  },

  async updateParticipantStatus(id: string, status: ParticipationStatus): Promise<Participant | null> {
    try {
      await supabase.from('participants').update({ participation_status: status }).eq('id', id);
    } catch (e) {
      console.warn('Supabase participant status update error:', e);
    }

    const all = getLocalItem<Participant[]>(STORAGE_KEYS.PARTICIPANTS, DEFAULT_PARTICIPANTS);
    const idx = all.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    all[idx].participation_status = status;
    setLocalItem(STORAGE_KEYS.PARTICIPANTS, all);
    return all[idx];
  },

  // --------------------------------------------------------------------------
  // CERTIFICATES & VERIFICATION
  // --------------------------------------------------------------------------
  async verifyCertificate(
    credentialId: string
  ): Promise<{
    found: boolean;
    certificate: Certificate | null;
    status: VerificationStatus | 'NOT_FOUND';
    message?: string;
  }> {
    const cleanId = credentialId.trim().toUpperCase();

    // 1. Try Supabase
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('credential_id', cleanId)
        .single();

      if (!error && data) {
        const cert = data as Certificate;
        return {
          found: true,
          certificate: cert,
          status: cert.verification_status,
        };
      }
    } catch {
      // Fallback
    }

    // 2. Check LocalStorage Store
    const certs = getLocalItem<Certificate[]>(STORAGE_KEYS.CERTIFICATES, DEFAULT_CERTIFICATES);
    const found = certs.find((c) => c.credential_id.toUpperCase() === cleanId);

    if (!found) {
      return {
        found: false,
        certificate: null,
        status: 'NOT_FOUND',
        message: 'Certificate Not Found. The entered Credential ID does not match any certificate issued by Coding Skills Academy.',
      };
    }

    return {
      found: true,
      certificate: found,
      status: found.verification_status,
      message:
        found.verification_status === 'REVOKED'
          ? `Certificate Revoked. This certificate is no longer considered valid. ${found.revocation_reason ? 'Reason: ' + found.revocation_reason : ''}`
          : found.verification_status === 'PENDING'
          ? 'Certificate Pending. This certificate has not yet been finalized or approved.'
          : undefined,
    };
  },

  async issueCertificate(certData: {
    student_name: string;
    department: string;
    role: string;
    duration: string;
    issue_date?: string;
    certificate_type?: string;
    participant_id?: string;
    certificate_pdf_url?: string;
  }): Promise<Certificate> {
    const certs = getLocalItem<Certificate[]>(STORAGE_KEYS.CERTIFICATES, DEFAULT_CERTIFICATES);
    const year = new Date().getFullYear();
    const count = certs.length + 125; // Continuous sequence e.g. CSA-2026-000126
    const credentialId = `CSA-${year}-${String(count).padStart(6, '0')}`;
    const qrUrl = `https://codingskills.co.in/verify-certificate?id=${credentialId}`;

    const newCert: Certificate = {
      id: `cert-${Date.now()}`,
      credential_id: credentialId,
      student_name: certData.student_name,
      programme_name: 'Coding Skills Academy Internship Programme',
      certificate_type: certData.certificate_type || 'Certificate of Internship & Project Completion',
      department: certData.department,
      role: certData.role,
      duration: certData.duration,
      issue_date: certData.issue_date || new Date().toISOString().split('T')[0],
      verification_status: 'VERIFIED',
      issuing_authority: 'Coding Skills Academy',
      participant_id: certData.participant_id,
      certificate_pdf_url: certData.certificate_pdf_url || `/certificates/${credentialId}.pdf`,
      qr_code_url: qrUrl,
      created_at: new Date().toISOString(),
    };

    try {
      await supabase.from('certificates').insert([newCert]);
    } catch (e) {
      console.warn('Supabase certificate issuance error:', e);
    }

    const updated = [newCert, ...certs];
    setLocalItem(STORAGE_KEYS.CERTIFICATES, updated);

    // If linked to participant, update their status to Completed
    if (certData.participant_id) {
      await this.updateParticipantStatus(certData.participant_id, 'Completed');
    }

    return newCert;
  },

  async revokeCertificate(id: string, reason = 'Administrative revocation'): Promise<Certificate | null> {
    try {
      await supabase
        .from('certificates')
        .update({ verification_status: 'REVOKED', revocation_reason: reason })
        .eq('id', id);
    } catch (e) {
      console.warn('Supabase certificate revocation error:', e);
    }

    const certs = getLocalItem<Certificate[]>(STORAGE_KEYS.CERTIFICATES, DEFAULT_CERTIFICATES);
    const idx = certs.findIndex((c) => c.id === id || c.credential_id === id);
    if (idx === -1) return null;

    certs[idx].verification_status = 'REVOKED';
    certs[idx].revocation_reason = reason;
    setLocalItem(STORAGE_KEYS.CERTIFICATES, certs);
    return certs[idx];
  },

  async getCertificates(): Promise<Certificate[]> {
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data as Certificate[];
    } catch {
      // Fallback
    }

    return getLocalItem<Certificate[]>(STORAGE_KEYS.CERTIFICATES, DEFAULT_CERTIFICATES);
  },

  // --------------------------------------------------------------------------
  // ADMIN DASHBOARD STATS
  // --------------------------------------------------------------------------
  async getAdminStats(): Promise<AdminStats> {
    const applications = await this.getApplications();
    const participants = await this.getParticipants();
    const certificates = await this.getCertificates();

    const verifiedCerts = certificates.filter((c) => c.verification_status === 'VERIFIED');
    const activeParticipants = participants.filter((p) => p.participation_status === 'Active');
    const completedInterns = participants.filter((p) => p.participation_status === 'Completed');

    return {
      totalApplications: applications.length,
      newApplications: applications.filter((a) => a.application_status === 'Submitted').length,
      underReview: applications.filter((a) => a.application_status === 'Under Review').length,
      shortlisted: applications.filter((a) => a.application_status === 'Shortlisted').length,
      selected: applications.filter((a) => a.application_status === 'Selected').length,
      rejected: applications.filter((a) => a.application_status === 'Rejected').length,
      activeParticipants: activeParticipants.length,
      completedInternships: completedInterns.length,
      certificatesIssued: verifiedCerts.length,
    };
  },

  // Reset helper for testing
  resetToDefaultData(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.OPPORTUNITIES, JSON.stringify(DEFAULT_OPPORTUNITIES));
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(DEFAULT_APPLICATIONS));
    localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(DEFAULT_PARTICIPANTS));
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(DEFAULT_CERTIFICATES));
  },
};
