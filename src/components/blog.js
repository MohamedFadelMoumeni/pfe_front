import React, {useState, useEffect} from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel"
import { getAllBlogs } from "../services/Blog";

const BlogSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAllBlogs();
            setData(data)
        }
        getData()
    }, [])
    return(
        <div id="sc-blog" className="sc-blog main-home pb-110 pt-110 md-pt-70 md-pb-70">
        <div className="container">  
            <div className="sec-title mb-60 text-center md-mb-30">
                <div className="sub-title primary">Blog & News <span className="heading-border-line"></span></div>
                <h2 className="title mb-0">Every single Update</h2>
            </div>
            <OwlCarousel loop margin={10} nav className=" sc-carousel owl-carousel nav-style2" >

              {
                  data.length > 0 ? data.map(blog => (
                    <div key={blog.id} className="blog-item">
                    <div className="image-part">
                        <img src={blog.image ? "data:image/gif;base64," +blog.image : "assets/images/blog/3.jpg"} alt="" />
                    </div>
                    <div className="blog-content">
                        <ul className="blog-meta">
                            <li><i className="fa fa-user-o"></i> Admin</li>
                            <li><i className="fa fa-calendar"></i>{blog.createdAt}</li>
                        </ul>
                        <h3 className="title"><a href="blog-single.html">{blog.title}</a></h3>
                        <div className="desc">{blog.content.split(0, 9)}</div>
                        <div className="btn-btm">
                            <div className="rs-view-btn">
                                <a href="blog-single.html">Read More</a>
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

export default BlogSection;