import React from 'react'
import { Link } from 'react-router-dom'
import portfolioData from '../portfolioData'


function Work() {

    const workData = portfolioData.map( data => (
            <Link to={`/work/${data.id}`} className="portfolio__item" key={data.id}>
                <img src={data.img} alt={data.desc} className="portfolio__img" />
            </Link>
    ))

    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                {workData}
            </div>
        </section>
    )
}

export default Work