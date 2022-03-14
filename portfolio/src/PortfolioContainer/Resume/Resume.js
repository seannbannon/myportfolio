import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';


const Resume = (props) => {
    // STATES
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOfSetStyle, setCarousalOfSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // REUSABLE MINOR COMPONENTS
    const ResumeHeading = (props) => {
        return(
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className = 'heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
            </div>
            <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className='resume-heading-description'>
                <span>{props.description ? props.description : ""}</span>
            </div>
        </div>
        );
    };

    // STATIC RESUME DATA FOR LABELS
    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "React JS", ratingPercentage: 85},
        {skill: "React Native", ratingPercentage: 85},
        {skill: "Express JS", ratingPercentage: 70},
        {skill: "Node JS", ratingPercentage: 89},
        {skill: "Mongo DB", ratingPercentage: 70},
        {skill: "HTML", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 85},
    ];

    // PROJECTS
    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate:"2022"},
            description: "A Personal Portfolio website to shocase all my details and projects in one place.",
            subHeading: "Technologies Used: ReactJS, Bootstrap, RxJS",
        },
        {
            title: "Filler in L8r",
            duration: {fromDate: "2021", toDate:"2022"},
            description: "This is filler words, la la la",
            subHeading: "Technologies Used: ReactJS, Bootstrap, RxJS"
        },
        {
            title: "Blah Blah",
            duration: {fromDate: "2021", toDate:"2022"},
            description: "One time when I was little, an older man tried to get me to help him find his puppy.",
            subHeading: "Technologies Used: ReactJS, Bootstrap, RxJS"
        },
    ];

    const resumeDetails = [
        // EDUCATION
        <div className='resume-screen-container' key = "education">
            <ResumeHeading
            heading = {"Northwestern University, Chicago, IL"}
            subHeading = {"FULL STACK WEB DEVELOPMENT BOOTCAMP"}
            fromDate = {"2021"}
            toDate = {"2021"}
            />
            <ResumeHeading
            heading = {"Purdue University Calumet, Hammond, IN"}
            subHeading = {"BACHELOR OF ARTS IN HUMAN RESOURCE MANAGEMENT"}
            fromDate = {"2012"}
            toDate = {"2015"}
            />
            <ResumeHeading
            heading = {"Prairie State College, Chicago Heights, IL"}
            subHeading = {"ASSOCIATE OF ARTS IN LIBERAL ARTS"}
            fromDate = {"2010"}
            toDate = {"2012"}
            />
            <ResumeHeading
            heading = {"Homewood-Flossmoor High School, Flossmoor, IL"}
            subHeading = {"HIGH SCHOOL DIPLOMA"}
            fromDate = {"2006"}
            toDate = {"2010"}
            />
        </div>,

        // WORK EXPERIENCE
        <div className='resume-screen-container' key = "work-experience">
            <div className='experience-container'>
                <ResumeHeading
                    heading = {"Freelance Develeoper"}
                    subHeading = {"FULL STACK DEVELOPER"}
                    fromDate = {"2021"}
                    toDate = {"Present"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        Currently working as a MERN stack web and mobile developer for hire.
                    </span>
                </div>
                <div className='experience-description'>
                    <span className='resume-description-text'>
                    - Developed an ecommerce website for a client with the dashboard for managing the products,
                    managing review, users, payment, etc. 
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                    - Integrated the web app with backend services to create new user 
                    onboarding application with dynamic form content.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                    - I stretch my mental capacity to develop UI as per the given designs.
                    </span>
                    <br/>
                </div>
            </div>
        </div>,

        <div 
            className='resume-screen-container programming-skills-container'
            key= "programming-skills"
        >
                {programmingSkillDetails.map((skill,index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div
                            style = {{width: skill.ratingPercentage + "%"}}
                            className = 'active-percentage-bar'>
                            </div>
                        </div>
                    </div>
                ))}
        </div>,

        //PROJECTS
        <div className='resume-screen-container' key = "projects">
            {projectDetails.map((projectDetails, index) => ( 
                <ResumeHeading
                key = {index}
                heading = {projectDetails.title}
                subHeading = {projectDetails.subHeading}
                description = {projectDetails.description}
                fromDate = {projectDetails.duration.fromDate}
                toDate = {projectDetails.duration.toDate}
                />
            ))}
        </div>,

        //INTERESTS
        <div className='resume-screen-container'  key = "interests">
            <ResumeHeading
            heading = "Guitar Playing"
            description = "I love falling into the flow of music. It's very relaxing and fun."
            />
            <ResumeHeading
            heading = "Writing"
            description = "I love writing short stories. The places writing can take you can be places you didn't even know were in you."
            />
            <ResumeHeading
            heading = "Gardening"
            description = "Watching plants grow is extremely rewarding. Getting to use what you grow is an added perk at the end."
            />
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
        };
        setCarousalOfSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
            onClick={() => handleCarousal(index)}
            className = {index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key = {index}>
                <img className='bullet-logo'
                src = {require (`../../assets/Resume/${bullet.logoSrc}`)}
                alt = 'F'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return(
            <div
            style = {carousalOfSetStyle.style}
            className = 'resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    // useEffect(() => {
    //     return () => {
    //       /* UNSUBSCRIBE THE SUBSCRIPTIONS */
    //       fadeInSubscription.unsubscribe();
    //     };
    //   }, [fadeInSubscription]);

    return (
    <div 
        className='resume-container screen-container' 
        id = {props.id || ""}
    >
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    </div>
    );
};

export default Resume;



