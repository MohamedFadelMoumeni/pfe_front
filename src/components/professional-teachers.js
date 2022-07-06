import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel"

import {getInstructors} from "../services/instructor"

const ProfessionTeacher = () => {
    const [teachers, setTeachers] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const resp = await getInstructors();
            setTeachers(resp)
        }
        fetchData()
    }, [])
    return (
        <div className="sc-team team-style-1 gray-bg arrow-animation-1 position-relative pt-110 pb-90 md-pt-70 md-pb-50">
        <div className="container">
            <div className="sec-title mb-30 text-center md-mb-10">
                <div className="sub-title primary">Teachers <span className="heading-border-line"></span></div>
                <h2 className="title mb-0">Professional Teachers</h2>
            </div>
            { 
                teachers.length > 0 &&  <OwlCarousel className="sc-carousel owl-carousel nav-style2" dataLoop="true" dataItems="3" dataMargin="0" dataAutoplay="true" dataHoverpause="true" dataAutoplayTimeout="5000" dataSmartSpeed="800" dataDots="false" dataNav="true" data-nav-speed="false" data-center-mode="true" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="false" data-ipad-device2="2" data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="true" data-md-device-dots="false">
                    {
                         teachers?.length && teachers?.map(teacher => (
                            <div key={teacher.id} className="team-inner-item">
                        <div className="team-wrap">
                            <div className="team-img">
                                
                                <img src={`${teacher?.image ? `http://localhost:3002/${teacher?.image}` : `http://localhost:3002/${teacher?.image}`}`} alt="" />
                                <ul className="team-social">
                                    <li><a href="team-single.html" className="social-icon"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="team-single.html" className="social-icon"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="team-single.html" className="social-icon"><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-item-text">
                                <div className="team-details">
                                    <h3 className="team-name"><a href="team-single.html">{teacher.full_name}</a></h3>
                                    <span className="team-title">{teacher.profession}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))

                    }
                </OwlCarousel>
            }
        
        </div>
        <div className="animated-arrow-1 animated-arrow left-right-new">
            <img src="assets/images/arrow-5.png" alt="" />
        </div>
        <div className="animated-arrow-2 animated-arrow up-down-new">
            <img src="assets/images/arrow-2.png" alt="" />
        </div>

        <div className="animated-arrow-3 animated-arrow up-down-new">
            <img src="assets/images/arrow-4.png" alt="" />
        </div>
        <div className="animated-arrow-4 animated-arrow left-right-new">
            <img src="assets/images/arrow-3.png" alt="" />
        </div>
    </div>

    )
}

export default ProfessionTeacher;