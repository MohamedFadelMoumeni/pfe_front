import React from "react";
const Footer = () => {
    return (
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
                                <a href="index.html"><img src="/logo_0.png" alt="Footer Logo" /></a>
                            </div>
                         
                        </div>
                    </div>
                    <div class="col-lg-2 md-mb-32 footer-widget md-mt-45">
                        <h4 class="widget-title">Links</h4>
                        <ul class="widget-menu">
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Fromations</a></li>
                            <li><a href="#">Blogs & News</a></li>
                            <li><a href="#">Theses</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 md-mb-32 footer-widget">
                        <h4 class="widget-title">Contact Info</h4>
                        <ul class="address-widget pr-40">
                            <li>
                                <i class="flaticon flaticon-call"></i>
                                <a href="tel:+(111)256352">Call: +212 617672197</a>
                            </li>
                            <li>
                                <i class="flaticon flaticon-mail"></i>
                                <a href="mailto:infosimple@gmail.com">contact@uiz.uc.ma</a>
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
                    
                </div>
            </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/arrow-8.png" alt="" /> 
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/arrow-9.png" alt="" /> 
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/arrow-3.png" alt="" /> 
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/arrow-7.png" alt="" /> 
        </div>
    </footer>
    )
}

export default Footer;