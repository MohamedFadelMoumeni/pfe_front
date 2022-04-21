import logo from './logo.svg';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Course from './pages/Course';
import { Routes, Route } from 'react-router-dom';
import Formations from './pages/Formation';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Homepage /> }/>
      <Route exact path="/course" element={<Course />}/>
      <Route exact path="/formations" element={<Formations />}/>
    </Routes>
   
    
  );
}

export default App;
