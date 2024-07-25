import React, { ReactElement } from 'react';
import { TypeWriter } from '@/components/TypeWriter';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFile } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGitAlt, faGithub, faHtml5, faJs, faLaravel, faPhp, faReact, faSass, faVuejs, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export default (): ReactElement => {
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
        fit: string,
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

    return (
        <>
            <div className="hero-header align-content-center px-4">
                <h4 className="mb-3">Hi There!</h4>
                <h2 className="mb-5">This is David Choy, a Full-Stack Web Developer</h2>

                <TypeWriter />

                <button className="btn btn-primary text-beige rounded mt-5 px-4 py-2">
                    Resume <FontAwesomeIcon icon={faFile} size="lg" fixedWidth />
                </button>
            </div>
            <div className="content px-4">
                <div className="about-me mt-5">
                    <h5 className="mb-5">{`<About Me />`}</h5>
                    <p>
                        Welcome to my corner of the web! I'm passionate about technology and innovation, with a keen 
                        interest in coding, problem-solving, and creating meaningful projects. I am a dedicated 
                        Software Engineer with a degree from Universiti Tunku Abdul Rahman (UTAR), specializing in
                        web application development for over 4 years. Passionate about problem-solving and innovation,
                        I strive to deliver high-quality code and exceptional user experiences in every project I undertake.
                    </p>
                </div>
                <div className="skills mt-5">
                    <h5 className="mb-5">{`<Skills />`}</h5>
                    <div className="hstack gap-3">
                        {skills.map((skill) => (
                            <div className="card">
                                <div className="card-body d-flex flex-row align-items-center justify-content-center">
                                    <FontAwesomeIcon className="face" icon={skill.icon} size="5x" fixedWidth />
                                    <p className="position-absolute mb-0 back">{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="past-projects mt-5">
                    <h5 className="mb-5">{`<Past Projects />`}</h5>
                    {projects.map((project) => (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4 bg-secondary">
                                    <div className="card-body rounded ps-5 overflow-hidden">
                                        <div className="row align-items-center">
                                            <div className="col-5">
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
                                            <div className="col-7 align-self-start">
                                                <div className="image-container ps-3 ">
                                                    <Image
                                                        src={`/images/portfolio/${project.image}`}
                                                        alt={`${project.name}-landing`}
                                                        width={1500}
                                                        height={1500}
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