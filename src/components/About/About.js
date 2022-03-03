import React from 'react';
import RudyPhoto from '../../images/lubeck.png'
import JohnsonPhoto from '../../images/johnson.png'
import { NavLink } from 'react-router-dom'
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="rudy-section">
        <h3>Sarah Rudy</h3>
        <NavLink to="/sarah" target="_blank">
        <img className="rudy-photo" src={ RudyPhoto } alt={"Sarah Rudy"}/>
        </NavLink>
        <div className="rudy-bio">
          <p>Hi there! I'm Sarah -- a current Front End Engineering student at Turing School of Software and Design.</p>
          <br />
          <p>I have a Bachelor of Science in Business Administration from the University of Mary Washington in Fredericksburg, Virginia. After working in Marketing in the DC area for a few years, I decided to move out West to Park City, Utah. While I was there, I landed a job at a luxury resort called the Montage Deer Valley where I helped a team of amazing people open the new hotel. I fell in love with the mountains, so after a couple seasons working in the signature 5-star restaurant, I decided to move to Denver in search of a balance for the mountain life and more career opportunities. When I got to Denver, I was hired at an oil & gas company where I was promoted quickly from Office Coordinator, to Land Technician, to Title Examiner, then finally Landman Associate. As a Landman Associate, I helped manage a team of hard-working brokers, built relationships with owners, negotiated oil & gas contracts, and helped facilitate the acquisition of land for exploration and development. When Covid hit, I had a fortunate opportunity to switch to a more stable industry where I could use my analytical problem-solving skills in a way that was personally fulfilling. I've always been inspired by technology and how it's changing the world we live in, so I decided to go to Turing to hone my technical problem-solving skills and build applications from the ground up.</p>
          <br />
          <p>I am curious and proactive by nature with a passion for innovation and coming up with unique solutions to common problems. I'm especially passionate about the potential technology has to better human lives, in whatever capacity that may be. I'm really excited about the future of autonomous and self-driving vehicles and hope to work in that space one day, but until then, I look forward to using my natural skills and interests in business, communication, design, and engineering to create business solutions.</p>
          <br />
          <p>Click on my picture above to connect with me on LinkedIn! I hope to chat with you soon.</p>
        </div>
      </div>

      <div className="johnson-section">
        <h3>Anna Johnson</h3>
        <NavLink to="/anna" target="_blank">
        <img className="johnson-photo" src={ JohnsonPhoto } alt='Anna Johnson Bio'/>
        </NavLink>
        <div className="johnson-bio">
          <p>Hello! My name is Anna and I’m currently a Front End Engineering student at Turing School of Software & Design. Thank you so much for taking the time to read a bit about me.</p>
          <br />
          <p>Professionally, I’ve spent most of my career at the service of others. I am incredibly passionate about both client and employee experiences. As a result, I approach my work through the lens of the end user and strategize how I can create the best possible experience for them. For the past four years, I had the honor of leading an incredible team responsible for delivering best-in-class customer experiences, the highest EBITDA results in the company and achieved employee engagement scores that exceeded company averages year after year. My passion for creative problem solving, building genuine relationships and maintaining a ‘people first’ mindset resulted in a lot of success in my field. That said, despite my professional successes, I couldn’t help but feel a bit uninspired by my work at times. I wasn’t sure that I wanted to spend the rest of my career executing corporate retail strategy and felt like if I was going to pivot, I needed to do so soon.</p>
          <br />
          <p>Cue a global pandemic that changed the retail landscape massively. The pandemic combined with internal shifts and changes within my organization resulted in me realizing that I needed a change and so I quit my job. In the same week, I signed up for a ‘Try Coding’ workshop and was instantly hooked. I applied to the Front End program that same day that I did the workshop. Six months later, I’m halfway through the program and I’ve loved every single second of it. I feel as though I found the missing piece in my life. Software Development has given me the space and the skills to do what I feel I do best, solve everyday problems and improve the lives of everyday people.</p>
          <br />
          <p>Thank you again for taking the time to read through this quick intro! If it sounds like I’d be a good fit within your team, I’d love the chance to grab coffee and talk more.</p>
          <br />
        </div>
      </div>
    </section>
  )
}

export default About;
