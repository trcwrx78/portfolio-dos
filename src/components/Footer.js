import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <footer className="footer">
            <a href="mailto:hello@jane.dev" className="footer__link">hello@jane.dev</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io">
                        <FontAwesomeIcon icon={['fab', 'codepen']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="http://dribbble.com">
                        <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer