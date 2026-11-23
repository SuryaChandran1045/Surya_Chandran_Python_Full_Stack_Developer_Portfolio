import { useState } from "react";

import {
    FaBrain,
    FaServer,
    FaReact,
    FaDatabase,
    FaCode,
    FaCloud
} from "react-icons/fa";

const categories = [
    {
        id: "languages",
        title: "Programming Languages",
        icon: <FaCode />,
        skills: [
            "Python",
            "JavaScript ES6+",
            "TypeScript",
            "SQL",
            "Bash",
            "HTML5",
            "CSS3"
        ]
    },
    {
        id: "frontend",
        title: "Frontend",
        icon: <FaReact />,
        skills: [
            "React.js",
            "Next.js",
            "Redux",
            "React Query",
            "Tailwind CSS",
            "Material UI",
            "Responsive Design"
        ]
    },
    {
        id: "backend",
        title: "Backend",
        icon: <FaServer />,
        skills: [
            "FastAPI",
            "Django",
            "Flask",
            "RESTful APIs",
            "SQLAlchemy",
            "Pydantic",
            "JWT / OAuth2",
            "Celery",
            "Background Tasks"
        ]
    },
    {
        id: "database",
        title: "Databases & Caching",
        icon: <FaDatabase />,
        skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "SQLAlchemy ORM",
            "Indexing"
        ]
    },
    {
        id: "devops",
        title: "DevOps & Tools",
        icon: <FaCloud />,
        skills: [
            "Docker",
            "Docker Compose",
            "Jenkins",
            "GitHub Actions",
            "Git",
            "Linux",
            "Nginx",
            "Postman",
            "VS Code",
            "Jira"
        ]
    },
    {
        id: "genai",
        title: "AI / GenAI",
        icon: <FaBrain />,
        skills: [
            "LangChain",
            "OpenAI API",
            "RAG",
            "Prompt Engineering",
            "HuggingFace",
            "Embeddings",
            "Milvus",
            "ChromaDB",
            "FAISS"
        ]
    }
];

function Skills() {
    const [selected, setSelected] = useState("languages");

    const activeCategory =
        categories.find(
            (category) => category.id === selected
        ) || categories[0];

    return (
        <section
            className="section skills"
            id="skills"
        >
            {/* =========================================
                SECTION HEADER
            ========================================= */}

            <div className="section-badge">
                <span>02</span>
                TECH STACK
            </div>

            <div className="skills-title">
                <h2>
                    My Technical
                    <span> Skills.</span>
                </h2>

                <p>
                    Select a category to inspect the
                    technologies I work with.
                </p>
            </div>


            {/* =========================================
                SKILLS LAYOUT
            ========================================= */}

            <div className="skills-layout">

                {/* =====================================
                    CATEGORY LIST
                ===================================== */}

                <div className="skill-categories">

                    {categories.map((category, index) => (
                        <button
                            type="button"
                            key={category.id}
                            className={
                                `skill-category ${
                                    selected === category.id
                                        ? "active"
                                        : ""
                                }`
                            }
                            onClick={() =>
                                setSelected(category.id)
                            }
                        >
                            {/* ICON */}

                            <div className="skill-icon">
                                {category.icon}
                            </div>


                            {/* DETAILS */}

                            <div className="skill-info">

                                <small>
                                    0{index + 1}
                                </small>

                                <h3>
                                    {category.title}
                                </h3>

                                <span>
                                    {category.skills.length}
                                    {" "}technologies
                                </span>

                            </div>


                            {/* ACTIVE DOT */}

                            <div className="skill-dot">
                                ●
                            </div>

                        </button>
                    ))}

                </div>


                {/* =====================================
                    LIGHTHOUSE
                ===================================== */}

                <div
                    className="skill-lighthouse"
                    key={activeCategory.id}
                >

                    {/* Radar rings */}

                    <div className="lighthouse-ring ring-small"></div>

                    <div className="lighthouse-ring ring-medium"></div>

                    <div className="lighthouse-ring ring-large"></div>


                    {/* =================================
                        SINGLE ROTATING LIGHT BEAM
                    ================================= */}

                    <div className="lighthouse-light-beam"></div>


                    {/* =================================
                        CENTER ICON ONLY
                    ================================= */}

                    <div className="lighthouse-core-inner">
                        {activeCategory.icon}
                    </div>


                    {/* =================================
                        SKILL LABELS
                    ================================= */}

                    <div className="lighthouse-skills">

                        {activeCategory.skills.map((skill, index) => {
                            const angle =
                                (-90 + (360 / activeCategory.skills.length) * index)
                                * (Math.PI / 180);
                            const left = 50 + Math.cos(angle) * 37;
                            const top = 50 + Math.sin(angle) * 37;

                            return (
                            <div
                                className="lighthouse-skill"
                                key={skill}
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    transform: "translate(-50%, -50%)"
                                }}
                            >
                                <span></span>

                                {skill}
                            </div>
                            );
                        })}

                    </div>


                    {/* =================================
                        ACTIVE CATEGORY LABEL
                    ================================= */}

                    <div className="lighthouse-caption">

                        <small>
                            ACTIVE LAYER
                        </small>

                        <strong>
                            {activeCategory.title}
                        </strong>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;