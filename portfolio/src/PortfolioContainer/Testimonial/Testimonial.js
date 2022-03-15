import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css"


export default function Testimonial(props) {
let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
};

const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items : 1,
            },
            768:{
                items : 1,
            },
            1000:{
                items : 3,
            },
        }
        
    }

return (
    <div>
    <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Clients Say About Me"}
    />
    <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
        <div className="row">
            <OwlCarousel 
            className="owl-carousel" 
            id="testimonial-carousel" 
            {...options}
            >

            
            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        I patronized Sean and when he delivered, I honestly
                        fell in love with the project he is a very honest guy and
                        he delivers ontime.
                            <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                </div>
                <div className="client-info">
                    <img 
                        src = "img/testimonial/lady.png" 
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Daisy Mae</h5>
                    <p>CEO TransAtlantic Global</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        I patronized Sean and when he delivered, I honestly
                        fell in love with the project he is a very honest guy and
                        he delivers ontime.
                            <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                </div>
                <div className="client-info">
                    <img 
                        src = "img/testimonial/mike.png" 
                        alt = "No Internet Connection"
                    ></img>
                    <h5> Mike Jones</h5>
                    <p>CEO of Swishahouse Records</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        I patronized Sean and when he delivered, I honestly
                        fell in love with the project he is a very honest guy and
                        he delivers ontime.
                            <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                </div>
                <div className="client-info">
                    <img 
                        src = "img/testimonial/man.png" 
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Thomas O'Malley</h5>
                    <p>Manager at House of Mouse</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        I patronized Sean and when he delivered, I honestly
                        fell in love with the project he is a very honest guy and
                        he delivers ontime.
                            <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                </div>
                <div className="client-info">
                    <img 
                        src = "img/testimonial/ehiz.jpg" 
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Ehiz Chow</h5>
                    <p>Head Chef at La Boutique</p> 
                </div>
                </div>
            </div>  


            </OwlCarousel>
        </div>
        </div>
    </section>
    </div>
);
}
