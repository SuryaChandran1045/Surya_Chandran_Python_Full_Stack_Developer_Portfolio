import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-logo">
    <img
        src="/favicon.ico"
        alt="SC"
    />
</div>

            <div className="footer-stack">
                PYTHON
                <span>•</span>
                PYTHON
                <span>•</span>
                FASTAPI
                <span>•</span>
                REACT.JS
            </div>

            <div className="footer-social">

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

            <span className="footer-copy">
                © 2026 SURYA C.
            </span>

        </footer>
    );
}

export default Footer;