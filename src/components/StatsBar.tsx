import React from 'react';

const StatsBar: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Young Coders Trained' },
    { value: '7-17', label: 'Age Group We Serve' },
    { value: '5/5', label: 'Parent Rating' },
    { value: '200+', label: 'Projects Built by Kids' },
    { value: '12+', label: 'Courses for Every Level' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ed5b2d] font-protest mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-poppins font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
