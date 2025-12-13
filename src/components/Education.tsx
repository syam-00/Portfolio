import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - BTech',
      field: 'Computer Science',
      institution: 'Raghu Engineering College',
      location: 'Vishakhapatnam, Andhra Pradesh',
      period: 'August 2024 - May 2027',
      status: 'Currently Pursuing',
      description: 'Pursuing advanced studies in computer science with focus on software development and data analytics.',
    },
    {
      degree: 'Diploma',
      field: 'Computer Engineering',
      institution: 'Dr. B R A Government Model Residential Polytechnic College',
      location: 'Andhra Pradesh',
      period: 'October 2021 - May 2024',
      status: 'Completed',
      description: 'Completed comprehensive diploma program covering fundamentals of computer engineering and programming.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">{edu.field}</p>
                    </div>
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mt-2 md:mt-0">
                  {edu.status}
                </span>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {edu.institution}
              </h4>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
