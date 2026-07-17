'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Review {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  time: string;
  color: string;
}

const GoogleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-5.84-4.53z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const TestimonialsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      name: 'Swati Mittal',
      role: 'Parent of Python Student',
      content: '"My son is thoroughly enjoying his computer class. The lessons are clear, engaging, and well-structured. Dharmesh Sir explains complex topics in a simple and practical way, making them easy to understand and apply. My son is learning Python. Thank you for such a supportive and productive learning environment."',
      avatar: 'SM',
      rating: 5,
      time: '1 year ago',
      color: 'bg-emerald-600'
    },
    {
      name: 'Harsh Arora',
      role: 'Class XI Student',
      content: '"I am Harsh from Class XI. The teaching at Coding Skills Academy is really very good. Sir explains every concept clearly and makes learning easy and fun. His way of teaching is excellent, and I enjoy attending every class."',
      avatar: 'HA',
      rating: 5,
      time: '1 year ago',
      color: 'bg-blue-600'
    },
    {
      name: 'Reena Mittal',
      role: 'Parent',
      content: '"Absolutely delighted to be associated with Coding Skills Academy for my child. I would recommend it to every parent who wants their child to be proficient in coding as well as aware of cyber ethics. In the growing years, it is a wonderful place to build strong technical skills."',
      avatar: 'RM',
      rating: 5,
      time: '2 years ago',
      color: 'bg-amber-600'
    },
    {
      name: 'Priyesi Taneja',
      role: 'Parent of Python Student',
      content: '"My son learnt Python from Mr. Dharmesh. He is an excellent tutor. His explanations are clear and concise, making concepts easy to grasp. I particularly appreciate his patience in answering every query. I highly recommend Coding Skills Academy to anyone looking to develop coding skills."',
      avatar: 'PT',
      rating: 5,
      time: '2 years ago',
      color: 'bg-purple-600'
    },
    {
      name: 'Varsha C',
      role: 'Parent of Scratch Student',
      content: '"I am very grateful that my child learnt Scratch coding here. It was an amazing experience. Initially I was worried, but after attending classes regularly, I became very satisfied. The teaching is excellent and children learn confidently."',
      avatar: 'VC',
      rating: 5,
      time: '2 years ago',
      color: 'bg-rose-600'
    },
    {
      name: 'Parul Nagi',
      role: 'Parent',
      content: '"We are extremely grateful for the opportunity to learn from you. Your exceptional teaching skills, knowledge, and continuous support have made a positive impact on my child\'s coding journey."',
      avatar: 'PN',
      rating: 5,
      time: '3 years ago',
      color: 'bg-teal-600'
    },
    {
      name: 'Rajan Jolly',
      role: 'Local Guide',
      content: '"Dear Mr. Dharmesh, I wanted to express my heartfelt appreciation for your dedication and guidance. Thank you for helping students grow with confidence and practical coding knowledge."',
      avatar: 'RJ',
      rating: 5,
      time: '1 year ago',
      color: 'bg-indigo-600'
    },
    {
      name: 'Ayaansh Gupta',
      role: 'Student',
      content: '"I had a great experience at Coding Skills Academy. The instructors were knowledgeable and supportive, the curriculum was well structured, and I gained valuable skills that boosted my confidence in coding."',
      avatar: 'AG',
      rating: 5,
      time: '1 year ago',
      color: 'bg-cyan-600'
    },
    {
      name: 'Jibin Joseph',
      role: 'Student',
      content: '"A good academy because it focuses on building a strong foundation. The tutor has deep knowledge of coding, C language, and Python through online classes."',
      avatar: 'JJ',
      rating: 5,
      time: '3 years ago',
      color: 'bg-orange-600'
    },
    {
      name: 'Khem Dhamania',
      role: 'Local Guide',
      content: '"The teachers have given me courage and self-confidence. All the professors have been a great source of inspiration throughout the learning journey."',
      avatar: 'KD',
      rating: 5,
      time: '3 years ago',
      color: 'bg-violet-600'
    },
    {
      name: 'Shruti Goel',
      role: 'Student',
      content: '"I am highly satisfied with this academy. The teachers are very supportive and kind."',
      avatar: 'SG',
      rating: 5,
      time: '2 months ago',
      color: 'bg-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-dark-base relative overflow-hidden font-poppins text-white">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-fredoka">
            Why Parents <span className="text-secondary">Trust Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-poppins">
            Join happy families who have rated us 5.0 stars on Google reviews.
          </p>
        </div>

        {/* Google Ratings Header Card */}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=CodingSkills+Academy+Paschim+Vihar+New+Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center mb-16 bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/30 transition-all duration-300 rounded-[24px] p-6 max-w-md mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(237,91,45,0.08)] group"
        >
          <div className="flex items-center gap-3 mb-3">
            <GoogleLogo className="w-6 h-6" />
            <span className="text-white font-bold text-lg font-fredoka tracking-wide group-hover:text-secondary transition-colors">Google Reviews Rating</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-extrabold text-white">5.0</span>
            <div className="flex flex-col">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400 mt-0.5 text-left font-semibold group-hover:text-gray-300 transition-colors">27 verified reviews</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-2 px-3 py-1 bg-white/10 rounded-full text-xs text-secondary font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondary fill-current text-dark-base" />
            <span>100% Verified Parent Reviews</span>
          </div>
        </a>

        {/* Swiper Slider */}
        <div className="testimonials-slider relative px-4 text-dark-base">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="pb-16"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="!h-auto flex">
                <div className="w-full h-full bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-secondary/20 transition-all duration-300 relative group">
                  <div className="absolute top-6 right-8 text-gray-100 group-hover:text-secondary/10 transition-colors duration-300">
                    <Quote className="w-12 h-12 rotate-180 fill-current" />
                  </div>
                  <div>
                    {/* Stars */}
                    <div className="flex text-amber-400 mb-6 gap-0.5">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {/* Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 italic font-medium font-poppins">
                      {review.content}
                    </p>
                  </div>
                  {/* User Profile */}
                  <div className="flex items-center pt-6 border-t border-gray-50 mt-auto">
                    <div className={`w-11 h-11 ${review.color} text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md uppercase font-fredoka`}>
                      {review.avatar}
                    </div>
                    <div className="ml-3.5 text-left">
                      <h4 className="text-sm font-extrabold text-dark-base font-fredoka">{review.name}</h4>
                      <p className="text-[11px] text-gray-400 font-semibold font-poppins">{review.role} • {review.time}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
