import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Akshay Pratap Singh, a passionate Computer Science Engineering student 
              at BBDITM, Lucknow. Recently graduated with a CGPA of 7.5/10, 
              I'm on an exciting journey to master full-stack development.
            </p>
            <p>
              With hands-on experience as a Full Stack Development Intern at Digipodium 
              and AWS Cloud Intern at ShapeMySkills, I love building innovative solutions 
              that solve real-world problems. My Code Marathon platform reduced team-building 
              time by 60% for hackathons!
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>CGPA</h3>
                <p>7.5/10</p>
              </div>
              <div className="stat">
                <h3>Projects</h3>
                <p>3+ Major</p>
              </div>
              <div className="stat">
                <h3>Experience</h3>
                <p>MERN Stack</p>
              </div>
              <div className='stat'>
                <h3>Cloud</h3>
                <p>AWS & GCCP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;