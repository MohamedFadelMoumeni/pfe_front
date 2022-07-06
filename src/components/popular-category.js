import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel"
const PopularCategory = () => {
    return (
        <div id="sc-categories" className="sc-categories style1 pt-115 pb-90 md-pt-75 md-pb-50">
        <div className="container">
            <div className="sec-title mb-30 md-mb-10">
                <div className="sub-title position-relative">Popular Category <span className="heading-border-line"></span></div>
                <h2 className="title mb-0">Popular Formations to learn</h2>
            </div>

            <OwlCarousel  className="sc-carousel owl-carousel nav-style1" data-loop="true" data-items="6" data-margin="0" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="true" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="4" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="3" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="6" data-md-device-nav="true" data-md-device-dots="false">

                <div className="categories-inner-top">
                    <a className="categories-item">
                        <div className="icon-part">
                            <i class="flaticon flaticon-laptop"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Computer<br/> Science</h4>
                            <span className="courses">11 Courses</span>
                        </div>
                    </a>
                </div>

                <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-helmet"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Civil<br/> Engineering</h4>
                            <span className="courses">06 Courses</span>
                        </div>
                    </a>
                </div>

                <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-cap"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Lawyer<br/> Course</h4>
                            <span className="courses">03 Courses</span>
                        </div>
                    </a>
                </div>

                <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-apartment"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Artificial<br/> Intelligence</h4>
                            <span className="courses">10 Courses</span>
                        </div>
                    </a>
                </div>

               <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-computer"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Computer<br/> Engineering</h4>
                            <span className="courses">05 Courses</span>
                        </div>
                    </a>
                </div>

                <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-briefcase"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">Business <br/>Studies</h4>
                            <span className="courses">05 Courses</span>
                        </div>
                    </a>
                </div>

                <div className="categories-inner-top">
                    <a className="categories-item" >
                        <div className="icon-part">
                            <i class="flaticon flaticon-book"></i>
                        </div>
                        <div className="content-part">
                            <h4 className="title">General<br/> Education</h4>
                            <span className="courses">15 Courses</span>
                        </div>
                    </a>
                </div>

            </OwlCarousel >
        </div>
    </div>

    )
}

export default PopularCategory;