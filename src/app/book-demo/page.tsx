'use client';

import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, GraduationCap, Code2, Globe, Send, Baby, Star, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { api } from '../../lib/api';

const BookDemoPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [step, setStep] = useState(1);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({
    phone: '',
    preferredDate: '',
    preferredTime: '',
  });

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const TIME_SLOTS = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
    '10:00 PM'
  ];

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!selectedDate) {
        setBookedSlots([]);
        return;
      }
      setIsLoadingSlots(true);
      const y = selectedDate.getFullYear();
      const m = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const d = String(selectedDate.getDate()).padStart(2, '0');
      const dateString = `${y}-${m}-${d}`;
      const slots = await api.getBookedSlotsForDate(dateString);
      setBookedSlots(slots);
      setIsLoadingSlots(false);
    };
    
    fetchBookedSlots();
  }, [selectedDate]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return { firstDay, totalDays };
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isPastTime = (timeStr: string, date: Date | null) => {
    if (!date) return false;
    
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && 
                    date.getMonth() === today.getMonth() && 
                    date.getFullYear() === today.getFullYear();
    
    if (!isToday) return false;

    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (hours === 12) {
      hours = modifier === 'PM' ? 12 : 0;
    } else if (modifier === 'PM') {
      hours += 12;
    }

    const slotTime = new Date();
    slotTime.setHours(hours, minutes, 0, 0);
    
    return slotTime < today;
  };

  const formatDateString = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setFormData(prev => {
      const isCurrentTimeInvalid = prev.preferredTime && isPastTime(prev.preferredTime, date);
      return { 
        ...prev, 
        preferredDate: formatDateString(date),
        preferredTime: isCurrentTimeInvalid ? '' : prev.preferredTime
      };
    });
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, preferredTime: time }));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleStep1Proceed = async () => {
    if (formData.phone.length === 10) {
      try {
        await api.saveCurriculum({
          name: 'Demo Lead (Step 1)',
          phone: formData.phone,
          email: 'pending-step2@codingskills.co.in',
          lead_type: 'book_demo_partial',
          message: 'Step 1 phone number entered'
        });
      } catch (err) {
        console.error('Error saving partial step 1 lead:', err);
      }
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save lead to Supabase
    try {
      await api.saveCurriculum({
        name: 'Direct Demo User',
        phone: formData.phone,
        email: 'no-email@codingskills.co.in',
        lead_type: 'book_demo',
        message: `Date/Time: ${formData.preferredDate} at ${formData.preferredTime}`
      });
    } catch (err) {
      console.error('Error saving demo booking lead to Supabase:', err);
    }

    // Format message for WhatsApp redirection
    const messageText = `Hi Coding Skills Academy, I would like to book a free trial class.
Phone Number: ${formData.phone}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}`;

    setLastSubmittedMsg(messageText);
    setIsSuccess(true);
    setIsSubmitting(false);

    // Trigger WhatsApp Redirection
    const whatsappUrl = `https://wa.me/919999983314?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-light-base pt-32 pb-24 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4 font-fredoka">
            Book a <span className="text-secondary">Free Demo Class</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Complete the form below to book a live, 1-on-1 coding class for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
            <h3 className="text-2xl font-bold text-dark-base mb-6 font-fredoka">Contact Details</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Need assistance or want to talk to a course advisor? Get in touch with us directly:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Email Address</h4>
                  <a href="mailto:info@codingskills.co.in" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors">info@codingskills.co.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Phone Number</h4>
                  <a href="tel:9999983314" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors">+91 99999 83314</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Our Address</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=CodingSkills+Academy+Paschim+Vihar+New+Delhi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors leading-relaxed block"
                  >
                    WZ-11, Jwalaheri Village, Paschim Vihar, New Delhi, Delhi, 110063
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Success Component */}
          <div className="lg:col-span-8">
            {!isSuccess ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="text-2xl font-bold text-dark-base mb-2 font-fredoka">Enter your number</h3>
                      <p className="text-gray-500 mb-6 font-poppins">Please provide your mobile number to get started.</p>
                      <div>
                        <label className="block text-sm font-bold text-dark-base mb-2 flex items-center font-fredoka">
                          <Phone className="w-4 h-4 mr-2 text-primary" /> Phone Number*
                        </label>
                        <input 
                          type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          title="Please enter a 10-digit phone number"
                          className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-dark-base focus:ring-2 focus:ring-primary transition-all font-poppins text-lg tracking-wider" 
                          placeholder="Enter 10-digit number" 
                        />
                      </div>
                      <button 
                        type="button" 
                        onClick={handleStep1Proceed}
                        disabled={formData.phone.length !== 10}
                        className="w-full btn-primary py-4 text-lg mt-4 flex items-center justify-center font-now group disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                      >
                        Proceed to book demo
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)} 
                          className="mr-4 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors text-gray-600 border border-gray-200"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div>
                          <h3 className="text-xl font-bold text-dark-base font-fredoka">Choose Date & Time</h3>
                          <p className="text-sm text-gray-500 font-poppins">Number: +91 {formData.phone}</p>
                        </div>
                      </div>

                      {/* Interactive Calendar & Time Slots */}
                      <div className="pt-2">
                    <h3 className="text-lg font-bold text-dark-base mb-6 font-fredoka flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-primary" /> Select Preferred Date & Time
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Calendar Widget */}
                      <div className="lg:col-span-7 bg-gray-50/50 p-4 sm:p-6 rounded-2xl border border-gray-100/60">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-bold text-dark-base font-fredoka">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </h4>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={handlePrevMonth}
                              className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors border border-gray-100 bg-white"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={handleNextMonth}
                              className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors border border-gray-100 bg-white"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Days Name Header */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                          {dayNames.map(d => (
                            <div key={d} className="text-xs font-bold text-gray-400 font-poppins h-6 flex items-center justify-center uppercase">
                              {d}
                            </div>
                          ))}
                        </div>
                        
                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {(() => {
                            const { firstDay, totalDays } = getDaysInMonth(currentMonth);
                            const days = [];
                            
                            for (let i = 0; i < firstDay; i++) {
                              days.push(<div key={`empty-${i}`} className="h-8 sm:h-10"></div>);
                            }
                            
                            for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
                              const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNum);
                              const isPast = isPastDate(dayDate);
                              const isSelected = selectedDate && 
                                selectedDate.getDate() === dayNum && 
                                selectedDate.getMonth() === currentMonth.getMonth() && 
                                selectedDate.getFullYear() === currentMonth.getFullYear();
                              
                              days.push(
                                <button
                                  key={`day-${dayNum}`}
                                  type="button"
                                  disabled={isPast}
                                  onClick={() => handleDateSelect(dayDate)}
                                  className={`h-8 w-8 sm:h-10 sm:w-10 mx-auto rounded-full text-[11px] sm:text-xs font-bold flex items-center justify-center transition-all ${
                                    isSelected 
                                      ? 'bg-secondary text-white shadow-md shadow-secondary/20 scale-105' 
                                      : isPast 
                                        ? 'text-gray-300 cursor-not-allowed' 
                                        : 'text-dark-base hover:bg-gray-100 bg-white border border-gray-100/50'
                                  }`}
                                >
                                  {dayNum}
                                </button>
                              );
                            }
                            return days;
                          })()}
                        </div>
                      </div>
                      
                      {/* Time Slots Selector */}
                      <div className="lg:col-span-5 text-left">
                        <label className="block text-sm font-bold text-dark-base mb-3 font-fredoka flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" /> Hourly Slots (9 AM - 10 PM)
                        </label>
                        
                        {formData.preferredDate ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-1">
                            {TIME_SLOTS.map((time, idx) => {
                              const isSelected = formData.preferredTime === time;
                              const isPast = isPastTime(time, selectedDate);
                              const isBooked = bookedSlots.includes(time);
                              
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  disabled={isPast || isBooked}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`py-3 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center justify-center ${
                                    isBooked 
                                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200 cursor-not-allowed opacity-80'
                                      : isSelected
                                      ? 'bg-secondary text-white border-secondary shadow-sm shadow-secondary/25'
                                      : isPast
                                      ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                      : 'bg-white border-gray-100 text-dark-base hover:bg-gray-100 hover:border-gray-200'
                                  }`}
                                >
                                  <span>{time}</span>
                                  {isBooked && <span className="text-[10px] uppercase mt-1 opacity-90 font-semibold tracking-wider">Booked</span>}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-6 text-center text-sm text-gray-400 font-poppins">
                            Please select a date on the calendar first to view available time slots.
                          </div>
                        )}
                      </div>
                      
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || !formData.preferredDate || !formData.preferredTime}
                    className="w-full btn-primary py-4 text-lg mt-4 flex items-center justify-center font-now group disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                  >
                    {isSubmitting ? 'Opening WhatsApp...' : 'Book Free Demo'}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />}
                  </button>
                  </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-soft animate-fade-in text-center flex flex-col items-center justify-center py-16">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full border-4 border-emerald-500/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-dark-base mb-2 font-fredoka">WhatsApp Link Triggered!</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto font-poppins">
                  We have opened WhatsApp to send your demo class details to the academy (+91 99999 83314). If it didn't launch, click below to open manually.
                </p>
                <button
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/919999983314?text=${encodeURIComponent(lastSubmittedMsg)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="btn-primary py-4 px-10 text-base"
                >
                  Open WhatsApp Manually
                </button>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-gray-400 hover:text-dark-base transition-colors mt-6 text-sm font-semibold hover:underline"
                >
                  Go Back to Form
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDemoPage;
