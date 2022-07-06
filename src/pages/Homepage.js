import React  from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularCategory from "../components/popular-category";
import Aboutus from "../components/about-us";
import Statistics from "../components/statistics";
import Testimentials from "../components/testimonial";
import ProfessionTeacher from "../components/professional-teachers";
import Join from "../components/join";
import BlogSection from "../components/blog";
import Footer from "../components/footer";
const Homepage = () => {
    return (
        <>
        <Header />
        <div className="main-content">
            <Hero />
            <PopularCategory />
            <Aboutus />
            <Statistics />
            <ProfessionTeacher />
            <Join />
            <BlogSection />
            <Footer />
        </div>
        </>
    )
}

export default Homepage;