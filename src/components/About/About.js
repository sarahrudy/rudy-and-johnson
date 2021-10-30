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
          <p>I have a Bachelor of Science in Business Administration from the University of Mary Washington in Fredericksburg, Virginia. After working in Marketing in the DC area for a few years, my friends convinced me to move to Park City, Utah to live in a quaint mountain town with ski slopes in my backyard. I fell in love with the mountains and downhill skiing, so after a couple seasons working in a 5-star restaurant at Montage Deer Valley, I decided to move to Denver in search of a balance for the mountain life and more career opportunities. When I got to Denver, I kind of fell into oil & gas where I worked my way up to Landman Associate, negotiating oil & gas contracts and helping facilitate the acquisition of land for exploration and development. When Covid hit, I had a fortunate opportunity to reevaluate what I really wanted to do. I've always been inspired by technology and how it's changing the world we live in, so software development was an obvious choice. It's one of the best decisions I've ever made. I get to build web applications every day and the opportunities for learning and growth are endless.</p>
          <br />
          <p>I am super curious by nature with a passion for innovation and challenging the status quo. I'm especially passionate about the potential technology has to better human lives. My other interests include analyzing financial markets, autonomous vehicles, TaaS (Transportation as a Service), artificial intelligence, blockchain technology, renewable energy, and the overall impact these emerging markets will have on various industries through revolutionary new technologies.</p>
          <br />
          <p>If you got this far, just click on my picture above to connect with me on LinkedIn! Looking forward to chatting with you soon.</p>
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
