import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/java.png',
      category: 'Backend'
    },
    {
      name: 'Spring Boot',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/springboot.png',
      category: 'Backend'
    },
    {
      name: 'MySQL',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/mysql.png',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/postgresql.png',
      category: 'Database'
    },
    {
      name: 'React',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/react.png',
      category: 'Frontend'
    },
    {
      name: 'HTML',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/html.png',
      category: 'Frontend'
    },
    {
      name: 'CSS',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/css.png',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/javascript.png',
      category: 'Frontend'
    },
    {
      name: 'Leetcode',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/leetcode.png',
      category: 'Data Structures'
    },
    {
      name: 'Microservices',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/microservices.png',
      category: 'Backend'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              I have hands-on experience with these technologies through various projects and continuous learning. 
              My expertise spans across full-stack development, from backend services to responsive frontend interfaces, 
              with a strong foundation in data structures and algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;