import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";

interface IButtonProps {
    className?: string
}

export default (props: IButtonProps): ReactElement => {
    return (
        <a href="/Resume_David.pdf" className={`btn btn-primary rounded px-4 py-2 ${props.className}`} download>
            Resume <FontAwesomeIcon icon={faFile} size="lg" fixedWidth />
        </a>
    );
}