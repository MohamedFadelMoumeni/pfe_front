import React from "react";

const Aboutus = () => {
    return (
        <div id="sc-about" className="sc-about gray-bg pt-90 pb-170 md-pt-50 md-pb-70 position-relative arrow-animation-1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="img-part about-big-image position-relative">
                        <img className="" src="assets/images/about/about1.png" alt="About Image" />
                        <div className="about-experience text-center">
                            <span>23+</span>
                            Years Experience
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 pl-90 md-pl-15 md-mt-90">
                    <div className="sec-title mb-20">
                        <div className="sub-title position-relative">About Us <span className="heading-border-line"></span></div>
                        <h2 className="title mb-20">Good Qualificatio Services and Better Skills</h2>
                        <div className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
                    </div>
                    <ul className="check-square two-line mb-20">
                        <li>Quality Teachers</li>
                        <li>Get Certified</li>
                        <li>Online class</li>
                        <li>Skills Lectures</li>
                        <li>Library Store</li>
                        <li>Develop Skills</li>
                    </ul>
                    <div className="btn-part wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                        <a className="readon" href="about.html">Learn More <i class="flaticon flaticon-right-arrow"></i> </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/arrow-1.png" alt="" />
        </div>
        <div className="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/arrow-2.png" alt="" />
        </div>

        <div className="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/arrow-3.png" alt="" />
        </div>
        <div className="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/arrow-3.png" alt="" />
        </div>
    </div>
    )
}


export default Aboutus;