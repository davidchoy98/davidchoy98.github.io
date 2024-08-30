import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar: FC = (): ReactElement => {
    return (
        <div id="nav" className="container-fluid align-content-center position-sticky border border-dark-blue border-opacity-25 rounded mx-auto">
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
                    <Link href="#about-me" className="btn text-beige mx-3 px-4 py-3">About Me</Link>
                    <Link href="#skills" className="btn text-beige mx-3 px-4 py-3">Skills</Link>
                    <Link href="#past-projects" className="btn text-beige mx-3 px-4 py-3">Showcase</Link>
                </div>
                <a className="btn align-content-center text-beige px-5 call-action">Contact Me</a>
            </div>
        </div>
    );
}