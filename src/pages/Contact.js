import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/footer"
const Contact = () => {
    const [userInfo, setUserInfo] = useState({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        msg: ''
    })
    const sendData = async (e) => {
        e.preventDefault()
        try{
            const resp = await fetch('http://localhost:3002/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    ...userInfo
                })
            })
            const respJson = await resp.json()
        }catch(e){
            console.log(e.message)
        }
    }
    return (
        <>
        <Header />
        <div class="main-content">
        <div class="sc-breadcrumbs breadcrumbs-overlay">

           
        </div>

        <div class="contact-page-section pt-120 pb-120 md-pt-80 md-pb-80">
            <div class="container">
                <div class="row contact-address-section">
                    <div class="col-lg-4 lg-pl-0 md-mb-30">
                        <div class="contact-info contact-address">
                            <div class="icon-part sky-color">
                                <i class="flaticon flaticon-call"></i>
                            </div>
                            <div class="content-part">
                                <h5 class="info-subtitle">Call Us</h5>
                                <ul class="contact-list">
                                    <li><span>Phone: </span><a href="tel:+(111)256352">+212 617672197</a></li>
                                    <li><span>Tell: </span><a href="tel:+(111)256352">+212 617672197</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 md-mb-30">
                        <div class="contact-info contact-mail">
                            <div class="icon-part">
                                <i class="flaticon flaticon-mail"></i>
                            </div>
                            <div class="content-part">
                                <h5 class="info-subtitle">Email Now</h5>
                                <ul class="contact-list">
                                    <li><span>Email: </span><a href="mailto:infosimple@gmail.com">contact@uiz.ac.ma</a></li>
                                    <li><span>Office: </span><a href="mailto:learning@gmail.com">contact@uiz.ac.ma</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 lg-pr-0">
                        <div class="contact-info contact-phone">
                            <div class="icon-part yellow-color">
                                <i class="flaticon flaticon-maps-and-flags"></i>
                            </div>
                            <div class="content-part">
                                <h5 class="info-subtitle">Location</h5>
                                <div class="address-des">
                                BP 8106 - Cité Dakhla Agadir
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5 md-mb-30">
                        <div class="contact-map">
                           <iframe src="https://maps.google.com/maps?q=agadir&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-7 pl-30 md-pl-15">
                        <div class="sc-quick-contact new-style">
                            <div class="inner-part mb-40">
                                <h2 class="title mb-15">Send A Massage</h2>
                            </div>
                            <div id="form-messages"></div>
                            <form onSubmit={sendData} id="contact-form" >
                                <div class="row">
                                    <div class="col-lg-6 mb-35 col-md-12">
                                        <input class="from-control" type="text" id="name" name="full_name" value={userInfo?.full_name} onChange={(e) => setUserInfo({...userInfo, full_name: e.target.value})} placeholder="Name" required="" />
                                    </div> 
                                    <div class="col-lg-6 mb-35 col-md-12">
                                        <input class="from-control" type="text" id="email" name="email" value={userInfo?.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} placeholder="Email" required=""/>
                                    </div>   
                                    <div class="col-lg-6 mb-35 col-md-12">
                                        <input class="from-control" type="text" id="phone" value={userInfo?.phone} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} name="phone" placeholder="Phone" required=""/>
                                    </div>   
                                    <div class="col-lg-6 mb-35 col-md-12">
                                        <input class="from-control" type="text" id="subject" value={userInfo?.subject} onChange={(e) => setUserInfo({...userInfo, subject: e.target.value})} name="subject" placeholder="Subject" required=""/>
                                    </div>
                                 
                                    <div class="col-lg-12 mb-30">
                                        <textarea class="from-control" value={userInfo?.msg} onChange={(e) => setUserInfo({...userInfo, msg: e.target.value})} id="message" name="message" placeholder=" Message" required=""></textarea>
                                    </div>
                                </div>
                                <div class="form-group mb-0">
                                    <input class="btn-send" type="submit"  value="Submit Now"/>
                                </div>       
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
       

    </div>

        <Footer />
        </>
    )
}

export default Contact