import React, {useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOfSetStyle, setCarousalOfSetStyle] = useState({});

    const ResumeHeading = (props) =>{
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className = 'heading-date'>
                            {props.fromDate + "_" + props.toDate}
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
        </div>
    };

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
            description: "One time when I was little an older man tried to get me to help him find his puppy.",
            subHeading: "Technologies Used: ReactJS, Bootstrap, RxJS"
        },
    ];

    const resumeDetails = [
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
        <div className='resume-screen-container' key = "work-experience">
            <ResumeHeading
            heading = {"Freelance Develeoper"}
            subHeading = {"FULL STACK DEVELOPER"}
            fromDate = {"2021"}
            toDate = {"present"}
            />
        </div>

    ]

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
      };
  
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
     <div className='resume-container screen-container' id = {props.id || ""}>
         <div className='resume-content'>
             <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
         </div>

     </div>
    );
}
