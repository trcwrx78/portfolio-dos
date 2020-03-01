import React from 'react'

function About() {
    return(
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Designer &amp; developer based out of CLE</p>
           
           <div className="about-me__body">
               <p>I am a multi-faceted Front-End Designer and Developer that enjoys the challenge of creating beautiful 
                   digital designs. I am a graduate of DeVry University with a Bachelors in Multimedia Design and 
                   Development. I have multiple years of experience working as a freelance designer and a front-end 
                   developer at a web design firm. My personal mentality is to consistently get better and refine my 
                   skills. Which is why I spend my free time reading, working through FreeCodeCamp, and living a 
                   healthy lifestyle. </p>
               <p>In my personal life, I am married and have two daughters. They keep me busy running around to 
                   softball events or playing Frozen #girldad. During our downtime we enjoy spending time with our 
                   pup, a boxer named Penny, playing Switch with my oldest daughter, and finding a good show on Netflix 
                   to binge together with my wife.</p>
           </div>
           
           <img src="/img/dev-trc-02.jpg" alt="Torrence and family in front of holiday lights" className="about-me__img" />
        </section>
    )
}

export default About