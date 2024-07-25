import { faGithubAlt, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
    const profiles: {icon: IconDefinition, link: string } [] = [
        {
            icon: faGithubAlt,
            link: "https://github.com/davidchoy98"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/david-choy-6364681a2/"
        },
        {
            icon: faEnvelope,
            link: "mailto:davidchoy98@gmail.com"
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row px-5">
                <div className="col-4">
                    <div className="hstack gap-2">
                        {profiles.map((profile) => (
                            <a href={profile.link} className="btn">
                                <FontAwesomeIcon icon={profile.icon} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-8 text-end">
                    <small>&copy; 2024 David Choy. All Rights Reserved.</small>
                </div>
            </div>
        </div>
    );
}