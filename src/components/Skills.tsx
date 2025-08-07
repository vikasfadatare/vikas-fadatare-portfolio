import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/java.png',                            
      category: 'Backend'
    },
    {
      name: 'Spring Boot',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/springboot.png',
      category: 'Backend'
    },
    {
      name: 'Microservices',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/microservices.png',
      category: 'Backend'
    },
    {
      name: 'REST API',
      // image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/rest-api.png',
      image:'/rest-api.png',
      category: 'Backend'
    },
    {
      name: 'MySQL',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/mysql.png',
      category: 'Database'
    },    
    {
      name: 'React',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/react.png',
      category: 'Frontend'
    },    
    {
      name: 'HTML',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/html.png',
      category: 'Frontend'
    },
    {
      name: 'GitHub',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/github.png',      
      category: 'CI/CD & DevOps'
    },
    {
      name: 'Jenkins',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/jenkins.png',      
      category: 'CI/CD & DevOps'
    },
    {
      name: 'Docker',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/docker.png',      
      category: 'CI/CD & DevOps'
    },
    {
      name: 'Kubernetes',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/kubernetes.png',      
      category: 'CI/CD & DevOps'
    },
    {
      name: 'AWS',
      image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/aws.png',      
      category: 'CI/CD & DevOps'
    },


 
    // {
    //   name: 'PostgreSQL',
    //   image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/postgresql.png',
    //   category: 'Database'
    // },
    // {
    //   name: 'CSS',
    //   image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/css.png',
    //   category: 'Frontend'
    // },
    // {
    //   name: 'JavaScript',
    //   image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/javascript.png',
    //   category: 'Frontend'
    // },
    // {
    //   name: 'Leetcode',
    //   image: 'https://raw.githubusercontent.com/vikasfadatare/vikas-fadatare-portfolio/main/public/leetcode.png',
    //   category: 'Data Structures'
    // },
    
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
             I've gained practical experience across a wide range of technologies through both real-world projects and continuous learning. 
             My skill set covers full-stack development — from building robust backend systems to crafting responsive front-end interfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;