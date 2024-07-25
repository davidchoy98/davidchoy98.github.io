"use client"

import React, { FC, ReactElement, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export const TypeWriter: FC = (): ReactElement => {
    useEffect(() => {
        const typeWriterOptions: {
            strings: string,
            autoStart: boolean,
            loop: boolean
        } = {
            strings: `I'm a Software Engineer aka Developer from Cheras, Malaysia. Find out more about me down below! Cheers!`,
            autoStart: true,
            loop: true
        };

        const TypeWriter: Typewriter = new Typewriter('.typewritter-wrapper', typeWriterOptions);

        return () => {
            TypeWriter.stop();
        };
    }, []);

    return (
        <div className="typewritter-wrapper"></div>
    );
}