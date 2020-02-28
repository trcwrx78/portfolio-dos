import React from 'react'

function Intro() {
     return(
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Torrence Cole</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src="/img/dev-trc-01.jpg" alt="Torrence Cole smiling" className="intro__img" />
        </section>
     )
}

export default Intro