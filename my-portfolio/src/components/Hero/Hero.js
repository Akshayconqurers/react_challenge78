import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Akshay Pratap Singh</span></h1>
        <h2>Full-Stack Developer & Cloud Innovator</h2>
        <p>
        MERN Stack Developer with expertise in AWS Cloud, graduated in Computer Science & Engineering from BBDITM, Lucknow.
        </p>
        <div className="hero-buttons">
          <a
            href="https://github.com/Akshayconqurers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            View My Work
          </a>
          <a
            href="https://linkedin.com/in/akshay-pratap-singh-a309b8250/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;