import React, {useState, useEffect} from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel"
import {getAllTestMonial} from "../services/testmonial"
const Testimentials = () => {

    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            const data = await getAllTestMonial();
            setData(data)
        }
        getData()
    }, [])
    return (
        <div className="sc-testimonial style1 pt-115 pb-120 md-pt-75 md-pb-80">
        <div className="container">
            <div className="sec-title mb-30 text-center md-mb-10">
                <div className="sub-title primary">Client Testimonial <span className="heading-border-line"></span></div>
                <h2 className="title mb-0">Always Stufents happy with Us</h2>
            </div>
            <OwlCarousel className="sc-carousel owl-carousel" data-loop="true" data-items="3" data-margin="0" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="true" data-nav="false" data-nav-speed="false" data-center-mode="true" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="3" data-md-device-nav="false" data-md-device-dots="true">
                {
                    data?.length > 0 ? data.map(review => (
                        <div key={review.id} className="testi-item-inner">
                        <div className="testi-item">
                            <div className="desc">{review.review}</div>
                            <div className="user-info d-flex align-items-center">
                                
                                <div className="author-details">
                                    <h4 className="name">{review.name}</h4>
                                    <ul className="ratings">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                    )) : null
                }

            </OwlCarousel>
        </div>
    </div>
    )
}

export default Testimentials