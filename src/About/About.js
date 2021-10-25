import React from 'react';
import RudyPhoto from './lubeck.png'
import JohnsonPhoto from './0B177B52-5B5A-4F43-9E2B-9F805038FD1C.png'
import { NavLink } from 'react-router-dom'
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="rudy-section">
      <h3>Sarah Rudy</h3>
      <NavLink to="/sarah" target="_blank">
      <img className="rudy-photo" src={ RudyPhoto } alt={"Sarah Rudy"}/>
      </NavLink>
      <p className="rudy-bio">Hello!

My name is Anna and I’m currently a Front End Engineering student at Turing School of Software & Design. Thank you so much for taking the time to read a bit about me.

Professionally, I’ve spent most of my career at the service of others. I am incredibly passionate about both client and employee experiences. As a result, I approach my work through the lens of the end user and strategize how I can create the best possible experience for them. For the past four years, I had the honor of leading an incredible team responsible for delivering best-in-class customer experiences, the highest EBITDA results in the company and achieved employee engagement scores that exceeded company averages year after year. My passion for creative problem solving, building genuine relationships and maintaining a ‘people first’ mindset resulted in a lot of success in my field. That said, despite my professional successes, I couldn’t help but feel a bit uninspired by my work at times. I wasn’t sure that I wanted to spend the rest of my career executing corporate retail strategy and felt like if I was going to pivot, I needed to do so soon.

Cue a global pandemic that changed the retail landscape massively. The pandemic combined with internal shifts and changes within my organization resulted in me realizing that I needed a change and so I quit my job. In the same week, I signed up for a ‘Try Coding’ workshop and was instantly hooked. I applied to the Front End program that same day that I did the workshop. Six months later, I’m halfway through the program and I’ve loved every single second of it. I feel as though I found the missing piece in my life. Software Development has given me the space and the skills to do what I feel I do best, solve everyday problems and improve the lives of everyday people.

Thank you again for taking the time to read through this quick intro! If it sounds like I’d be a good fit within your team, I’d love the chance to grab coffee and talk more.</p>
      </div>

      <div className="johnson-section">
      <h3>Anna Johnson</h3>
      <NavLink to="/anna" target="_blank">
      <img className="johnson-photo" src={ JohnsonPhoto } alt='Anna Johnson Bio Photo'/>
      </NavLink>
      <p className="johnson-bio">Hello!

My name is Anna and I’m currently a Front End Engineering student at Turing School of Software & Design. Thank you so much for taking the time to read a bit about me.

Professionally, I’ve spent most of my career at the service of others. I am incredibly passionate about both client and employee experiences. As a result, I approach my work through the lens of the end user and strategize how I can create the best possible experience for them. For the past four years, I had the honor of leading an incredible team responsible for delivering best-in-class customer experiences, the highest EBITDA results in the company and achieved employee engagement scores that exceeded company averages year after year. My passion for creative problem solving, building genuine relationships and maintaining a ‘people first’ mindset resulted in a lot of success in my field. That said, despite my professional successes, I couldn’t help but feel a bit uninspired by my work at times. I wasn’t sure that I wanted to spend the rest of my career executing corporate retail strategy and felt like if I was going to pivot, I needed to do so soon.

Cue a global pandemic that changed the retail landscape massively. The pandemic combined with internal shifts and changes within my organization resulted in me realizing that I needed a change and so I quit my job. In the same week, I signed up for a ‘Try Coding’ workshop and was instantly hooked. I applied to the Front End program that same day that I did the workshop. Six months later, I’m halfway through the program and I’ve loved every single second of it. I feel as though I found the missing piece in my life. Software Development has given me the space and the skills to do what I feel I do best, solve everyday problems and improve the lives of everyday people.

Thank you again for taking the time to read through this quick intro! If it sounds like I’d be a good fit within your team, I’d love the chance to grab coffee and talk more.</p>
      </div>

    </div>
  )
}

export default About;
