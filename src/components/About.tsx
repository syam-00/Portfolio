import { Code2, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a passionate computer science student currently pursuing my Bachelor of Technology
              at Raghu Engineering College. With a strong foundation from my diploma in Computer Engineering,
              I've developed a deep interest in web development and data analytics.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey in technology started with learning the fundamentals of programming,
              and I've since expanded my expertise to include modern web technologies, data science,
              and machine learning. I'm constantly learning and building projects to enhance my skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I believe in writing clean, efficient code and creating user-friendly applications
              that solve real-world problems. I'm actively seeking opportunities to apply my skills
              in challenging projects and collaborate with experienced developers.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                  <p className="text-gray-600">
                    Building responsive and modern web applications using HTML, CSS, JavaScript,
                    and modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h3>
                  <p className="text-gray-600">
                    Analyzing data and building machine learning models using Python
                    and data science libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Committed to staying updated with the latest technologies and
                    best practices in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
