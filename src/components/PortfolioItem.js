import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import portfolioData from '../portfolioData'

function PortfolioItem(props) {
    const { workId } = useParams()
    let history = useHistory()
    const thisWork = portfolioData.find( item => item.id === workId )

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    
        return null;
    }

    function handleClick() {
        history.push("/");
      }

    return(
        <>
            <ScrollToTopOnMount />
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>{thisWork.title}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                <img src={thisWork.img} alt={thisWork.altImg} className="intro__img"/>
            </section>
            
            <div className="portfolio-item-individual">
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa 
                    nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                <img src={thisWork.imgDetail} alt={thisWork.altImgDetail}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi 
                    optio corrupti fugiat ducimus consequatur incidunt?</p>
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa 
                    nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </div>

            <div className="portfolio-item-button">
                <button onClick={handleClick} className="btn">Back</button>
            </div>
        </>
    )
}

export default PortfolioItem