import React from "react";
import "./home.css";
import { Link } from "react-router";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { FaLinkedin, FaGithub, FaFolder } from "react-icons/fa";
import ProfilePic from "../../assets/profile.jpg";
import AboutPic from "../../assets/about.jpg";

function Home() {
    return (
        <div>

            <NavBar />

            {/* Hero Section */}
            <section className="home-hero">
                <div className="home-hero-left">
                    <h1>
                        <span className="home-highlight">Marwan Al-Obaidi</span>
                    </h1>
                    <p>
                        Software engineer with experience in web, mobile, game and UI/UX development.
                    </p>
                </div>
                <div className="home-hero-right">
                    <img src={ProfilePic} alt="Marwan Al-Obaidi" />
                </div>
            </section>

            {/* About Section */}
            <section className="home-about" id="about">
                <div className="home-about-row">
                    <div className="home-about-image">
                        <img src={AboutPic} alt="About Marwan" />
                    </div>
                    <div className="home-about-text">
                        <h2>About Me</h2>
                        <p>
                            I am a versatile software engineer with a <strong>Bachelor of Engineering</strong> in IT from Metropolia University
                            of Applied Sciences, where I majored in <strong>Smart IoT Systems</strong> and minored in Embedded Systems. I have
                            hands-on experience in web and mobile development using <strong>HTML, CSS, JavaScript, React, Node.js, Google Cloud Platform,
                                and Firebase</strong>. I also use <strong>Unity</strong> in game development, <strong>Robot Framework</strong> in testing
                            out my projects, and <strong>Figma</strong> in designing clean and user-friendly interfaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="home-skills" id="skills">
                <h2 className="home-skills-title">Relevant Skills</h2>
                <div className="home-skills-row">
                    <div className="home-skills-column">
                        <h3>Web Development</h3>
                        <ul>
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>Chart.js</li>
                            <li>Three.js</li>
                            <li>React.js</li>
                            <li>React Native</li>
                            <li>Node.js</li>
                            <li>Postman</li>
                            <li>Firebase / GCP</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Electron</li>
                        </ul>
                    </div>
                    <div className="home-skills-column">
                        <h3>Technologies & Tools</h3>
                        <ul>
                            <li>Linux</li>
                            <li>Unity</li>
                            <li>Blender</li>
                            <li>Robot Framework</li>
                            <li>Jira</li>
                            <li>Git</li>
                            <li>FreeRTOS</li>
                            <li>Figma</li>
                            <li>Penpot</li>
                        </ul>
                    </div>
                    <div className="home-skills-column">
                        <h3>Programming</h3>
                        <ul>
                            <li>C / C# / C++</li>
                            <li>Python</li>
                        </ul>
                        <h3>Languages</h3>
                        <ul>
                            <li>Finnish</li>
                            <li>English</li>
                            <li>Arabic</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="home-contact" id="portfolio">
                <h2 className="home-contact-title">Portfolio</h2>
                <p className="home-portfolio-text">My portfolio highlights my best work from both professional and academic projects.</p>
                <div className="home-contact-icons">
                    <Link className="home-contact-link" to="/portfolio">
                        <FaFolder size={30} />
                        <span>Portfolio</span>
                    </Link>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="home-timeline" id="timeline">
                <h2 className="home-timeline-title">My Journey</h2>
                <div className="home-timeline-container">
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">Now</div>
                        <div className="home-timeline-content">
                            <h3>Freelancer: Web Developer</h3>
                            <p>Working as a freelancer for multiple projects.</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2024</div>
                        <div className="home-timeline-content">
                            <h3>Graduated from Metropolia UAS</h3>
                            <h4>Bachelor of Engineering in IT</h4>
                            <p>Major: Smart IoT Systems</p>
                            <p>Minor: Embedded</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2024</div>
                        <div className="home-timeline-content">
                            <h3>Thesis Project: Building a Cross-Platform Application Using AI Tools</h3>
                            <h4>Bachelor's Thesis</h4>
                            <p>Demonstrated how to build a cross-platform educational application for web, mobile, and desktop using various frameworks with AI assistance.</p>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://www.theseus.fi/handle/10024/857058" target="_blank" rel="noopener noreferrer">Link to Thesis</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2023</div>
                        <div className="home-timeline-content">
                            <h3>Web and Mobile Developer Intern</h3>
                            <h4>AIoT Garage</h4>
                            <p>Contributed to multiple projects for startups:</p>
                            <ul>
                                <li className="home-timeline-list"><strong>YourTutor:</strong> Tutoring platform using React.js and Firebase.</li>
                                <li className="home-timeline-list"><strong>VAPU:</strong> Promotional website for a startup using React.js.</li>
                                <li className="home-timeline-list"><strong>BOND:</strong> Mobile networking platform for college students using React Native.</li>
                                <li className="home-timeline-list"><strong>ReCycle:</strong> Mobile app for selling unused construction equipment using React Native, Firebase, and Figma.</li>
                            </ul>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://www.linkedin.com/feed/update/urn:li:activity:7075422003951804417/" target="_blank" rel="noopener noreferrer">Link to YourTutor</a><br />
                                <a className="home-timeline-link" href="https://www.linkedin.com/feed/update/urn:li:activity:7088478788405096448/" target="_blank" rel="noopener noreferrer">Link to BOND</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2023</div>
                        <div className="home-timeline-content">
                            <h3>3D Modelling & Mixed Reality Applications Course</h3>
                            <h4>Large Scale University Course</h4>
                            <p>Learned skills such as 3D modeling, Web3D, WebVR, 3D scanning, panorama imaging, 360 videos, and game development.</p>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://github.com/MarwanAl-Obaidi/3D-Modelling-and-mixed-reality-applications" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2023</div>
                        <div className="home-timeline-content">
                            <h3>VR Zoo</h3>
                            <h4>Virtual Reality Project</h4>
                            <p>A virtual reality zoo simulation built with Unity and C#.</p>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://github.com/DanielRadvanyi/VR-Zoo" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2023</div>
                        <div className="home-timeline-content">
                            <h3>Game Design</h3>
                            <h4>University Course</h4>
                            <p>Studied game design concepts including gamification, monetization, and production processes. The final project was about writing our own GDD (game design document).</p>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://github.com/MarwanAl-Obaidi/Game-Design" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2022</div>
                        <div className="home-timeline-content">
                            <h3>Innovation Project</h3>
                            <h4>Taxi Drivers App</h4>
                            <p>Designed an app for taxi drivers to monitor airport landings and maximize profits using React.js.</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2022</div>
                        <div className="home-timeline-content">
                            <h3>Game Engines</h3>
                            <h4>University Course</h4>
                            <p>A course I did that teaches the student to understand what kind of game engines and libraries are available. Student also learns basics of 2D and 3D graphics, and can manage the workflow between different tools. The final assignment was a game made using Unity.</p>
                            <div className="home-timeline-link-group">
                                <a className="home-timeline-link" href="https://github.com/MarwanAl-Obaidi/Game-Engines" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2021</div>
                        <div className="home-timeline-content">
                            <h3>IoT Group Project</h3>
                            <h4>Controlled Environment System</h4>
                            <p>Developed a controlled environment using microcontrollers, MongoDB, Node.js and Chart.js.</p>
                        </div>
                    </div>
                    <div className="home-timeline-item">
                        <div className="home-timeline-date">2018</div>
                        <div className="home-timeline-content">
                            <h3>Graduated from The English School of Helsinki</h3>
                            <h4>High School Diploma</h4>
                            <p>Final matriculation examinations in:</p>
                            <ul>
                                <li className="home-timeline-list">English</li>
                                <li className="home-timeline-list">Finnish</li>
                                <li className="home-timeline-list">Mathematics</li>
                                <li className="home-timeline-list">Chemistry</li>
                                <li className="home-timeline-list">Biology</li>
                            </ul>
                            <p>Other achievements:</p>
                            <ul>
                                <li className="home-timeline-list">Art Diploma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="home-contact" id="contact">
                <h2 className="home-contact-title">Where to Find Me</h2>
                <div className="home-contact-icons">
                    <a href="https://www.linkedin.com/in/marwan-al-obaidi/" target="_blank" rel="noopener noreferrer" className="home-contact-link">
                        <FaLinkedin size={30} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/MarwanAl-Obaidi" target="_blank" rel="noopener noreferrer" className="home-contact-link">
                        <FaGithub size={30} />
                        <span>GitHub</span>
                    </a>
                </div>
            </section>

            <Footer />

        </div>
    );
}

export default Home;