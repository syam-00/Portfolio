import { Award, CheckCircle2 } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: 'Deloitte Australia - Data Analytics Job Simulation',
      issuer: 'Deloitte Australia',
      category: 'Data Analytics',
      description: 'Completed comprehensive job simulation covering data analytics workflows and business intelligence.',
    },
    {
      name: 'Python for Data Science',
      issuer: 'Certified Training Platform',
      category: 'Programming',
      description: 'Mastered Python programming fundamentals and data science libraries for analytical applications.',
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'Certified Training Platform',
      category: 'Machine Learning',
      description: 'Gained expertise in machine learning algorithms and their implementation using Python.',
    },
    {
      name: 'IT Essentials',
      issuer: 'Certified Training Platform',
      category: 'IT Fundamentals',
      description: 'Comprehensive understanding of IT fundamentals, hardware, software, and networking concepts.',
    },
  ];

  const categoryColors: Record<string, string> = {
    'Data Analytics': 'bg-blue-100 text-blue-700',
    'Programming': 'bg-green-100 text-green-700',
    'Machine Learning': 'bg-orange-100 text-orange-700',
    'IT Fundamentals': 'bg-gray-100 text-gray-700',
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Professional certifications and training programs completed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      {cert.name}
                    </h3>
                    <CheckCircle2 className="text-green-500 flex-shrink-0 ml-2" size={20} />
                  </div>
                  <p className="text-gray-600 font-medium mb-3">{cert.issuer}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[cert.category]}`}>
                    {cert.category}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-lg">
            <CheckCircle2 className="text-blue-600" size={20} />
            <span className="text-blue-900 font-medium">
              Committed to continuous learning and professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
