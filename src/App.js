import React from 'react';
import Project from './Project';
import {projects} from './data';
import './App.css';
import { useState, useEffect } from 'react';


const App = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const targetDate = new Date('2023-01-23');

    if (isNaN(targetDate.getTime())) {
        console.error("Invalid target date format. Please use the format YYYY-MM-DD.");
    }

    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const updateExperience = () => {
            const currentDate = new Date();
            const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
            const timeDifference = currentDate - targetDate;
            const yearsDifference = (timeDifference / millisecondsPerYear).toFixed(10);

            setYearsOfExperience(parseFloat(yearsDifference));
        };

        const intervalId = setInterval(updateExperience, 0);

        return () => clearInterval(intervalId);
    }, [targetDate]);




    return (
        <div>
            <div className="circle">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle medium shade4"></div>
                <div className="circle small shade5"></div>
            </div>

            <div className="container">
                <div className="textMain">
                    <text>Daniel Martinez</text>
                    <text>Denver, CO</text>
                    <text>Metropolitan State University of Denver</text>
                    <text>Bachelors of Applied Science in Computer Science with a minor in math</text>
                    <h3>Tools and Languages:</h3>
                    <text>Java, Python, GCP, React.js</text>
                    <h3>Years of experience:</h3>
                    <text>{yearsOfExperience}</text>
                    <h3>Current employer:</h3>
                    <text>Charles Schwab</text>
                    <h3>Current role:</h3>
                    <text>Software Engineer II</text>
                    <div className={"centered-container"}>

                        <a href={"https://www.linkedin.com/in/daniel-martinez-8823b21a7/"} target="_blank" rel="noopener noreferrer">
                            <img src={require('./resources/IMG_4972.jpg')} alt={"Me!"}
                                 className="cropped-zoom-image"/>
                        </a>
                    </div>

                </div>

                {projects.map((image, index) => (
                    <Project key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default App;
