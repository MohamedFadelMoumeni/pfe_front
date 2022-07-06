import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {getCourses} from "../services/Course"
import {getDepts} from "../services/departement"
import { getInstructors } from "../services/instructor";
import { getAllBlogs } from "../services/Blog";
import { Link, useNavigate } from "react-router-dom";

const Thesis = () => {
    const [data, setData] = useState([]);
    const history = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    const  [filteredData, setFilteredDara] = useState([]);
    const [users, setUsers] = useState([]);
    const [depts, setDepts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('http://ieeexploreapi.ieee.org/api/v1/search/articles?apikey=b9m5w887njnc33kyftj4tjmk&format=json&max_records=25&start_record=1&sort_order=asc&sort_field=article_number&author=all');
            const respJson = await resp.json();
            setData(respJson.articles);
        }
        getData()
    }, [])
    const handleFilter  = (e) => {
        const value = e.target.value;
        let updatedData = [];
        if(value.length && value !== "all"){
            updatedData = data?.filter(article => {
                const startsWith = article.title.toLowerCase().startsWith(value.toLowerCase()) ;
                const includes = article.title.toLowerCase().includes(value.toLowerCase());            if(startsWith) return true;
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
    console.log("This is data : ", data)
    return (
        <>
        <Header />
        <div className="sc-breadcrumbs breadcrumbs-overlay">
              
             
            </div>
            <div id="sc-popular-courses" className="sc-popular-courses main-home pt-120 pb-110 md-pt-80 md-pb-70">
                <div className="container">  
                    <div className="row">
                       
                        <div className="col-sm-12">
                            <div className="sc-search-area d-flex align-items-center mb-30">
                                <div className="search-wrap">
                                    <input type="search" placeholder="Searching..." name="s" className="search-input" onChange={handleFilter} />
                                    <button type="submit" value="Search"><i className="flaticon flaticon-magnifying-glass"></i></button>
                                </div>
                                
                                <div className="show-result">
                                    Showing  {searchValue.length ? filteredData.length  : data?.length} results
                                </div>
                            </div>
                            <div className="row">
                                {
                                   filteredData.length == 0 && !searchValue ? data.length > 0 && data.map(article => (
                                        <div key={article.id} className="col-sm-4 mb-30">
                                        <div className="courses-grid">
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => window.open(article?.pdf_url, "_blank")}> {article?.title}</h3>
                                                
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                       {article?.authors?.authors[0]?.full_name}                             
                                                    </li>
                                                    
                                                </ul>
                                               
                                            </div>
                                        </div>
                                   </div>
                                        
                                    )) : filteredData.map(article => (
                                        <div key={article.id} className="col-sm-4 mb-30">
                                        <div className="courses-grid">
                                            <div className="img-part">
                                                <a href="#"><img src={article?.img ? "data:image/gif;base64," + article?.img : "assets/images/courses/1.jpg"} alt=""/></a>
                                            </div>
                                            <div className="content-part">
                                                
                                                <h3 className="title" style={{cursor: "pointer"}} onClick={() => history('/blog', {
                                                    state: {
                                                        id: article?.id
                                                    }
                                                })}> {article?.title}</h3>
                                                
                                                <ul className="meta-part">
                                                    <li className="user">
                                                        <img src="assets/images/courses/user/1.jpg" alt=""/>
                                                       {article?.authors[0]?.full_name}                             
                                                    </li>
                                                    
                                                </ul>
                                                
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

export default Thesis;