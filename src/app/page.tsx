import React, { ReactElement } from 'react';
import { TypeWriter } from '@/components/UI/TypeWriter';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGitAlt, faGithub, faHtml5, faJs, faLaravel, faPhp, faReact, faSass, faVuejs, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import AboutMe from '@/components/UI/Sections/AboutMe';
import moment from 'moment';
import ResumeButton from '@/components/UI/Elements/ResumeButton';

export default (): ReactElement => {
    type ObjectFit = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' | 'initial' | 'inherit';

    const skills: {
        icon: IconDefinition,
        name: string
    }[] = [
        {
            icon: faPhp,
            name: "PHP"
        },
        {
            icon: faLaravel,
            name: "Laravel"
        },
        {
            icon: faHtml5,
            name: "HTML"
        },
        {
            icon: faCss3,
            name: "CSS"
        },
        {
            icon: faSass,
            name: "Sass"
        },
        {
            icon: faBootstrap,
            name: "Bootstrap"
        },
        {
            icon: faJs,
            name: "JavaScript"
        },
        {
            icon: faVuejs,
            name: "Vue.js"
        },
        {
            icon: faReact,
            name: "React"
        },
        {
            icon: faGithub,
            name: "GitHub"
        },
        {
            icon: faGitAlt,
            name: "Git"
        },
        {
            icon: faFigma,
            name: "Figma"
        }
    ];

    const projects: {
        description: string,
        name: string,
        url: string,
        image: string,
        fit: ObjectFit,
        stack: {
            name: string,
            icon: IconDefinition
        }[]
    }[] = [
        {
            description: "A public-facing insurance purchase platform that provides real-time insurance policy issuance upon purchase, as the name suggests, by streamlining and automating the insrance purchasing process.",
            fit: "cover",
            image: "instaPol-main.png",
            name: "instaPol",
            stack: [
                { name: "Laravel", icon: faLaravel },
                { name: "jQuery", icon: faJs },
                { name: "Bootstrap", icon: faBootstrap },
                { name: "MySQL", icon: faDatabase },
            ],
            url: "https://instapol.my",
        },
        {
            description: "",
            fit: "contain",
            image: "mindtree-login.png",
            name: "Xing Fu Li",
            stack: [
                { name: "Laravel", icon: faLaravel },
                { name: "Vue.js", icon: faVuejs },
                { name: "React Native", icon: faReact },
                { name: "MySQL", icon: faDatabase },
            ],
            url: "https://admin.xingfuli.co",
        },
        {
            description: "Gym management system consisting of 4 mobile applications, a back-office and a backend API involved in the data management.",
            fit: "contain",
            name: "Fight Zone",
            url: "https://admin.fightzonesg.com",
            stack: [
                { name: "Laravel", icon: faLaravel },
                { name: "Vue.js", icon: faVuejs },
                { name: "React Native", icon: faReact },
                { name: "MySQL", icon: faDatabase },
            ],
            image: "fightzone-login.png",
        }
    ];

    const experiences = [
        {
            name: "My Insure Link",
            logo: "mil.jpeg",
            start_date: "2020-06-08",
            end_date: "2021-04-30",
            tasks: [
                "Worked on an insurance selling platform and event tracking using Google Analytics",
                "Involved in migration from CodeIgniter 2 to Laravel 5.x",
                "Heavily involved in API integration with third-party APIs, including payment gateways."
            ]
        },
        {
            name: "Howden Insurance Brokers",
            logo: "howden.png",
            start_date: "2021-05-01",
            end_date: "2022-05-17",
            tasks: [
                "Worked on multiple insurance selling web applications using Laravel 8.x and ReactJS",
                "Proposed ways to improve security of the systems and helped to rectify the security risks found",
                "Developed a multi-function intranet system from scratch using Laravel",
                "Involved in full SDLC cycle from requirement gathering to deployment for all the projects"
            ]
        },
        {
            name: "Sparksoft",
            logo: "sparksoft.png",
            start_date: "2022-05-23",
            end_date: "2024-08-30",
            tasks: [
                "Introduced type system to the APIs and error reporting mechanism to the development and DevOps team",
                "Integrated third-party services like payment gateways, broadcasting services and AWS Services (S3, SES, etc.)",
                "Involved in UI / UX design, optimization, and enhancements."
            ]
        }
    ];

    const educations = [
        {
            name: "Universiti Tunku Abdul Rahman",
            level: "Foundation in Science",
            skill: "C++",
            start_date: "May 2016",
            end_date: "May 2017"
        },
        {
            name: "Universiti Tunku Abdul Rahman",
            level: "Bachelor's Degree in Science (Hons)",
            field: "Software Engineering",
            start_date: "May 2017",
            end_date: "May 2020"
        }
    ];

    return (
        <>
            <div className="hero-header align-content-center px-4">
                <h4 className="mb-3">Hi There!</h4>
                <h2 className="mb-5">This is David Choy, a Full-Stack Web Developer</h2>

                <TypeWriter />

                <ResumeButton className="text-beige mt-5" />
            </div>
            <div className="container content px-4">
                <AboutMe />
                <div id="skills" className="mt-5">
                    <h5 className="mb-5">{`<Skills />`}</h5>
                    <div className="hstack gap-3 justify-content-center">
                        {skills.map((skill) => (
                            <div className="card">
                                <div className="card-body d-flex flex-row align-items-center justify-content-center">
                                    <FontAwesomeIcon className="face" icon={skill.icon} size="3x" fixedWidth />
                                    <p className="position-absolute mb-0 back">{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="work-experience" className="row mt-5">
                    <div className="col-12">
                        <h5 className="mb-5">{`<Work Experience />`}</h5>
                        {experiences.map((experience, index) => (
                            moment(experience.start_date).isBefore(moment()) && (
                                <div key={index} className="timeline-wrapper">
                                    <div className="timeline-content">
                                        <div className="row">
                                            <div className={`col-6 ${index % 2 === 0 ? 'border-end' : 'offset-6 border-start'} border-2 border-beigish-grey timeline ${index % 2 === 0 ? 'tip-right' : 'tip-left'}`}>
                                                <div className={`card timeline-content-body`}>
                                                    <div className="card-body py-5 ps-4 pe-5">
                                                        <span className="badge text-bg-beigish-grey">
                                                            {
                                                                `${moment(experience.start_date).format('MMM YYYY')} -
                                                                ${moment.isMoment(moment(experience.end_date)) ? 
                                                                    moment(experience.end_date).format('MMM YYYY') :
                                                                    'Present'
                                                                }`
                                                            }
                                                        </span>
                                                        <h3 className="mt-2 mb-3">{experience.name}</h3>
                                                        <ul>
                                                            {experience.tasks.map((task) => (
                                                                <li>{task}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div id="past-projects" className="mt-5">
                    <h5 className="mb-5">{`<Past Projects />`}</h5>
                    {projects.map((project) => (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4 bg-secondary">
                                    <div className="card-body rounded ps-5 overflow-hidden">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <Image
                                                    className="rounded-circle bg-beigish-grey p-1"
                                                    alt={project.name}
                                                    src={`/images/portfolio/${project.name.toLowerCase().replaceAll(' ', '_')}-logo.png`}
                                                    width={60}
                                                    height={50}
                                                />
                                                <h4 className="mt-3">{project.name}</h4>
                                                <p className="text-beigish-grey-400">{project.description}</p>
                                                <div className="hstack gap-3">
                                                    {project.stack.map((stack) => (
                                                        <span className="badge rounded-pill text-beige bg-dark bg-opacity-25 font-monospace px-3 py-2">
                                                            <FontAwesomeIcon icon={stack.icon} className="me-2" />
                                                            {stack.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-6 align-self-start">
                                                <div className="image-container ps-3 ">
                                                    <Image
                                                        src={`/images/portfolio/${project.image}`}
                                                        alt={`${project.name}-landing`}
                                                        width={700}
                                                        height={700}
                                                        style={{
                                                            objectFit: project.fit,
                                                            objectPosition: "0% 0%",
                                                            borderTopLeftRadius: "3rem"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}