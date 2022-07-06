import React from "react";

const Hero = () => {
    return (
        <div style={{height: "100vh", minHeight: "auto",color: "white", 
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('bg.jpg')"
        }} className="sc-banner banner-bg position-relative ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12" >
                    <div className="banner-content d-flex flex-column align-items-center justify-center-center ">

                        <h1 className="banner-title mb-15 wow fadeInUp" style={{color: "white"}} data-wow-delay="300ms" data-wow-duration="2500ms">The university of tomorrow</h1>
                        <h5 className="banner-des mb-35 wow fadeInUp" style={{color: "white"}} data-wow-delay="300ms" data-wow-duration="3000ms">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </h5>
                        <div className="banner-btn wow fadeInUp" data-wow-delay="300ms" data-wow-duration="3500ms">
                            <a className="readon" href="contact.html">Savoir plus <i class="flaticon flaticon-right-arrow"></i></a>
                        </div>
                    </div>
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