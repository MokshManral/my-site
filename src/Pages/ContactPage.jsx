import { Link } from "react-router"

export function ContactPage() {
  return (
    <>
      <div className="mysocials">
        <section className="box">
          <h4>my socials</h4>
          <Link to="https://x.com/MokshManral?t=Fjsc-9tAvWJWFN3MjMhXBg&s=09"><button className="linkerButton"><i className="logo2" class="fa-brands fa-x-twitter"></i>contact us on x</button></Link>
          <Link to="https://github.com/MokshManral"><button className="linkerButton"><i className="logo2" class="fa-brands fa-github"></i>contact us on github</button></Link>
          <Link to="https://www.linkedin.com/in/moksh-manral-a96267301"><button className="linkerButton"><i className="logo2" class="fa-brands fa-linkedin"></i>contact us on linkedin</button></Link>
        </section>
      </div>
    </>
  )
}