import './Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'C++', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'AWS', level: 80 },
    { name: 'Google Cloud', level: 85 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="skills-intro">
          Technologies I've mastered through internships, projects, and continuous learning:
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;