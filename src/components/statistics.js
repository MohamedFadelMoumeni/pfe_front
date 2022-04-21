import React from "react";


const Statistics = () => {
    return (
        <div className="sc-counter counter-bg1 pt-120 pb-120 md-pt-80 md-pb-50 sc-counter-bg position-relative arrow-animation-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-item text-center">
                        <div className="icon-part">
                            <i class="flaticon flaticon-laptop"></i>
                        </div>
                        <h2 className="counter-title"><span className="sc-count">16 </span><span className="text">M+</span></h2>
                        <h5 className="title mb-0">Students Learning</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-item text-center ping-color">
                        <div className="icon-part">
                            <i class="flaticon flaticon-study"></i>
                        </div>
                        <h2 className="counter-title"><span className="sc-count">25 </span><span className="text">K+</span></h2>
                        <h5 className="title mb-0">Total course</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-item text-center green-color">
                        <div className="icon-part">
                            <i class="flaticon flaticon-teacher"></i>
                        </div>
                        <h2 className="counter-title"><span className="sc-count">551 </span><span className="text">+</span></h2>
                        <h5 className="title mb-0">Quality Teachers</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-item text-center yellow-color">
                        <div className="icon-part">
                            <i class="flaticon flaticon-monitor"></i>
                        </div>
                        <h2 className="counter-title"><span className="sc-count">150</span><span className="text">+</span></h2>
                        <h5 className="title mb-0">Course Subjects</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/arrow-5.png" alt="" />
        </div>
        <div className="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/arrow-2.png" />
        </div>

        <div className="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/arrow-4.png" />
        </div>
        <div className="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/arrow-3.png" />
        </div>
    </div>
    )
}

export default Statistics;