import React from 'react';
import './App.css';
import github from "./github-mark.svg"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';

const projects = [
    {
        id: 1,
        title: "Lynneah's Study Buddy",
        src: "TbhOnF1yw0E",
        text: "Lynneah's Study Buddy is a live website designed to support MCAT (Medical College Admission Test) preparation by providing a curated set of practice questions sourced from a reputable Reddit user within the student medical community. The website offers multiple-choice questions across all seven categories of the MCAT, allowing users to customize their practice sessions based on their specific needs and focus areas.",
        purp: "Study MCAT",
        respo: "Solo-project",
        link: "https://github.com/OutbreakSource/lynneah_study_buddy",
        live:"https://lynneahs-study-buddy.netlify.app/"

    },
    {
        id: 0,
        title: "Emotion Analyzer 5000",
        src: "8Oly7ixORdI",
        text: "As the creator of Emotion Analyzer, my first live website project, I successfully utilized a diverse range of tools and languages. Leveraging React, I developed a product that incorporates a large dataset from ArtEmis to analyze emotions associated with images. Through a script, images were matched with corresponding emotions and used to train a Machine Learning model for emotion detection. Additionally, I implemented multiple feature algorithms to generate scores for each image, enabling the training of data tied to the provided emotions.",
        purp: "Compare two different Machine Learning Models, one using Convulutional Neural Network, the other using" +
            " multiple scoring algorithms based on image artistic features",
        respo: "Front-end, Hosting Website, Python Flask API, AWS EC2/S2, Gradient Feature, Web-scrapping with Copyright check script" +
            "Dataset creation, Machine Learning Model Checkpoint creation",
        link: "https://github.com/AngryAbstractV",
        live: "https://emotion-analyzer-5000.netlify.app/"
    },
    {
        id: 4,
        title: "DPS Tutor Mass Email",
        src: "odrlCSa1CnU",
        text: "As a tutor at my former middle/high school, I developed a custom tool to streamline communication with parents regarding their students' progress in summer school. By creating a Java program, I automated the process of generating growth charts and sending mass weekly emails. This initiative saved approximately four hours of manual work and effectively demonstrated students' progress to parents." ,
        purp: "Reduce manual time emailing as a tutor and help save time for teachers",
        respo: "Solo-project",
        link: "https://github.com/OutbreakSource/TutorMassEmail",
        live: null
    },{
        id: 2,
        title: "This or That",
        src: "eJg8f2yodyU",
        text: "Looking for a quick and lighthearted project to sharpen my skills in image centering within websites using React, I embarked on a fun adventure. My goal was to load images with perfect sizes and proportions on the screen. Introducing: 'This or That'! The premise of this delightful website is simple—just spot the correct Ed Sheeran image, whether it's on the left (This) or the right (That). Let the game begin!",
        purp: "Determine which ginger is Ed Sheeran",
        respo: "Solo-project",
        link: "https://github.com/OutbreakSource/this_or_that",
        live: "https://this-or-that-sheeran.netlify.app/"
    }
];


const App = () => {


    return (
        <div >

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
                    Hello, I'm Daniel Martinez! I graduated from MSU Denver in December 2022 with a Bachelor's of Applied Sciences in Computer Science, along with a minor in Math. While I primarily code in Java and Python for smaller projects, I have recently ventured into React and am currently learning JavaScript. As a self-taught developer, my projects may not be overly complex, but they serve as important stepping stones for me to strengthen my front-end skills. Below, you'll find videos showcasing my recent projects. Please note that the volume might be low, so headphones are recommended for a better experience. Additionally, the left side of the videos provides context, explaining the purpose and story behind each project.
                </p>
            </div>

            {projects.map((image, index) => (
                <div
                    key={image.id}
                    className={`miniContainer`}
                >

                    <div className="text">
                        <p>{image.title}</p>
                        <p>Purpose: {image.purp}</p>
                        <p>{image.text}</p>
                        <p>Responsibilities: {image.respo}</p>
                    </div>
                    <div className="image-container">

                        <iframe title={"dini"} width="854" height="480"
                                src={"https://www.youtube.com/embed/" + image.src}
                                allow='autoplay; encrypted-media' style={{margin: '0 auto'}}></iframe>
                    </div>
                    <div className={"iconContainer"}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" style={{scale: 1}}/></a>
                        {image.live != null && <IconButton href={image.live} target={"_blank"} style={{right: 8}}>
                            <ExitToAppIcon style={{fontSize: "95px"}}/>
                        </IconButton>}
                    </div>

                </div>
            ))}

        </div>

        </div>
    );
};

export default App;