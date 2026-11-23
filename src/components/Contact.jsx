import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle
} from "react-icons/fa";

function Contact() {

    const [status, setStatus] = useState({
        type: "",
        message: "",
        fallbackUrl: ""
    });

    const [sending, setSending] = useState(false);


    const handleSubmit = async (event) => {

        event.preventDefault();

        const form = event.currentTarget;

        setStatus({
            type: "",
            message: "",
            fallbackUrl: ""
        });

        setSending(true);

        try {

            await emailjs.sendForm(
                "service_64ntk07",
                "template_k1qmzjn",
                form,
                "KCTDfzlgOpvogYv-h"
            );

            setStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon."
            });

            form.reset();

        } catch (error) {

            console.error(
                "EmailJS Error:",
                error
            );

            const formData = new FormData(form);
            const name = formData.get("name") || ""
            const email = formData.get("email") || ""
            const message = formData.get("message") || ""
            const subject = `Portfolio message from ${name}`
            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

            setStatus({
                type: "error",
                message: "EmailJS could not send the message.",
                fallbackUrl:
                    `mailto:suryachandran1045@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            });

        } finally {

            setSending(false);

        }
    };


    return (
        <section
            className="section contact"
            id="contact"
        >

            <div className="section-badge">

                <span>06</span>

                CONNECT

            </div>


            <div className="contact-grid">


                {/* =========================================
                    LEFT SIDE
                ========================================== */}

                <div className="contact-copy">

                    <h2>

                        Let's build

                        <span>
                            {" "}something useful.
                        </span>

                    </h2>


                    <p>

                        Interested in full stack development,
                        backend systems, enterprise workflows
                        or GenAI integrations?

                        <br />

                        Let's connect.

                    </p>


                    <div className="contact-links">


                        {/* EMAIL */}

                        <a
                            href="mailto:suryachandran1045@gmail.com"
                        >

                            <div>
                                <FaEnvelope />
                            </div>

                            <span>

                                <small>
                                    EMAIL
                                </small>

                                suryachandran1045@gmail.com

                            </span>

                        </a>


                        {/* LINKEDIN */}

                        <a
                            href="https://www.linkedin.com/in/suryac-pythonfullstackdeveloper/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div>
                                <FaLinkedin />
                            </div>

                            <span>

                                <small>
                                    LINKEDIN
                                </small>

                                suryac-pythonfullstackdeveloper

                            </span>

                        </a>


                        {/* GITHUB */}

                        <a
                            href="https://github.com/SuryaChandran1045"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div>
                                <FaGithub />
                            </div>

                            <span>

                                <small>
                                    GITHUB
                                </small>

                                SuryaChandran1045

                            </span>

                        </a>

                    </div>

                </div>


                {/* =========================================
                    CONTACT FORM
                ========================================== */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-row">


                        {/* NAME */}

                        <div className="form-group">

                            <label htmlFor="contact-name">
                                NAME
                            </label>

                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                autoComplete="name"
                                required
                                disabled={sending}
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="form-group">

                            <label htmlFor="contact-email">
                                EMAIL
                            </label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                required
                                disabled={sending}
                            />

                        </div>

                    </div>


                    {/* MESSAGE */}

                    <div className="form-group">

                        <label htmlFor="contact-message">
                            MESSAGE
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            rows="6"
                            placeholder="I would like to work with you..."
                            required
                            disabled={sending}
                        />

                    </div>


                    {/* =====================================
                        STATUS MESSAGE
                    ====================================== */}

                    {status.message && (

                        <div
                            className={
                                `contact-status ${
                                    status.type === "success"
                                        ? "success"
                                        : "error"
                                }`
                            }
                            role="status"
                        >

                            {status.type === "success" ? (
                                <FaCheckCircle />
                            ) : (
                                <FaExclamationCircle />
                            )}

                            <span>
                                {status.message}
                                {status.fallbackUrl && (
                                    <>
                                        {" "}
                                        <a href={status.fallbackUrl}>
                                            Open email app
                                        </a>
                                        {" or email "}
                                        <a href="mailto:suryachandran1045@gmail.com">
                                            suryachandran1045@gmail.com
                                        </a>
                                        {" directly."}
                                    </>
                                )}
                            </span>

                        </div>

                    )}


                    {/* SUBMIT BUTTON */}

                    <button
                        type="submit"
                        className="send-button"
                        disabled={sending}
                    >

                        {sending ? (
                            <>
                                <span className="button-spinner"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <FaPaperPlane />
                            </>
                        )}

                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;