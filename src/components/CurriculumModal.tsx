'use client';

import React, { useState } from 'react';
import { X, User, Phone, Mail, GraduationCap, Send, FileDown, Baby } from 'lucide-react';
import { api } from '../lib/api';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  pdfUrl: string;
}

const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, courseTitle, pdfUrl }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    classStandard: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.saveCurriculum({
        name: formData.parentName,
        child_name: formData.childName,
        child_age: formData.childAge || null,
        phone: formData.phone,
        email: formData.email,
        class_standard: formData.classStandard,
        course_title: courseTitle,
        lead_type: 'curriculum_download'
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger PDF Download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfUrl.split('/').pop() || 'curriculum.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '', classStandard: '' });
      }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#2e2e2e]/80 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in-up border border-gray-100 z-10">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-dark-base transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8 md:p-10">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full border-4 border-emerald-500/20 flex items-center justify-center mx-auto mb-6 animate-bounce">
                <FileDown className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-dark-base mb-2 font-fredoka">Download Started!</h3>
              <p className="text-gray-500 font-poppins">Thank you! Your {courseTitle} curriculum is being downloaded.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-base mb-2 font-fredoka">Get Full Curriculum</h2>
                <p className="text-gray-500 text-sm font-poppins">Fill in your details to download the <span className="text-secondary font-bold">{courseTitle}</span> syllabus.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center uppercase tracking-wider font-poppins">
                      <User className="w-3 h-3 mr-1 text-primary" /> Parent's Name
                    </label>
                    <input 
                      type="text" name="parentName" value={formData.parentName} onChange={handleChange} required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center uppercase tracking-wider font-poppins">
                      <Baby className="w-3 h-3 mr-1 text-primary" /> Child's Name
                    </label>
                    <input 
                      type="text" name="childName" value={formData.childName} onChange={handleChange} required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins"
                      placeholder="Child's name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center uppercase tracking-wider font-poppins">
                      <GraduationCap className="w-3 h-3 mr-1 text-primary" /> Child's Grade
                    </label>
                    <select 
                      name="classStandard" value={formData.classStandard} onChange={handleChange} required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins appearance-none"
                    >
                      <option value="" disabled>Select Grade</option>
                      {[...Array(12)].map((_, i) => <option key={i+1} value={`Grade ${i+1}`}>{`Grade ${i+1}`}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center uppercase tracking-wider font-poppins">
                      <Phone className="w-3 h-3 mr-1 text-primary" /> Phone Number
                    </label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      title="Please enter a 10-digit phone number"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins"
                      placeholder="Enter 10-digit number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center uppercase tracking-wider font-poppins">
                    <Mail className="w-3 h-3 mr-1 text-primary" /> Email Address
                  </label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins"
                    placeholder="parent@example.com"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 mt-4 flex items-center justify-center font-now text-lg group"
                >
                  {isSubmitting ? 'Processing...' : 'Download Curriculum Now'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurriculumModal;
