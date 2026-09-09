import { useEffect, useState } from "react";

import {
    FaGithub,
    FaLinkedin,
    FaBars,
    FaTimes
} from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {

        document.body.classList.toggle(
            "menu-open",
            menuOpen
        );

        return () => {
            document.body.classList.remove("menu-open");
        };

    }, [menuOpen]);

    return (
        <>
            <header className="navbar">

                <a
    href="#home"
    className="nav-logo"
    onClick={closeMenu}
>
    <img
        src="/favicon.ico"
        alt="SC"
    />
</a>

                <div className="nav-status">
                    <span className="status-dot"></span>
                    PYTHON FULL STACK DEVELOPER
                </div>

                <nav className="desktop-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Work</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        Resume
                    </a>
                </nav>

                <div className="nav-social">

                    <a
                        href="https://github.com/SuryaChandran1045"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/surya-chandran-217492435"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                </div>

                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </header>

            <div
                className={`mobile-menu ${
                    menuOpen ? "open" : ""
                }`}
            >

                <div className="mobile-menu-header">

                    <span>SC_ / NAVIGATION</span>

                    <button onClick={closeMenu}>
                        <FaTimes />
                    </button>

                </div>

                <nav>

                    <a href="#home" onClick={closeMenu}>
                        <span>01</span> Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        <span>02</span> About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        <span>03</span> Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        <span>04</span> Work
                    </a>

                    <a href="#experience" onClick={closeMenu}>
                        <span>05</span> Experience
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        <span>06</span> Education
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        <span>07</span> Contact
                    </a>

                </nav>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-resume"
                    onClick={closeMenu}
                >
                    View Resume
                </a>

            </div>
        </>
    );
}

export default Navbar;