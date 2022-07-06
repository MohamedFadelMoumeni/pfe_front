import logo from './logo.svg';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Course from './pages/Course';
import { Routes, Route } from 'react-router-dom';
import Formations from './pages/Formation';
import CourseSingle from './pages/CourseSingle';
import './App.css';
import FormationsSingle from './pages/FormationsSignle';
import BogSingle from './pages/BlogSingle';
import Thesis from './pages/Thesis';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Homepage /> }/>
      <Route exact path="/course" element={<Course />}/>
      <Route exact path="/formations" element={<Formations />}/>
      <Route  path="/courses" element={<CourseSingle />}/>
      <Route  path="/formation" element={<FormationsSingle />}/>
      <Route path="/blog" element={<BogSingle />}/>
      <Route  path="/blogs" element={<Blog />}/>
      <Route path="/thesis" element={<Thesis />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
    
  );
}

export default App;
