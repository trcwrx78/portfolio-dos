import React from 'react'

function Services() {
    return(
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>I enjoy bringing new ideas to life. I believe listening plays a key role and as a designer the only way to accurately 
                        create a vision. The fun part after finding the client’s needs is putting together the mood boards, style tiles, patterns, 
                        and mock-ups. Maybe even better though, is to see those ideas translated to the painstakingly detailed code that I created to make this happen.</p>
                </div> 
                
                <div className="service">
                    <h3>React.js</h3>
                    <p>One of my passions is to learn and the moment I took up React I did not look back. Working in this framework has been 
                        exciting and challenging. I have experience in building apps in the latest functional methodology and using hooks to manage 
                        the state of my application. I am familiar with legacy forms also and love retrofitting them to todays standards.</p>
                </div> 
                
                <div className="service">
                    <h3>WordPress</h3>
                    <p>Managing content is so important now. Setting up a new fancy Wordpress theme is no sweat here. I have built multiple custom themes 
                        also to fit clients business needs. If your needs are basic or want something more complex I can help. Also, if your site is not 
                        up to your business standards I would be excited to spice it up.</p>
                </div> 
            </div> 
            
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}

export default Services