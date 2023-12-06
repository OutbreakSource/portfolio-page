
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import github from "./github-mark.svg";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';

const Project = ({ image }) => {
    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`miniContainer ${isInView ? 'fadeIn visible' : ''}`}
            style={{ animationDelay: `${0.1}s` }}
        >
            <div className="text">
                <p>{image.title}</p>
                {(image.api)  && (<p>API is currently off</p>)}
                <p>Purpose: {image.purp}</p>
                <p>{image.text}</p>
                <p>Responsibilities: {image.respo}</p>
            </div>
            <div className="image-container">
                <iframe
                    title={"dini"}
                    width="854"
                    height="480"
                    src={"https://www.youtube.com/embed/" + image.src}
                    allow='autoplay; encrypted-media'
                    style={{ margin: '0 auto' }}
                ></iframe>
            </div>
            <div className={"iconContainer"}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" style={{ scale: 1 }} />
                </a>
                {image.live != null && (
                    <IconButton href={image.live} target={"_blank"} style={{ right: 8 }}>
                        <ExitToAppIcon style={{ fontSize: "95px" }} />
                    </IconButton>
                )}
            </div>
        </div>
    );
};

export default Project;
