import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import einstein from "../../../src/img/Testimonial/einstein.png";
import jesus from "../../../src/img/Testimonial/jesus.png";
import trump from "../../../src/img/Testimonial/trump.jpg";
import chris from "../../../src/img/Testimonial/chris.jpg";
import shape from "../../../src/img/Testimonial/shape-bg.png"




export default function Testimonial(props) {
let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
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
    <section className="testimonial-section fade-in" id={props.id || ""}>
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
                        Taught me everything I know.
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
                        src = {einstein}
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Albert Einstein</h5>
                    <p>Theoretical Physicist</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                            I died on the cross so you could hire Sean. Don't make me regret my decision. 
                            Contact Sean right now, or face eternal damnation.
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
                        src = {jesus} 
                        alt = "No Internet Connection"
                    ></img>
                    <h5> Jesus Christ</h5>
                    <p>Son of God</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        Sean is a tremendous guy. Huge potential. Believe me. 
                        You would be very, very lucky to have him on your team.
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
                        src = {trump} 
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Donald J Trump</h5>
                    <p>Former President of the United States</p> 
                </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="testi-item">
                <div className="testi-comment">
                    <p>
                            <i className="fa fa-quote-left"/>
                        I patronized Sean and when he delivered, I honestly
                        fell in love with the project, he is a very honest guy and
                        he delivers on time.
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
                        src = {chris} 
                        alt = "No Internet Connection"
                    ></img>
                    <h5>Chris Jones</h5>
                    <p>Restaurant Owner at La Boutique</p> 
                </div>
                </div>
            </div>  


            </OwlCarousel>
        </div>
        </div>
    </section>
    <div className="footer-image">
        <img src={shape} alt= "No Internet Connection" />
    </div>
    </div>
);
}


