'use client';

import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, Baby } from 'lucide-react';
import { api } from '../lib/api';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.saveContact({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        message: '',
      });
    } catch (err) {
      console.error('Error saving contact form lead to Supabase:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100/80 font-poppins">
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full border-4 border-emerald-500/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Send className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-dark-base mb-2 font-fredoka">Message Sent Successfully!</h3>
          <p className="text-gray-500 mb-6 text-sm font-poppins">Thank you for reaching out. We will get back to you within 24 hours.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-secondary py-3 px-8 text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-dark-base mb-2 flex items-center gap-1 font-fredoka">
                <User className="w-3.5 h-3.5 text-primary" /> Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/35 transition-colors bg-white font-poppins text-sm text-dark-base"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-dark-base mb-2 flex items-center gap-1 font-fredoka">
                <Mail className="w-3.5 h-3.5 text-primary" /> Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="parent@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/35 transition-colors bg-white font-poppins text-sm text-dark-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold text-dark-base mb-2 flex items-center gap-1 font-fredoka">
                <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                title="Please enter a 10-digit phone number"
                placeholder="Enter 10-digit number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/35 transition-colors bg-white font-poppins text-sm text-dark-base"
              />
            </div>

            {/* Child's Age */}
            <div className="flex flex-col">
              <label htmlFor="childAge" className="text-sm font-semibold text-dark-base mb-2 flex items-center gap-1 font-fredoka">
                <Baby className="w-3.5 h-3.5 text-primary" /> Child's Age (Years)
              </label>
              <select
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/35 transition-colors bg-white font-poppins text-sm text-dark-base"
              >
                <option value="">Select Age</option>
                <option value="5-7">5 - 7 years</option>
                <option value="8-10">8 - 10 years</option>
                <option value="11-13">11 - 13 years</option>
                <option value="14-17">14 - 17 years</option>
                <option value="other">Adult/Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold text-dark-base mb-2 flex items-center gap-1 font-fredoka">
              <MessageSquare className="w-3.5 h-3.5 text-primary" /> Your Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/35 transition-colors bg-white font-poppins text-sm text-dark-base resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 px-8 text-base flex items-center justify-center gap-2 group/btn disabled:opacity-50"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
            {!isSubmitting && <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
