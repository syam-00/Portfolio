import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const getImagePath = (image: string) => {
    if (image.startsWith('http')) return image;
    return `${import.meta.env.BASE_URL}${image}`;
  };

  const projects = [
    {
      title: ' Live Weather Using APIs',
      description:
        'A real-time weather application that fetches and displays live weather data using public APIs, including temperature, humidity, and weather conditions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://syam-00.github.io/Live-Weather-/',
      github: 'https://github.com/syam-00/Live-Weather-.git',
    },
    {
      title: 'College Management System',
      description:
        'A web-based system designed to manage student records, faculty details, courses, and academic activities efficiently within a college.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database'],
      image:
        'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
    },
    {
      title: 'Web Development Projects',
      description:
        'Collection of responsive web projects demonstrating proficiency in HTML, CSS, and JavaScript fundamentals.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image:
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
    },
    {
      title: 'SyncRoom',
      description:
        'A collaborative platform that enables users to connect, communicate, and synchronize activities in real time for teamwork and learning.',
      technologies: ['React', 'JavaScript', 'WebSockets', 'Node.js'],
      image:
        'sr.jpg',
      link: 'https://github.com/syam-00/SyncRoom.git',
      github: 'https://github.com/syam-00/SyncRoom.git',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
