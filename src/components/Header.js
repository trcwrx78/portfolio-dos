import React, { useState, useEffect } from 'react'


function Header() {
    const [navToggle, setNavToggle] = useState(false)

    function handleMenuChange() {
        setNavToggle(prevNav => !prevNav)
    }

    useEffect(() => {
        const addClass = document.body.classList
        navToggle ? addClass.add('nav-open') : addClass.remove('nav-open')
    })

    const navItems = ["Home", "Services", "About", "Work"]
    const navItemBuild = navItems.map((item, i) => (
        <li className="nav__item" key={i}><a href={`#${item.toLowerCase()}`} className="nav__link" onClick={handleMenuChange}>{item}</a></li>
    ))

    return(
        <header>
            <div className="logo">
                <img src="/img/devjane.png" alt="" />
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