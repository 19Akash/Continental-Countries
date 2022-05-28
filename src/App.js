
import './App.css';
import Continents from './Components/Continents/Continents';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Countries from './Components/Countries/Countries.js'
import { useState } from 'react';

function App() {
  const [countriesDetails,setCountriesDetails] = useState();
  const handleCountriesDetails=(value,)=>{
     setCountriesDetails(value);
  }
  return (
   <Router>
     <Routes>
       <Route exact path='/' element={<Continents  handleData={handleCountriesDetails}/>}/> 
       <Route path='/details' element={<Countries data={countriesDetails}/>}/>
     </Routes>
   </Router>
     
   
  );
}

export default App;
