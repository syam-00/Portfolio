import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Tailwind CSS'],
      color: 'blue',
    },
    {
      title: 'Programming Languages',
      icon: Database,
      skills: ['Python', 'Java', 'C', 'JavaScript'],
      color: 'green',
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: ['Python for Data Science', 'Machine Learning', 'Data Analytics'],
      color: 'orange',
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'IT Essentials', 'Problem Solving'],
      color: 'gray',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-400' },
      gray: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', hover: 'hover:border-gray-400' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                  <Icon className={colors.text} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 ${colors.bg} border ${colors.border} ${colors.hover} rounded-lg transition-colors`}
                    >
                      <span className={`font-medium ${colors.text}`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
