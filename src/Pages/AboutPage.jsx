import './AboutPage.css'

export function AboutPage() {
  return (
    <>
      <title>About Me</title>

      <div className="secondPage">
        <header className="headTwo">
          <h1>who am i ?</h1>
        </header>
        <section className="profile">
          <div className="profilepic">🙂</div>
        </section>
        <section>
          <h3>about me</h3>
          <div className="about">
            I'm Moksh Singh, a B.Tech student in Computer Science and Engineering
            with a focus on becoming a software engineer. With strong programming
            skills and a dedication to problem-solving, I aim to create impactful
            software solutions. Driven by curiosity and a commitment to continuous
            learning, I'm ready to make a mark in the tech world.
          </div>
        </section>
        <hr />
        <section>
          <h3>education</h3>
          <div className="about">
            <ol>
              <li>nur to 1st from nutan bal vclassNameyalaya, delhi.</li>
              <li>2nd to 10th from vclassNameya niketan public school, gurgram.</li>
              <li>
                11th and 12th (non-medical) , royal public sr. sec. school,
                wazirpur.
              </li>
              <li>doing btech cse from sunstone, gd goenka.</li>
            </ol>
          </div>
        </section>
        <hr />
        <section>
          <h3>skills</h3>
          <div className="about">
            html | css | javascript | tailwind | react | c++ | c | java | dsa
          </div>
        </section>
      </div>
    </>
  );
}
