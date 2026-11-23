const experiences = [
    {
        label: "CURRENT ROLE",
        period: "SEP 2024 - PRESENT",
        role: "Python Full Stack Developer",
        company:
            "Nilgiri Likemind Technologies Private Limited",
        description:
            "Developing scalable client-facing applications with Python, FastAPI, React.js, PostgreSQL and Redis across the full development lifecycle.",
        achievements: [
            "Designed RESTful APIs, background task queues, JWT authentication and database models, improving API reliability by ~30%.",
            "Implemented Redis caching, session management and rate limiting, reducing average API latency by ~25-30%.",
            "Built responsive React.js interfaces with state management, component libraries and real-time updates."
        ]
    },
    {
        label: "PROJECT EXPERIENCE",
        period: "APR 2025 - PRESENT",
        role: "TeaMS ERP — Full Stack Developer",
        company: "Nilgiri Likemind Technologies",
        description:
            "Building and enhancing ERP workflows for 100+ daily users across seven core modules.",
        achievements: [
            "Developed 20+ REST API endpoints for workflows, integrations, authentication and frontend data exchange.",
            "Designed normalized SQL schemas and indexing strategies that improved report generation by ~30%.",
            "Implemented JWT-secured role-based access and unit/API tests with ~80% core-module coverage."
        ]
    },
    {
        label: "PROJECT EXPERIENCE",
        period: "APR 2024 - MAY 2025",
        role: "Stanes I2P — Full Stack Developer",
        company: "Stanes Tea Estate",
        description:
            "Developed an Indent-to-Purchase platform using FastAPI, React.js, PostgreSQL and Redis.",
        achievements: [
            "Digitized ~80% of manual procurement workflows across demand, supplier and approval processes.",
            "Built intelligent price comparisons and document pipelines, reducing decision and retrieval time.",
            "Automated multi-level approvals, notifications and real-time status dashboards."
        ]
    }
];

function Experience() {

    return (
        <section
            className="section experience"
            id="experience"
        >

            <div className="section-badge">
                <span>04</span>
                EXPERIENCE
            </div>

            <div className="experience-title">

                <h2>
                    Building products
                    <span> for real workflows.</span>
                </h2>

            </div>

            <div className="timeline">

                {experiences.map((job) => (

                    <div
                        className="timeline-item"
                        key={job.role}
                    >

                        <div className="timeline-marker">
                            <span></span>
                        </div>

                        <div className="timeline-meta">

                            <span>{job.label}</span>

                            <small>
                                {job.period}
                            </small>

                        </div>

                        <div className="timeline-card">

                            <h3>
                                {job.role}
                            </h3>

                            <h4>
                                {job.company}
                            </h4>

                            <p>
                                {job.description}
                            </p>

                            <ul>

                                {job.achievements.map(
                                    (achievement) => (
                                        <li key={achievement}>
                                            {achievement}
                                        </li>
                                    )
                                )}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Experience;