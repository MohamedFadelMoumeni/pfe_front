import React from "react";


const Join = () => {
    return (
        <div class="sc-cta-section cta-bg-image md-pt-75 md-pb-80 position-relative arrow-animation-1">
        <div class="container">
            <div class="row align-items-center"> 
                 <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                    <div class="sec-title">
                        <div class="sub-title position-relative">Join Our Course <span class="heading-border-line"></span></div>
                        <h2 class="title mb-0 white-color">If you  interested join<br /> our course</h2>
                    </div>
                    <form class="newsletter-form mt-40">
                        <input type="email" name="email" placeholder="Your email address" required="" />
                        <button type="submit">Join Now <i class="flaticon flaticon-right-arrow"></i></button>
                    </form>
                </div>
                <div class="col-lg-6 hidden-md">
                    <div class="img-part">
                          <img src="assets/images/cta/men-women.png" alt="Image" />
                    </div>
                </div> 
            </div>
        </div>

        <div class="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-6 animated-arrow left-right-new">
            <img src="assets/images/arrow-7.png" alt="" />
        </div>
    </div>
    )
}

export default Join