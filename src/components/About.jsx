function About() {

    return (
        <section
            className="section"
            id="about"
        >

            <div className="section-badge">
                <span>01</span>
                PROFILE
            </div>

            <div className="section-heading">

                <h2>
                    Full stack
                    <span> problem solving.</span>
                </h2>

                <p>
                    I build scalable web applications that turn
                    complex business workflows into reliable,
                    easy-to-use products.
                </p>

            </div>

            <div className="about-grid">

                <div className="about-copy">

                    <p>
                        I'm a Python Full Stack Developer with
                        experience across FastAPI, React.js,
                        PostgreSQL and Redis, from API design to
                        responsive production interfaces.
                    </p>

                    <p>
                        My work covers RESTful APIs, authentication,
                        background tasks, database design, caching,
                        real-time features and enterprise automation.
                    </p>

                    <p>
                        I enjoy turning business requirements into
                        maintainable software that reduces manual
                        effort and makes everyday decisions faster.
                    </p>

                </div>

                <div className="about-terminal">

                    <div className="terminal-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="terminal-body">

                        <p>
                            <b>profile</b> = {"{"}
                        </p>

                        <p>
                            name:
                            <em>"Surya C"</em>
                        </p>

                        <p>
                            role:
                            <em>"Python Full Stack Developer"</em>
                        </p>

                        <p>
                            focus:
                            <em>"APIs + Workflows"</em>
                        </p>

                        <p>
                            framework:
                            <em>"FastAPI + React"</em>
                        </p>

                        <p>
                            api:
                            <em>"FastAPI"</em>
                        </p>

                        <p>
                            vector_db:
                            <em>"PostgreSQL + Redis"</em>
                        </p>

                        <p>
                            {"}"}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;