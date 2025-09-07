import { Link } from 'react-router';
import RobotImage from '../assets/images/robot.png'
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <div className='firstPage'>
        <header className='header'>
          <h3>hello everyone</h3>
            <nav className="header-nav" >
              <Link to="about" className="foranimation">about me</Link>
              <Link to="project" className="foranimation">projects</Link>
              <Link to="contacts"><button className="contact-button">contact us</button></Link>
            </nav>
        </header>
        
        <section className="information">
          <div className="main">
            <h1>hello, i'm <span>moksh singh</span></h1>
            <h4>front end developer</h4>
          </div>
          <p className="aboutme">With a strong foundation in HTML, CSS, and JavaScript, I enjoy creating engaging and responsive web applications that enhance user experience. I'm passionate about design and functionality, constantly exploring new tools and frameworks to improve my skills and streamline my development process.</p>
          <button className='contact-button hire-button'>hire me</button>
        </section>
        
        <section className="social-links">
            <Link className="social-link" to="https://x.com/MokshManral?t=Fjsc-9tAvWJWFN3MjMhXBg&s=09" target='_blank'><i className="logo" class="fa-brands fa-x-twitter"></i></Link>
            <Link className="social-link" to="https://github.com/MokshManral" target='_blank'><i className="logo" class="fa-brands fa-github"></i></Link>
            <Link className="social-link" to="www.linkedin.com/in/moksh-singh-a96267301" target='_blank'><i className="logo" class="fa-brands fa-linkedin"></i></Link>
        </section>
          <img className='robot-picture' src={RobotImage} alt="robot" />
      </div>
    </>
  );
}
