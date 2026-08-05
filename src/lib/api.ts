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

// Offline helper to store leads in browser localStorage for testing when database is offline
const storeOfflineLead = (type: string, data: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('csa_offline_leads') || '[]');
      const newLead = { ...data, _lead_type_category: type, _timestamp: new Date().toISOString() };
      existing.push(newLead);
      localStorage.setItem('csa_offline_leads', JSON.stringify(existing));
      console.log(`📌 [CSA Lead Stored Offline/Local] (${type}):`, newLead);
    } catch (e) {
      console.warn('Could not store lead to localStorage', e);
    }
  }
};

export const api = {
  // --- Contact Us submissions ---
  saveContact: async (contactData: ContactData): Promise<ContactData> => {
    storeOfflineLead('contact_us', contactData);
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
    storeOfflineLead('curriculum', curriculumData);
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

  // --- Fetch Booked Slots ---
  getBookedSlotsForDate: async (dateString: string): Promise<string[]> => {
    try {
      const { data, error } = await supabase
        .from('curriculum')
        .select('message')
        .eq('lead_type', 'book_demo')
        .like('message', `Date/Time: ${dateString} at%`);

      if (error) {
        throw error;
      }

      if (!data) return [];

      const bookedTimes = data.map(row => {
        if (!row.message) return null;
        const parts = row.message.split(' at ');
        if (parts.length === 2) {
          return parts[1].trim();
        }
        return null;
      }).filter(Boolean) as string[];

      return bookedTimes;
    } catch (err) {
      console.error('Could not fetch booked slots:', err);
      return [];
    }
  },
};

export default api;
