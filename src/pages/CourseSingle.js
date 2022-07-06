import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {useParams, useLocation} from "react-router-dom";


const CourseSingle = (props) => {
    console.log(useLocation())
    const [course, setCourse] = useState(null)
    const {state: {id}} = useLocation()
    useEffect(() => {
        const fetchCourse = async () => {
            const resp = await fetch(`http://localhost:3002/courses/${id}`);
            const respJson = await resp.json()
            console.log(respJson)
            setCourse(respJson.course)
        }
        if(id){
            fetchCourse()
        }
    }, [id])
    console.log(course)
    return (
        <>
        <Header />


        <div class="main-content">
            <section class="sc-course-details pt-120 pb-70  md-pt-80 md-pb-40">
                <div class="container">
                    <div class="row clearfix">
                        <div class="col-lg-8 md-mb-50">
                            
                            <div class="intro-info-tabs">
                                <div class="post-img">
                                    <img src={`${course?.image ? `http://localhost:3002/${course.image}` : "assets/images/blog/blog-single.jpg"}`} alt=""/>
                                </div>
                                <ul class="nav nav-tabs intro-tabs tabs-box" id="myTab" role="tablist">
                                    <li class="nav-item tab-btns">
                                        <a class="nav-link tab-btn active" id="course-overview-tab" data-bs-toggle="tab" href="#course-overview" role="tab" aria-controls="course-overview" aria-selected="true">Overview</a>
                                    </li>
                                    
                                    <li class="nav-item tab-btns">
                                        <a class="nav-link tab-btn" id="course-instructor-tab" data-bs-toggle="tab" href="#prod-instructor" role="tab" aria-controls="prod-instructor" aria-selected="false">Instructor</a>
                                    </li>
                                   
                                </ul>
                                <div class="tab-content tabs-content" id="myTabContent">
                                    <div class="tab-pane tab fade show active" id="course-overview" role="tabpanel" aria-labelledby="course-overview-tab">
                                        <div class="content white-bg pt-30">
                                            <div class="course-overview">
                                                <div class="inner-box mb-30">
                                                    <h3>{course && course?.title}</h3>
                                                    <p>
                                                        {
                                                            course && course.description
                                                        }
                                                    </p>
                                                                                                                                                       
                                                </div>
                                            </div>                                                
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="prod-curriculum" role="tabpanel" aria-labelledby="course-curriculum-tab">
                                        <div class="content">
                                            <div id="accordion" class="accordion-box mt-20">
                                                <div class="card accordion block">
                                                    <div class="card-header" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link acc-btn" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Part 01: Welcome!</button>
                                                        </h5>
                                                    </div>

                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                                        <div class="card-body acc-content current">
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 01</span> Course Introduction</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 02</span> Big Picture Overview of Course</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 03</span> HTML Document Structure</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card accordion block">
                                                    <div class="card-header" id="headingTwo">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link acc-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Part 02: HTML Essentials</button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                                        <div class="card-body acc-content">
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 01</span> Course Introduction</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 02</span> Big Picture Overview of Course</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 03</span> HTML Document Structure</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card accordion block">
                                                    <div class="card-header" id="headingThree">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link acc-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Part 03: Adding Media to a Web Page</button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                                        <div class="card-body acc-content">
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 01</span> Course Introduction</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 02</span> Big Picture Overview of Course</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="clearfix">
                                                                    <div class="pull-left">
                                                                        <a class="popup-videos play-icon" href="#"><i class="fa fa-play"></i> <span>Lecture: 03</span> HTML Document Structure</a>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <div class="minutes">35 Minutes</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                             
                                        </div>
                                    </div>

                                    <div class="tab-pane fade sc-team team-style-style-1" id="prod-instructor" role="tabpanel" aria-labelledby="course-instructor-tab">
                                        <div class="content pt-30 pb-30 pl-30 pr-30 white-bg">
                                            <h3 class="instructor-title">Instructors</h3>
                                            <div class="row sc-team team-style-1 clearfix">
                                            <div class="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                                                    <div class="team-wrap">
                                                        <div class="team-img">
                                                            <a href="team-single.html"><img src={course?.user?.image ? `http://localhost:3002/${course?.user?.image}`: "assets/images/team/1.jpg"} alt=""/></a> 
                                                            <div class="team-social">
                                                                <li><a href="team-single.html" class="social-icon"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="team-single.html" class="social-icon"><i class="fa fa-google-plus"></i></a></li>
                                                                <li><a href="team-single.html" class="social-icon"><i class="fa fa-twitter"></i></a></li>
                                                                <li><a href="team-single.html" class="social-icon"><i class="fa fa-linkedin"></i></a></li>
                                                            </div>
                                                        </div>
                                                        <div class="team-item-text">
                                                            <div class="team-details">
                                                                <h3 class="team-name"><a href="team-single.html">{course && course?.user.full_name}</a></h3>
                                                                <span class="team-title">Teacher </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                     
                                                                                                         
                                            </div>  
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="prod-reviews" role="tabpanel" aria-labelledby="course-reviews-tab">
                                        <div class="content pt-30">
                                            <div class="cource-review-box mb-30">
                                                <h4>Alart Deen</h4>
                                                <div class="rating">
                                                    <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 473 Reviews
                                                </div>
                                                <div class="text">Venenatis sit amet ornare non, suscipit nec risus. suscipit enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna.</div>
                                                <div class="helpful">Why is review important?</div>
                                                <ul class="like-option">
                                                    <li><i class="fa fa-thumbs-o-up"></i></li>
                                                    <li><i class="fa fa-thumbs-o-down"></i></li>
                                                    <li><a class="report" href="#">Report</a></li>
                                                </ul>
                                            </div>
                                            <div class="cource-review-box mb-30 ml-80 md-ml-0">
                                                <h4>Brak Kali</h4>
                                                <div class="rating">
                                                    <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 473 Reviews
                                                </div>
                                                <div class="text">Venenatis sit amet ornare non, suscipit nec risus. suscipit enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna.</div>
                                                <div class="helpful">Why is review important?</div>
                                                <ul class="like-option">
                                                    <li><i class="fa fa-thumbs-o-up"></i></li>
                                                    <li><i class="fa fa-thumbs-o-down"></i></li>
                                                    <li><a class="report" href="#">Report</a></li>
                                                </ul>
                                            </div>
                                            <div class="cource-review-box mb-30">
                                                <h4>Petey Cruiser</h4>
                                                <div class="rating">
                                                    <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 473 Reviews
                                                </div>
                                                <div class="text">Venenatis sit amet ornare non, suscipit nec risus. suscipit enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna.</div>
                                                <div class="helpful">Why is review important?</div>
                                                <ul class="like-option">
                                                    <li><i class="fa fa-thumbs-o-up"></i></li>
                                                    <li><i class="fa fa-thumbs-o-down"></i></li>
                                                    <li><a class="report" href="#">Report</a></li>
                                                </ul>
                                            </div>
                                            <div class="cource-review-box  mb-30 ml-80 md-ml-0">
                                                <h4>Roki Doon</h4>
                                                <div class="rating">
                                                    <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 473 Reviews
                                                </div>
                                                <div class="text">Venenatis sit amet ornare non, suscipit nec risus. suscipit enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna.</div>
                                                <div class="helpful">Why is review important?</div>
                                                <ul class="like-option">
                                                    <li><i class="fa fa-thumbs-o-up"></i></li>
                                                    <li><i class="fa fa-thumbs-o-down"></i></li>
                                                    <li><a class="report" href="#">Report</a></li>
                                                </ul>
                                            </div>
                                            <a href="#" class="mt-20 readon">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="course-sidebar-area col-lg-4">
                            <div class="inner-column">
                                <div class="course-features-info">
                                    <h4 class="course-title">Course Features</h4>
                                    <ul>
                                    <li class="duration-feature">
                                    <i class="fa fa-check"></i>
                                            <span class="value">{course?.formation ? course?.formation?.name: 0} </span>
                                        </li>

                                        <li class="duration-feature">
                                            <i class="fa fa-clock-o"></i>
                                            <span class="label">Duration</span>
                                            <span class="value">{course ? course.duration: 0} </span>
                                        </li>
                                       
                                       
                                      
                                        <li class="students-feature">
                                            <i class="fa fa-users"></i>
                                            <span class="label">Students</span>
                                            <span class="value">{course ? course.student_enrolled : 0}</span>
                                        </li>
                                       
                                       
                                    </ul>
                                </div>
                                
                            </div>
                        </div>  
                    </div>                
                </div>
            </section>

            <div id="sc-popular-courses" class="related-course sc-popular-courses main-home pb-90 md-pb-60">
                <div class="container">
                    <div class="align-items-center mb-30 md-mb-10">
                       
                    </div>
                    <div class="sc-carousel owl-carousel nav-style1" data-loop="true" data-items="3" data-margin="0" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="true" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="false" data-ipad-device2="2" data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="true" data-md-device-dots="false">
                    
                           <div class="courses-item">
                                <div class="courses-grid">
                                    <div class="img-part">
                                        <a href="#"><img src="assets/images/courses/1.jpg" alt=""/></a>
                                        <div class="course-price">
                                            <span class="price">$40</span>
                                        </div>
                                    </div>
                                    <div class="content-part">
                                        
                                        <h3 class="title"><a href="#">Development Strategy Buildup</a></h3>
                                        <div class="des">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        </div>
                                        <ul class="meta-part">
                                            <li class="user">
                                                <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                Michael Joe                                 
                                            </li>
                                            <li class="user">
                                                <i class="flaticon flaticon-play"></i>
                                                6 Lessons                                        
                                            </li>
                                        </ul>
                                        <div class="bottom-part">
                                            <div class="info-meta">
                                                <ul>
                                                    <li class="ratings">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        (05)
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-part">
                                                <a href="#"><i class="flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                           </div>
                
                    
                           <div class="courses-item">
                                <div class="courses-grid">
                                    <div class="img-part">
                                        <a href="#"><img src="assets/images/courses/2.jpg" alt=""/></a>
                                        <div class="course-price">
                                            <span class="price">Free</span>
                                        </div>
                                    </div>
                                    <div class="content-part">
                                        
                                        <h3 class="title"><a href="#">Business & Management</a></h3>
                                        <div class="des">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        </div>
                                        <ul class="meta-part">
                                            <li class="user">
                                                <img src="assets/images/courses/user/2.jpg" alt=""/>
                                                Michael Joe                                 
                                            </li>
                                            <li class="user">
                                                <i class="flaticon flaticon-play"></i>
                                                6 Lessons                                        
                                            </li>
                                        </ul>
                                        <div class="bottom-part">
                                            <div class="info-meta">
                                                <ul>
                                                    <li class="ratings">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        (05)
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-part">
                                                <a href="#"><i class="flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                           </div>
                
                    
                           <div class="courses-item">
                                <div class="courses-grid">
                                    <div class="img-part">
                                        <a href="#"><img src="assets/images/courses/3.jpg" alt=""/></a>
                                        <div class="course-price">
                                            <span class="price">$85</span>
                                        </div>
                                    </div>
                                    <div class="content-part">
                                        
                                        <h3 class="title"><a href="#">Social Economics Courses</a></h3>
                                        <div class="des">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        </div>
                                        <ul class="meta-part">
                                            <li class="user">
                                                <img src="assets/images/courses/user/3.jpg" alt=""/>
                                                Michael Joe                                 
                                            </li>
                                            <li class="user">
                                                <i class="flaticon flaticon-play"></i>
                                                15 Lessons                                        
                                            </li>
                                        </ul>
                                        <div class="bottom-part">
                                            <div class="info-meta">
                                                <ul>
                                                    <li class="ratings">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        (05)
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-part">
                                                <a href="#"><i class="flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                           </div>
                
                    
                           <div class="courses-item">
                                <div class="courses-grid">
                                    <div class="img-part">
                                        <a href="#"><img src="assets/images/courses/4.jpg" alt=""/></a>
                                        <div class="course-price">
                                            <span class="price">$62</span>
                                        </div>
                                    </div>
                                    <div class="content-part">
                                        
                                        <h3 class="title"><a href="#">Web Design Courses</a></h3>
                                        <div class="des">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        </div>
                                        <ul class="meta-part">
                                            <li class="user">
                                                <img src="assets/images/courses/user/2.jpg" alt=""/>
                                                Michael Joe                                 
                                            </li>
                                            <li class="user">
                                                <i class="flaticon flaticon-play"></i>
                                                7 Lessons                                        
                                            </li>
                                        </ul>
                                        <div class="bottom-part">
                                            <div class="info-meta">
                                                <ul>
                                                    <li class="ratings">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        (05)
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-part">
                                                <a href="#"><i class="flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                           </div>
                
                    </div>
                </div>
            </div>


        </div>
        <footer id="sc-footer" class="sc-footer footer-bg-image arrow-animation-1">
            <div class="container">
                <div class="footer-newsletter">
                    <div class="row align-items-center">
                        <div class="col-md-6 sm-mb-26">
                            <h3 class="title white-color mb-0">Subscribe Our Newsletter</h3>
                            <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in </div>
                        </div>
                        <div class="col-md-6 text-right">
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Your email address" required="" />
                                <button type="submit">Subscribe <i class="flaticon flaticon-right-arrow"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-62 pb-70 md-pb-5">
                    <div class="row">
                        <div class="col-lg-4 footer-widget">
                            <div class="about-widget pr-15">
                                <div class="logo-part mb-30">
                                    <a href="index.html"><img src="assets/images/white-logo.png" alt="Footer Logo" /></a>
                                </div>
                                <p class="desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                <h4 class="social-title white-color">Follow Us</h4>
                                <ul class="footer-social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 md-mb-32 footer-widget md-mt-45">
                            <h4 class="widget-title">Company</h4>
                            <ul class="widget-menu">
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Course</a></li>
                                <li><a href="#">Learning</a></li>
                                <li><a href="#">Testiminial</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 md-mb-32 footer-widget">
                            <h4 class="widget-title">Learn Course</h4>
                            <ul class="widget-menu">
                                <li><a href="#">General Education</a></li>
                                <li><a href="#">Computer Science</a></li>
                                <li><a href="#">Civil Engineering</a></li>
                                <li><a href="#">Artificial Intelligence</a></li>
                                <li><a href="#">Business Studies</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 md-mb-32 footer-widget">
                            <h4 class="widget-title">Contact Info</h4>
                            <ul class="address-widget pr-40">
                                <li>
                                    <i class="flaticon flaticon-call"></i>
                                    <a href="tel:+(111)256352">Call: +(111)256 352</a>
                                </li>
                                <li>
                                    <i class="flaticon flaticon-mail"></i>
                                    <a href="mailto:infosimple@gmail.com">infosimple@gmail.com</a>
                                </li>
                                <li>
                                    <i class="flaticon flaticon-maps-and-flags"></i>
                                    <div class="desc">
                                        202 Raffles Ave, Carlisle CA2 7EF, United Kingdon
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 sm-mb-10 text-md-start">
                            <div class="copyright">
                            </div>
                        </div>
                        <div class="col-md-6 text-end">
                            <ul class="copyright-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="animated-arrow-1 animated-arrow left-right-new">
                <img src="assets/images/arrow-8.png" alt=""/>
            </div>
            <div class="animated-arrow-2 animated-arrow up-down-new">
                <img src="assets/images/arrow-9.png" alt=""/>
            </div>

            <div class="animated-arrow-3 animated-arrow up-down-new">
                <img src="assets/images/arrow-3.png" alt=""/>
            </div>
            <div class="animated-arrow-4 animated-arrow left-right-new">
                <img src="assets/images/arrow-7.png" alt="" />
            </div>
        </footer>
        
        </>

    )
}
export default CourseSingle