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
        history.push("/#work");
      }

    return(
        <>
            <ScrollToTopOnMount />
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Project <strong>{thisWork.title}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{thisWork.desc}</p>
                <img src={thisWork.img} alt={thisWork.altImg} className="intro__img"/>
            </section>
            
            <div className="portfolio-item-individual">
                <p>{thisWork.p1}</p>
                <img src={thisWork.imgDetail} alt={thisWork.altImgDetail}/>
                <p>{thisWork.p2}</p>
                <p>{thisWork.p3}</p>
            </div>

            <div className="portfolio-item-button">
                <button onClick={handleClick} className="btn">Back</button>
            </div>
        </>
    )
}

export default PortfolioItem