import {
    FaArrowRight,
    FaEye
} from "react-icons/fa";

function Hero() {

    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <div className="hero-kicker">
                    <span></span>
                    PYTHON FULL STACK DEVELOPER
                </div>

                <h1>
                    SURYA <strong>C.</strong>
                </h1>

                <div className="hero-subtitle">
                    BUILDING SCALABLE BUSINESS SYSTEMS.
                </div>

                <p className="hero-description">
                    Results-driven full stack developer building
                    production-ready applications with Python,
                    FastAPI, React.js, PostgreSQL and Redis.
                </p>

                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="primary-button"
                    >
                        Explore Work
                        <FaArrowRight />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                    >
                        View Resume
                        <FaEye />
                    </a>

                </div>

                <div className="hero-tags">
                    <span>PYTHON</span>
                    <i>•</i>
                    <span>FASTAPI</span>
                    <i>•</i>
                    <span>REACT.JS</span>
                    <i>•</i>
                    <span>POSTGRESQL</span>
                </div>

            </div>

            <div className="ai-visual">

                <div className="ai-grid"></div>

                <div className="ai-orbit orbit-a"></div>
                <div className="ai-orbit orbit-b"></div>
                <div className="ai-orbit orbit-c"></div>

                <div className="ai-glow"></div>

                <div className="ai-core">

                    <div className="ai-core-ring"></div>

                    <div className="ai-core-text">
    <img
        src="/favicon.ico"
        alt="SC"
    />
</div>

                </div>

                <div className="ai-status">
                    <span>AI ENGINE</span>
                    <strong>ONLINE</strong>
                </div>

                <div className="ai-node node-rag">
                    <span></span>
                    RAG
                </div>

                <div className="ai-node node-llm">
                    <span></span>
                    LLM
                </div>

                <div className="ai-node node-agent">
                    <span></span>
                    AGENT
                </div>

                <div className="ai-node node-vector">
                    <span></span>
                    VECTOR DB
                </div>

                <div className="ai-code code-rag">
                    retriever.search()
                </div>

                <div className="ai-code code-agent">
                    agent.route()
                </div>

                <div className="ai-code code-api">
                    response: 200
                </div>

            </div>

        </section>
    );
}

export default Hero;