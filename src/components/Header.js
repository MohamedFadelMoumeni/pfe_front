import React from "react";

const Header = () => {
    return (
        <div className="sc-header-section">
        <header id="sc-header" className="sc-header">

            

            <div className="menu-area menu-sticky" style={{background: "#004587", color: "#fff"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                          <div className="logo-cat-wrap">
                              <div className="logo-part mt-2">
                                  <a href="/">
                                 <img src="/logo_0.png" alt="Footer Logo" /> </a>
                              </div>
                          </div>
                        </div>
                        <div className="col-lg-9 align-items-center d-flex text-end justify-content-end">
                            <div className="sc-menu-area">
                                <div className="main-menu">
                                  <div className="mobile-menu">
                                      <a className="sc-menu-toggle">
                                          <i class="fa fa-bars"></i>
                                      </a>
                                  </div>
                                  <nav className="sc-menu">
                                     <ul className="nav-menu">
                                        <li className="current-menu-item color-white"> <a href="/" style={{color: "#fff"}}>Home</a>
                                           
                                        </li>
                                        <li ><a href="/formations" style={{color: "#fff"}}>Formations</a> </li>

                                         <li>
                                             <a href="/course" style={{color: "#fff"}}>Courses</a>
                                         </li>

                                         <li>
                                             <a href="/blogs" style={{color: "#fff"}}>Blogs</a>
                                             
                                         </li>
                                         <li>
                                             <a href="/blogs" style={{color: "#fff"}}>Events</a>
                                             
                                         </li>

                                         <li >
                                             <a href="/thesis" style={{color: "#fff"}}>Thesis</a>
                                            
                                        </li>
                                        <li><a href="/contact" style={{color: "#fff"}}>Contact</a></li>
                                     </ul> 
                                  </nav>                                         
                                </div>                                
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
   


            <nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <div id="nav-close">
                        <div className="line">
                            <span className="line1"></span><span className="line2"></span>
                        </div>
                    </div>
                </div>
                <div className="canvas-logo">
                    <a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
                </div>
                <div className="offcanvas-text">
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for web sites still in their infancy.</p>
                </div>
                <ul className="address-widget">
                    <li>
                        <i class="flaticon flaticon-call"></i>
                        <a href="tel:+(111)256352">Call: +(111)256 352</a>
                    </li>
                    <li>
                        <i class="flaticon flaticon-mail"></i>
                        <a href="mailto:infosimple@gmail.com">infosimple@gmail.com</a>
                    </li>
                    <li>
                        
                        <div className="desc">
                            <i class="flaticon flaticon-maps-and-flags"></i>
                            202 Raffles Ave, Carlisle CA2 7EF, United Kingdon
                        </div>
                    </li>
                </ul>
                <div className="canvas-contact">
                    <ul className="social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </nav>
          
        </header>
   
    </div>

    )
}

export default Header;