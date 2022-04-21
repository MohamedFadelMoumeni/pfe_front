import React from "react";

const Hero = () => {
    return (
        <div id="sc-banner" className="sc-banner banner-bg position-relative ">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <div className="sub-title wow position-relative mb-8 fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">Online Education <span className="heading-border-line"></span></div>

                        <h1 className="banner-title mb-15 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2500ms">Improve your any<br /> educational skills</h1>
                        <h5 className="banner-des mb-35 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="3000ms">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </h5>
                        <div className="banner-btn wow fadeInUp" data-wow-delay="300ms" data-wow-duration="3500ms">
                            <a className="readon" href="contact.html">Hire a Coach Now <i class="flaticon flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6  hidden-md">
                    <div className="banner-img animation-shape hidden-sm wow fadeInRight" data-wow-delay="300ms" data-wow-duration="2000ms">
                        <img src="assets/images/banner/undraw_education_f8ru.png" alt="Banner Image" />
                    </div>
                   
                    <div className="animate-circle"></div>
                </div>
            </div>
        </div>
        <div className="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div className="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div className="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div className="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div className="animated-arrow-5 animated-arrow up-down-new">
            <img src="assets/images/banner/arrow-5.png" alt="" />
        </div>
    </div>

    )
}

export default Hero