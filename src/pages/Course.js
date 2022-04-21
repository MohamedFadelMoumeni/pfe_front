import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {getCourses} from "../services/Course"

const Course = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const  [filteredData, setFilteredDara] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getCourses();
            setData(data)
        }
        getData()
    }, [])
    const handleFilter  = (e) => {
        const value = e.target.value;
        let updatedData = [];
        if(value.length && value !== "all"){
            updatedData = data?.filter(course => {
              console.log(course)
                const startsWith = course.title.toLowerCase().startsWith(value.toLowerCase()) ||
                course.description.toLowerCase().startsWith(value.toLowerCase()) || course.departementId == e.target.value;

                const includes = course.title.toLowerCase().includes(value.toLowerCase()) ||
                course.description.toLowerCase().includes(value.toLowerCase());
                if(startsWith) return true;
                if(includes && !startsWith) return true
                return false;
            })
            setFilteredDara(updatedData)
            setSearchValue(value)
            
        }else{
          setSearchValue('')
          setFilteredDara([])
        }
        
    }
    return (
        <>
        <Header />
        <div className="sc-breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs Image" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title">Course 2</h1>
                    <ul>
                        <li>
                            <a className="active" href="index.html">Home </a>
                        </li>
                        <li className="active">Course 2</li>
                    </ul>
                </div>
            </div>
            <div id="sc-popular-courses" className="sc-popular-courses main-home pt-120 pb-110 md-pt-80 md-pb-70">
                <div className="container">  
                    <div className="row">
                        <div className="course-sidebar-area col-lg-4">
                            <div className="course-features-info">
                                <h4 className="course-title">Course Category</h4>
                                
                                <div className="form-check">
                                  <input  onChange={handleFilter} value="all" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                    All
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input onChange={handleFilter} value="1"  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                  <label className="form-check-label" for="flexRadioDefault1">
                                   Math
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input  onChange={handleFilter} value="2" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                    Computer Science
                                  </label>
                                </div>
                     
                            </div>
                            
                            <div className="course-features-info">
                                <h4 className="course-title">Instructor</h4>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor" />
                                  <label className="form-check-label" for="RadioInstructor">
                                    Benjamin (2)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor2" />
                                  <label className="form-check-label" for="RadioInstructor2">
                                    Johnson (2)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor3"  />
                                  <label className="form-check-label" for="RadioInstructor3">
                                    Michel (5)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor4"  />
                                  <label className="form-check-label" for="RadioInstructor4">
                                    Subrina Flora (8)
                                  </label>
                                </div>
                            </div>
                            <a className="readon dblock text-center" href="#">Submit Now <i className="flaticon flaticon-right-arrow"></i> </a>
                        </div>  
                       
                        <div className="col-lg-8">
                            <div className="sc-search-area d-flex align-items-center mb-30">
                                <div className="search-wrap">
                                    <input type="search" placeholder="Searching..." name="s" className="search-input" onChange={handleFilter} />
                                    <button type="submit" value="Search"><i className="flaticon flaticon-magnifying-glass"></i></button>
                                </div>
                                
                                <div className="show-result">
                                    Showing  {searchValue.length ? filteredData.length  : data.length} results
                                </div>
                            </div>
                            <div className="row">
                                {
                                   filteredData.length == 0 && !searchValue ? data.length > 0 && data.map(course => (
                                        <div key={course.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={course.image ? "data:image/gif;base64," + course.image : "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title"><a href="course-single.html">{course.title}</a></h3>
                                                <div className="des">
                                                   {
                                                       course.description.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                        Michael Joe                                 
                                                    </li>
                                                    
                                                </ul>
                                                <div className="bottom-part">
                                                    
                                                    <div className="btn-part">
                                                        <a href="#"><i className="flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                        
                                    )) : filteredData.map(course => (
                                        <div key={course.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={course.image ? "data:image/gif;base64," + course.image : "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title"><a href="course-single.html">{course.title}</a></h3>
                                                <div className="des">
                                                   {
                                                       course.description.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                        Michael Joe                                 
                                                    </li>
                                                    
                                                </ul>
                                                <div className="bottom-part">
                                                    
                                                    <div className="btn-part">
                                                        <a href="#"><i className="flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                    ))
                                }
                              
                            </div>
                            <ul className="sc-navigation text-end">
                                <li><i className="flaticon flaticon-left-arrow"></i></li>
                                <li className="active">1</li>
                                <li>2</li>
                                <li><i className="flaticon flaticon-right-arrow"></i></li>
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
        </>

    )
}

export default Course;