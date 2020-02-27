import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'


function Header() {
    const [navToggle, setNavToggle] = useState(false)
    let { url } = useRouteMatch()

    function handleMenuChange() {
        setNavToggle(prevNav => !prevNav)
    }

    useEffect(() => {
        const addClass = document.body.classList
        navToggle ? addClass.add('nav-open') : addClass.remove('nav-open')
    })

    const navItems = ["Home", "Services", "About", "Work"]
    const navItemBuild = navItems.map((item, i) => (
        <li className="nav__item" key={i}>
            <a href={`${url}#${item.toLowerCase()}`} className="nav__link" onClick={handleMenuChange}>{item}</a>
        </li>
    ))

    return(
        <header>
            <div className="logo">
                <img src="/img/torrencecole.png" alt="" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={handleMenuChange}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    {navItemBuild}
                </ul>
            </nav>
        </header>
    )
}

export default Header