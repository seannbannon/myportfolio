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
            description: "One time when I was little an older man tried to get me to help him find his puppy.",
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
                    {/* apparently this div shouldnt b here */}
                {/* </div> */}
            </div>
        </div>,

            {/* PROGRAMMING SKILLS */}
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
                    ))};
                </div>,

                // INTERESTS
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
                    description = "Watching plants grow is extremely rewarding. Getting to use what you grow is an added perk at the end. "
                    />
                </div>
        </div>
    ];


//     //here we have
//   const programmingSkillsDetails = [
//     { skill: "JavaScript", ratingPercentage: 85 },
//     { skill: "React JS", ratingPercentage: 85 },
//     { skill: "React Native", ratingPercentage: 85 },
//     { skill: "Express JS", ratingPercentage: 89 },
//     { skill: "Node JS", ratingPercentage: 89 },
//     { skill: "Mongo Db", ratingPercentage: 70 },
//     { skill: "Core Java", ratingPercentage: 80 },
//     { skill: "HTML", ratingPercentage: 80 },
//     { skill: "CSS", ratingPercentage: 80 },
//   ];

//   const projectsDetails = [
//     {
//       title: "Personal Portfolio Website",
//       duration: { fromDate: "2020", toDate: "2021" },
//       description:
//         "A Personal Portfolio website to showcase all my details and projects at one place.",
//       subHeading: "Technologies Used: React JS, Bootsrap",
//     },
//     {
//       title: "Mobile E-shop ",
//       duration: { fromDate: "2020", toDate: "2021" },
//       description:
//         "An ecommerce application designed to sell products online wth payment system integration",
//       subHeading:
//         "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
//     },
//     {
//       title: "Ecommerce Website ",
//       duration: { fromDate: "2020", toDate: "2021" },
//       description:
//         "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
//       subHeading:
//         "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
//     },
//   ];

//   const resumeDetails = [
//     <div className="resume-screen-container" key="education">
//       <ResumeHeading
//         heading={"University of Legon Accra, Ghana"}
//         subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
//         fromDate={"2014"}
//         toDate={"2018"}
//       />

//       <ResumeHeading
//         heading={"National Youth Service Corps"}
//         subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
//         fromDate={"2019"}
//         toDate={"2020"}
//       />
//       <ResumeHeading
//         heading={"High School "}
//         subHeading={"Command Secondary School Mbiri"}
//         fromDate={"2007"}
//         toDate={"2012"}
//       />
//     </div>,

//     /* WORK EXPERIENCE */
//     <div className="resume-screen-container" key="work-experience">
//       <div className="experience-container">
//         <ResumeHeading
//           heading={"Ehizeex Technoloy"}
//           subHeading={"FULL STACK DEVELOPER INTERN"}
//           fromDate={"2021"}
//           toDate={"Present"}
//         />
//         <div className="experience-description">
//           <span className="resume-description-text">
//             Currently working as MERN stack web and mobile developer and also an
//             online instructor on udemy.
//           </span>
//         </div>
//         <div className="experience-description">
//           <span className="resume-description-text">
//             - Developed an ecommerce website for client with the dashboard for
//             managing the products, managing reviews, users, payment etc. .
//           </span>
//           <br />
//           <span className="resume-description-text">
//             - Integrated the web app with backend services to create new user
//             onboarding application with dynamic form content.{" "}
//           </span>
//           <br />
//           <span className="resume-description-text">
//             - I stretch my mental capacity to develope UI as per the given
//             designs.
//           </span>
//           <br />
//         </div>
//       </div>
//     </div>,

//     /* PROGRAMMING SKILLS */
//     <div
//       className="resume-screen-container programming-skills-container"
//       key="programming-skills"
//     >
//       {programmingSkillsDetails.map((skill, index) => (
//         <div className="skill-parent" key={index}>
//           <div className="heading-bullet"></div>
//           <span>{skill.skill}</span>
//           <div className="skill-percentage">
//             <div
//               style={{ width: skill.ratingPercentage + "%" }}
//               className="active-percentage-bar"
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>,

//     /* PROJECTS */
//     <div className="resume-screen-container" key="projects">
//       {projectsDetails.map((projectsDetails, index) => (
//         <ResumeHeading
//           key={index}
//           heading={projectsDetails.title}
//           subHeading={projectsDetails.subHeading}
//           description={projectsDetails.description}
//           fromDate={projectsDetails.duration.fromDate}
//           toDate={projectsDetails.duration.toDate}
//         />
//       ))}
//     </div>,

//     /* Interests */
//     <div className="resume-screen-container" key="interests">
//       <ResumeHeading
//         heading="Teaching"
//         description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
//       />
//       <ResumeHeading
//         heading="Music"
//         description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
//       />
//       <ResumeHeading
//         heading="Competitive Gaming"
//         description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
//       />
//     </div>,
//   ];

  
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
                src = {require (`../../assets/Resume/${bullet.logoSrc}`).default}
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



