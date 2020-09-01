import React, { useState, useEffect } from 'react'
import './NavComp.css'

export default function NavComp() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://image.flaticon.com/icons/svg/826/826345.svg"
                alt="Netflix avatar"
            />
        </div>
    )
}
