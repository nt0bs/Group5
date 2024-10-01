import logo from './logo.svg';
import { Routes,  Route } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Homepage.js';
import AddJob from './components/Addjob/Addjob.js';
const App = () => {
  
   return (
    
     <div>
       <Routes>
         <Route path="/" element ={<Home />}/>
         <Route path="/add-job" element ={<AddJob/>}/>
         </Routes> 
       </div>
   );
 }
 
 export default App;
