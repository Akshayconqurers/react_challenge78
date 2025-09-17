import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Digipodium",
      location: "Lucknow, India",
      duration: "Feb 2025 - Apr 2025",
      description: "Completed intensive MERN stack training program with hands-on project development",
      achievements: [
        "Developed Code Marathon platform reducing team-building time by 60%",
        "Implemented responsive UI components using React",
        "Integrated REST APIs with Node.js backend"
      ]
    },
    {
      title: "AWS Cloud Intern",
      company: "ShapeMySkills Pvt. Ltd.",
      location: "Remote",
      duration: "Jul 2024 - Aug 2024",
      description: "Gained hands-on experience with core AWS services including EC2, S3, and IAM",
      achievements: [
        "Deployed and managed cloud infrastructure for web applications",
        "Implemented security best practices and cost optimization strategies",
        "Completed practical projects involving serverless computing"
      ]
    },
    {
      title: "Core Team Member & Event Coordinator",
      company: "Google Developer Students Club (GDSC)",
      location: "BBDITM, Lucknow",
      duration: "Sep 2023 - Sep 2024",
      description: "Led 8-member technical team and successfully executed 4 major tech events with 500+ participants",
      achievements: [
        "Organized DevFest'23 Lucknow, Whack Hack 2.0, and Google WOW events",
        "Increased event attendance by 40% through strategic planning",
        "Managed both technical workshops and non-technical aspects"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">{exp.duration}</div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company} • {exp.location}</h4>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;