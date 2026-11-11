export type DepartmentCategory =
  | 'Technology & Development'
  | 'AI & Emerging Technologies'
  | 'UI/UX & Creative Design'
  | 'Digital Marketing & Social Media'
  | 'Content Writing & Research'
  | 'Business & Management'
  | 'Education & Community'
  | 'Software Testing & QA';

export interface InternshipOpportunity {
  id: string;
  title: string;
  department: DepartmentCategory;
  description: string;
  skills_required: string[];
  learning_outcomes: string[];
  eligibility: string;
  duration: string;
  mode: string; // e.g. "Remote / Online"
  status: 'open' | 'closed';
  published: boolean;
  openings_count?: number;
  created_at: string;
}

export type ApplicationStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Shortlisted'
  | 'Selected'
  | 'Rejected';

export interface InternshipApplication {
  id: string;
  application_id: string; // e.g., "CSA-APP-2026-0001"
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  city: string;
  state: string;
  country: string;

  // Educational Info
  education_level: string;
  institution: string;
  current_year: string;
  field_of_study: string;

  // Internship Preferences
  preferred_department: DepartmentCategory;
  preferred_role: string;
  skills: string;
  motivation: string;
  previous_projects?: string;
  github_url?: string;
  linkedin_url?: string;
  portfolio_url?: string;

  // Additional Info & Resume
  resume_url?: string; // Data URL or external link
  availability: string;
  expected_start_date: string;

  // Guardian Consent for applicants aged 16-17
  requires_guardian_consent: boolean;
  guardian_name?: string;
  guardian_relationship?: string;
  guardian_phone?: string;
  guardian_consent_granted?: boolean;

  // Status & Notes
  application_status: ApplicationStatus;
  admin_notes?: string;
  created_at: string;
}

export type ParticipationStatus = 'Active' | 'Completed' | 'On Hold' | 'Withdrawn';

export interface Participant {
  id: string;
  application_id?: string;
  participant_code: string; // e.g. "CSA-P-2026-089"
  full_name: string;
  email: string;
  department: DepartmentCategory;
  role: string;
  assigned_mentor: string;
  start_date: string;
  end_date?: string;
  participation_status: ParticipationStatus;
  github_repo_url?: string;
  created_at: string;
}

export type VerificationStatus = 'VERIFIED' | 'REVOKED' | 'PENDING';

export interface Certificate {
  id: string;
  credential_id: string; // e.g. "CSA-2026-000124"
  participant_id?: string;
  student_name: string;
  programme_name: string;
  certificate_type: string;
  department: string;
  role: string;
  duration: string;
  issue_date: string;
  certificate_pdf_url?: string;
  qr_code_url?: string;
  verification_status: VerificationStatus;
  revocation_reason?: string;
  issuing_authority: string;
  created_at: string;
}

export interface AdminStats {
  totalApplications: number;
  newApplications: number;
  underReview: number;
  shortlisted: number;
  selected: number;
  rejected: number;
  activeParticipants: number;
  completedInternships: number;
  certificatesIssued: number;
}

