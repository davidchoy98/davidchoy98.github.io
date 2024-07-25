import React, { FC, ReactElement } from "react";
import Image from "next/image";

export const NavBar: FC = (): ReactElement => {
    return (
        <div className="align-content-center position-sticky border border-dark-blue border-opacity-25 rounded mx-auto nav">
            <div className="d-flex justify-content-between px-5">
                <a href="#" className="navbar-brand text-decoration-none text-beige ms-4">
                    <Image
                        src={'/images/logo-transparent-beige.png'}
                        alt={`${process.env.websiteTitle}`}
                        width={60}
                        height={60}
                    />
                    <span className="ms-4">{process.env.websiteTitle}</span>
                </a>
                <div>
                    <a href="#about-me" className="btn text-beige mx-3 px-4 py-3">About Me</a>
                    <a href="#skills" className="btn text-beige mx-3 px-4 py-3">Skills</a>
                    <a href="#past-projects" className="btn text-beige mx-3 px-4 py-3">Showcase</a>
                </div>
                <a className="btn align-content-center text-beige px-5 call-action">Contact Me</a>
            </div>
        </div>
    );
}