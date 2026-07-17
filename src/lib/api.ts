import { supabase } from './supabaseClient';

export interface ContactData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  createdAt?: string;
}

export interface CurriculumData {
  id?: string;
  name: string;
  child_name?: string;
  child_age?: string;
  phone: string;
  email: string;
  class_standard?: string;
  course_title?: string;
  lead_type: string;
  message?: string;
  createdAt?: string;
}

export const api = {
  // --- Contact Us submissions ---
  saveContact: async (contactData: ContactData): Promise<ContactData> => {
    try {
      const { data, error } = await supabase
        .from('contact_us')
        .insert([
          {
            name: contactData.name,
            phone: contactData.phone,
            email: contactData.email,
            message: contactData.message || null,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      return data && data[0] ? data[0] : contactData;
    } catch (err) {
      console.error('Could not save contact lead to Supabase:', err);
      return contactData;
    }
  },

  // --- Curriculum Downloads & Demo Bookings ---
  saveCurriculum: async (curriculumData: CurriculumData): Promise<CurriculumData> => {
    try {
      const { data, error } = await supabase
        .from('curriculum')
        .insert([
          {
            name: curriculumData.name,
            child_name: curriculumData.child_name || null,
            child_age: curriculumData.child_age || null,
            phone: curriculumData.phone,
            email: curriculumData.email,
            class_standard: curriculumData.class_standard || null,
            course_title: curriculumData.course_title || null,
            lead_type: curriculumData.lead_type,
            message: curriculumData.message || null,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      return data && data[0] ? data[0] : curriculumData;
    } catch (err) {
      console.error('Could not save curriculum lead to Supabase:', err);
      return curriculumData;
    }
  },
};

export default api;
