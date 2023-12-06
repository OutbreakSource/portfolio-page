import React from 'react';
import Project from './Project';
import { projects } from './data';
import './App.css';

const App = () => {
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
                    <p>
                        Name: Daniel Martinez
                        <br/>
                        City and State: Denver, CO
                        <br/>
                        College: Metropolitan State University of Denver
                        <br/>
                        Degree: Bachelors of Applied Science in Computer science with a minor in math
                        <br/>
                        Primary languages: Java and Python
                        <br/>
                        Current experience: 1 year
                        <br/>
                        Current employer: Charles Schwab
                        <br/>
                        Current role: Associate Software Engineer, SDET focused role
                    </p>
                </div>

                {projects.map((image, index) => (
                    <Project key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default App;
