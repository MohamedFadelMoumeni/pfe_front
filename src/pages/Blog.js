import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {getCourses} from "../services/Course"
import {getDepts} from "../services/departement"
import { getInstructors } from "../services/instructor";
import { getAllBlogs } from "../services/Blog";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const history = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    const  [filteredData, setFilteredDara] = useState([]);
    const [users, setUsers] = useState([]);
    const [depts, setDepts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getAllBlogs();
            const deptsData = await getDepts()
            const usersData = await getInstructors()
            setBlogs(data?.data);
            setUsers(usersData)
        }
        getData()
    }, [])
    const handleFilter  = (e) => {
        const value = e.target.value;
        let updatedData = [];
        if(value.length && value !== "all"){
            updatedData = blogs?.filter(course => {
               const teacher = course?.user?.id == value;
                const startsWith = course.title.toLowerCase().startsWith(value.toLowerCase()) ;
                const includes = course.title.toLowerCase().includes(value.toLowerCase()) ; 
                if(teacher) return true           
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
              
 
            </div>
            <div id="sc-popular-courses" className="sc-popular-courses main-home pt-120 pb-110 md-pt-80 md-pb-70">
                <div className="container">  
                    <div className="row">
                        <div className="course-sidebar-area col-lg-4">
                          
                            
                            <div className="course-features-info">
                                <h4 className="course-title">Author</h4>
                                {
                                    users.map(user => (
                                        <div key={user.id} className="form-check">
                                  <input onChange={handleFilter} value={user.id} className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor" />
                                  <label className="form-check-label" for="RadioInstructor">
                                    {user.full_name}
                                  </label>
                                </div>
                                    ))
                                }
                               
                            </div>
                        </div>  
                       
                        <div className="col-lg-8">
                            <div className="sc-search-area d-flex align-items-center mb-30">
                                <div className="search-wrap">
                                    <input type="search" placeholder="Searching..." name="s" className="search-input" onChange={handleFilter}  />
                                    <button type="submit" value="Search"><i className="flaticon flaticon-magnifying-glass"></i></button>
                                </div>
                                
                                <div className="show-result">
                                    Showing  {searchValue?.length ? filteredData?.length  : blogs?.length} results
                                </div>
                            </div>
                            <div className="row">
                                {
                                   filteredData.length == 0 && !searchValue ? blogs?.length > 0 && blogs.map(course => (
                                        <div key={course.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={course.image ? `http://localhost:3002/${course.image}` : "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => history('/blog', {
                                                    state: {
                                                        id: course.id
                                                    }
                                                })}> {course.title}</h3>
                                                <div className="des">
                                                   {
                                                       course.content.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        {
                                                            course?.user?.image && <img src={`http://localhost:3002/${course?.user?.image}`}/>
                                                        }


                                    
                                                       {course?.user?.full_name}                             
                                                    </li>
                                                    
                                                </ul>
                                               
                                            </div>
                                        </div>
                                   </div>
                                        
                                    )) : filteredData.map(course => (
                                        <div key={course.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={course.image ? `http://localhost:3002/${course.image}` : "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => history('/blog', {
                                                    state: {
                                                        id: course.id
                                                    }
                                                })}> {course.title}</h3>
                                                <div className="des">
                                                   {
                                                       course.content.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        {
                                                            course?.user?.image && <img src={`http://localhost:3002/${course?.user?.image}`}/>
                                                        }


                                    
                                                       {course?.user?.full_name}                             
                                                    </li>
                                                    
                                                </ul>
                                                
                                            </div>
                                        </div>
                                   </div>
                                    ))
                                }
                              
                            </div>
                           
                        </div>
                     </div>
                </div>
            </div>
        </>

    )
}

export default Blog;