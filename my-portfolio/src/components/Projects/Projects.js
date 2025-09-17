import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Code Marathon",
      description: "Team formation platform for hackathons reducing team-building time by 60%",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      features: ["Real-time matching algorithm", "JWT Authentication", "AWS EC2 deployment"],
      status: "Completed"
    },
    {
      title: "AI Code Complexity Reviewer",
      description: "An interactive web application that analyzes code complexity and creates beautiful visualizations.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "D3.js", "Flask", "Python", "OpenAI API"],
      features: ["Code Complexity", "Analytical Visualization", "AI-generated explanations"],
      status: "Deployed on Netlify"
    },
    {
      title: "IoT Streetlight Controller",
      description: "Automated streetlight control system reducing power consumption by 35%",
      technologies: ["Arduino", "C++", "IoT Sensors", "LDR"],
      features: ["Energy-efficient solution", "Automated control", "Research publication"],
      status: "Published in IJSREM"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;