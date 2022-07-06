import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {getFormations} from "../services/Formation"
import {getCourses} from "../services/Course"
import {getDepts} from "../services/departement"
import { getInstructors } from "../services/instructor";
import { Link, useNavigate } from "react-router-dom";


const Formations = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const  [filteredData, setFilteredDara] = useState([]);
    const [users, setUsers] = useState([]);
    const [etablissements, setEtablissement] = useState([])
    const [depts, setDepts] = useState([]);
    const navigate = useNavigate()

    const getAllEtab  = async () => {
        try{
            const resp = await fetch('http://localhost:3002/etabli');
            const respJson = await resp.json();
            return respJson
        }catch(e){
            console.log(e.message)
        }
    }
    useEffect(() => {
        const getData = async () => {
            const data = await getFormations();
            const deptsData = await getDepts()
            const usersData = await getInstructors()
            const etablis = await getAllEtab()
            setData(data)
            setDepts(deptsData)
            setUsers(usersData)
            setData(data)
            setEtablissement(etablis)
        }
        getData()
    }, [])
    const handleFilter  = (e) => {
        const value = e.target.value;
        let updatedData = [];
        if(value.length && value !== "all"){
            updatedData = data?.filter(course => {
              console.log(course)
                const startsWith = course?.name.toLowerCase().startsWith(value?.toLowerCase()) ||
                course?.description.toLowerCase().startsWith(value?.toLowerCase())  ||
                course?.departementId == value || course?.departement?.etablissementId == value

                const includes = course.description.toLowerCase().includes(value.toLowerCase()) ||
                course.departement_id == value ||
                course.university_id == value ||
                course.name.toLowerCase().includes(value.toLowerCase()) 
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
                </div>
  
            </div>
            <div id="sc-popular-courses" className="sc-popular-courses main-home pt-120 pb-110 md-pt-80 md-pb-70">
                <div className="container">  
                    <div className="row">
                        <div className="course-sidebar-area col-lg-4">
                            <div className="course-features-info">
                                <h4 className="course-title">Etablissement</h4>
                                
                                <div className="form-check">
                                  <input  onChange={handleFilter} value="all" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                    All
                                  </label>
                                </div>
                               {
                                etablissements?.map(et => (
                                    <div key={et.id} className="form-check">
                                    <input onChange={handleFilter} value={et.id}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                     {et.name}
                                    </label>
                                  </div>
                                ))
                               }
                               
                            </div>
                            
                            <div className="course-features-info">
                                <h4 className="course-title">Departement</h4>
                                <div className="form-check">
                                  <input  onChange={handleFilter} value="all" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                    All
                                  </label>
                                </div>
                              {
                                  depts?.map(dept => (
                                    <div key={dept.id} className="form-check">
                                    <input onChange={handleFilter} value={dept.id} className="form-check-input" type="radio" name="flexRadioInstructor" id="RadioInstructor" />
                                    <label className="form-check-label" for="RadioInstructor">
                                      {dept.name}
                                    </label>
                                  </div>
                                  ))
                              }
                            </div>
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
                                   filteredData.length == 0 && !searchValue ? data.length > 0 && data.map(formation => (
                                        <div key={formation.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={formation.image ? `http://localhost:3002/${formation.image}`:  "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => navigate('/formation', {
                                                    state: {
                                                        id: formation.id
                                                    }
                                                })}>{formation.name}</h3>
                                                <div className="des">
                                                   {
                                                       formation.description.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        
                                                              {formation?.university?.name}                 
                                                    </li>
                                                    
                                                </ul>
                                              
                                            </div>
                                        </div>
                                   </div>
                                        
                                    )) : filteredData.map(course => (
                                        <div key={course.id} className="col-md-6 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                            <a href="#"><img src={course.image ? `http://localhost:3002/${course.image}`:  "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => navigate('/formation', {
                                                    state: {
                                                        id: course.id
                                                    }
                                                })}>{course.title}</h3>
                                                <div className="des">
                                                   {
                                                       course.description.slice(0, 40) + "..."
                                                   }
                                                </div>
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                        {course.university.name}                                
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

export default Formations;