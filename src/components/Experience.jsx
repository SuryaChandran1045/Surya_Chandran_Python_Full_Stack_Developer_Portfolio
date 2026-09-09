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
        label: "PREVIOUS ROLE",
        period: "JUN 2023 - JAN 2024",
        role: "Full Stack Developer Intern",
        company: "KodNest Technologies",
        description:
            "Gained hands-on experience with Java, Python, MySQL, HTML, CSS, JavaScript and React while contributing to real-time projects.",
        achievements: [
            "Contributed across the full development lifecycle and applied manual testing before deployment.",
            "Collaborated with the team to solve development and debugging challenges."
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