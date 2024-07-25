"use client"

import React, { FC, ReactElement } from "react";
import Typewriter from "typewriter-effect";

export const TypeWriter: FC = (): ReactElement => {
    const typeWriterOptions: {
        strings: string,
        autoStart: boolean,
        loop: boolean
    } = {
        strings: `I'm a Software Engineer aka Developer from Cheras, Malaysia. Find out more about me down below! Cheers!`,
        autoStart: true,
        loop: true
    };

    return (
        <Typewriter
            options={typeWriterOptions}
        />
    );
}