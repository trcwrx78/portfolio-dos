import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <footer className="footer">
            <a href="mailto:me@torrencecole.com" className="footer__link">me@torrencecole.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="https://codepen.io/trcwrx78">
                        <FontAwesomeIcon icon={['fab', 'codepen']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/torrencecole">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TRC_3">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="https://github.com/trcwrx78">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer