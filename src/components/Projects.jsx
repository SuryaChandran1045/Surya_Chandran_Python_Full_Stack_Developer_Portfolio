import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa";


const projects = [
    {
        id: 1,

        number: "01",

        title: "Stanes I2P",

        type: "FULL STACK PROCUREMENT PLATFORM",

        description:
            "Indent-to-Purchase platform for a tea estate, digitizing demand tracking, supplier management and multi-level approvals.",

        technologies: [
            "FASTAPI",
            "REACT.JS",
            "POSTGRESQL",
            "REDIS"
        ],

        impact:
            "80% OF MANUAL WORKFLOWS DIGITIZED",

        image:
            "/images/teams-ai.png",

        github:
            "https://github.com/SuryaChandran1045",

        demo:
            "https://github.com/SuryaChandran1045"
    },

    {
        id: 2,

        number: "02",

        title: "TeaMS ERP",

        type: "ENTERPRISE RESOURCE PLANNING",

        description:
            "ERP functionality for tea estate operations across seven core modules, supporting business workflows and 100+ daily users.",

        technologies: [
            "PYTHON",
            "FASTAPI",
            "REACT.JS",
            "SQL"
        ],

        impact:
            "25% LESS MANUAL DATA ENTRY",

        image:
            "/images/rag-call-center.png",

        github:
            "https://github.com/SuryaChandran1045",

        demo:
            "https://github.com/SuryaChandran1045"
    },

    {
        id: 3,

        number: "03",

        title: "API & Workflow Systems",

        type: "BACKEND ENGINEERING",

        description:
            "Production-ready backend capabilities including authentication, background task queues, database models, caching and rate limiting.",

        technologies: [
            "PYTHON",
            "FASTAPI",
            "JWT",
            "CELERY",
            "REDIS"
        ],

        impact:
            "25–30% LOWER API LATENCY",

        image:
            "/images/expense-audit.png",

        github:
            "https://github.com/SuryaChandran1045",

        demo:
            "https://github.com/SuryaChandran1045"
    }
];


function Projects() {

    return (
        <section
            className="section projects"
            id="projects"
        >

            {/* =========================================
                SECTION HEADER
            ========================================== */}

            <div className="section-badge">

                <span>03</span>

                SELECTED WORK

            </div>


            <div className="projects-title">

                <h2>

                    AI systems

                    <span> I've built.</span>

                </h2>


                <p>

                    Real-world AI, RAG and automation
                    work from my engineering journey.

                </p>

            </div>


            {/* =========================================
                PROJECT GRID
            ========================================== */}

            <div className="projects-grid">

                {projects.map((project) => (

                    <article
                        className="project-card"
                        key={project.id}
                    >

                        {/* =================================
                            PROJECT IMAGE
                        ================================= */}

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                            />


                            {/* PROJECT NUMBER */}

                            <span className="project-number">
                                {project.number}
                            </span>

                        </div>


                        {/* =================================
                            PROJECT CONTENT
                        ================================= */}

                        <div className="project-content">


                            {/* PROJECT TYPE */}

                            <small>
                                {project.type}
                            </small>


                            {/* TITLE */}

                            <h3>
                                {project.title}
                            </h3>


                            {/* DESCRIPTION */}

                            <p>
                                {project.description}
                            </p>


                            {/* TECHNOLOGIES */}

                            <div className="project-tags">

                                {project.technologies.map(
                                    (technology) => (

                                        <span
                                            key={technology}
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>


                            {/* =================================
                                FOOTER
                            ================================= */}

                            <div className="project-footer">


                                {/* IMPACT */}

                                <strong>
                                    {project.impact}
                                </strong>


                                {/* LINKS */}

                                <div>

                                    {/* GITHUB */}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={
                                            `${project.title} GitHub`
                                        }
                                        title="View GitHub"
                                    >
                                        <FaGithub />
                                    </a>


                                    {/* DEMO / PROJECT */}

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={
                                            `Open ${project.title}`
                                        }
                                        title="Open Project"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;