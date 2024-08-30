"use client";

import moment from "moment";
import React, { ReactElement, useEffect, useState } from "react";
import ResumeButton from "../Elements/ResumeButton";

export default (): ReactElement => {
    const [experience, setExperience] = useState<Number>(0);

    useEffect(() => {
        setExperience(moment.duration(moment().diff(moment('2020-06-01', 'YYYY-MM-DD'))).years());
    }, []);
    
    return (
        <div id="about-me" className="mt-5">
            <h5 className="mb-5">{`<About Me />`}</h5>
            <p>
                Hello there, welcome to my little stage! I'm a {`${experience}`} years-old Fullstack Web Application Developer,
                holding a degree from Universiti Tunku Abdul Rahman (UTAR) in Malaysia. My fascination with the world
                of computers began at a very young age. It has been an ridiculously wonderfun and enjoyable journey
                since I dive in to the world of codes in 2017. My main focus is to build accessible software products at the
                same time astounding digital user-experience.
            </p>
            <p>
                Specializing in harnessing the power of technology to address the pain areas in business processes, I managed to
                digitized and streamlined the insurance purchasing processes. This initiative averages and additional 20,000 MYR
                monthly. Additionally, I assist businesses in managing valuable data and facilitating smoother operations over the years.
            </p>

            <ResumeButton className="btn-beige mt-4" />
        </div>
    );
}