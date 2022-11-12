import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Chennai from './Chennai';
import ChennaiHospital from './Chennaihospital';
import ChennaiRes from './ChennaiRes';
import About from './About';
import ChennaiSchools from './ChennaiSchools';
import ChennaiRestaurants from './ChennaiRes';
import ChennaiColleges from './ChennaiColleges';
import Chennaitourist from './Chennaitourist';
import ChennaiHotels from './Chennaihotels';
import ChennaiShops from './ChennaiShops';
import ChennaiTheatres from './ChennaiTheatres';
import Chennaifunctionhall from './Chennaifunctionhall';
import Login from "./login_component";
import SignUp from"./signup_component";
import UserDetails from"./userDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Cities from './Cities';

import Salem from './Salem';
import Salemhospital from './Salemhospital';
import Salemres from './Salemres';
import Salemschools from './Salemschool';
import Salemcolleges from './Salemcolleges';
import Salemtourist from './Salemtourist';
import Salemtheatre from './Salemtheatre';
import Salemfunctionhall from './Salemfunctionhall';
import SalemHotels from './salemhotels';
import SalemMalls from './Salemmalls';

import Madurai from './Madurai';
import MaduraiHospitals from './MaduraiHospitals';
import MaduraiRestaurants from './MaduraiRestaurants';
import MaduraiSchools from './MaduraiSchools';
import MaduraiColleges from './MaduraiColleges';
import MaduraiTourist from './MaduraiTourist';
import MaduraiHotels from './MaduraiHotels';
import MaduraiMalls from './MaduraiMalls';
import MaduraiFunctionhalls from './MaduraiFunctionhalls';
import MaduraiTheatres from './Maduraitheatres';

import Kovai from './Kovai';
import KovaiHospitals from './KovaiHospitals';
import KovaiRestaurants from './KovaiRestaurants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/userdetails' element={<UserDetails/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/cities' element={<Cities/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/chennai' element={<Chennai/>}/>
        <Route exact path='/chennai/hospitals' element={<ChennaiHospital/>}/>
        <Route exact path='/chennai/restaurants' element={<ChennaiRes />}/>
        <Route exact path='/chennai/schools' element={<ChennaiSchools />}/>
        <Route exact path='/chennai/restaurants' element={<ChennaiRestaurants />}/>
        <Route exact path='/chennai/colleges' element={<ChennaiColleges />}/>
        <Route exact path='/chennai/tourist' element={<Chennaitourist />}/>
        <Route exact path='/chennai/hotels' element={<ChennaiHotels />}/>
        <Route exact path='/chennai/shops' element={<ChennaiShops />}/>
        <Route exact path='/chennai/theatres' element={<ChennaiTheatres />}/>
        <Route exact path='/chennai/functionhall' element={<Chennaifunctionhall />}/>

        <Route exact path='/about' element={<About />}/>

        <Route exact path='/salem'   element={<Salem/>}/>
        <Route exact path='/salem/hospital'   element={<Salemhospital/>}/>
        <Route exact path='/salem/restaurants'   element={<Salemres/>}/>
        <Route exact path='/salem/schools'   element={<Salemschools/>}/>
        <Route exact path='/salem/colleges'   element={<Salemcolleges/>}/>
        <Route exact path='/salem/tourist'   element={<Salemtourist/>}/>
        <Route exact path='/salem/theatre'   element={<Salemtheatre/>}/>
        <Route exact path='/salem/functionhall'   element={<Salemfunctionhall/>}/>
        <Route exact path='/salem/hotels'   element={<SalemHotels/>}/>
        <Route exact path='/salem/shops'   element={<SalemMalls/>}/>

        <Route exact path='/madurai'   element={<Madurai/>}/>
        <Route exact path='/madurai/hospitals'   element={<MaduraiHospitals/>}/>
        <Route exact path='/madurai/restaurants'   element={<MaduraiRestaurants/>}/>
        <Route exact path='/madurai/schools' element={<MaduraiSchools />}/>
        <Route exact path='/madurai/colleges' element={<MaduraiColleges />}/>
        <Route exact path='/madurai/tourist' element={<MaduraiTourist />}/>
        <Route exact path='/madurai/hotels' element={<MaduraiHotels />}/> 
        <Route exact path='/madurai/shops' element={<MaduraiMalls />}/>
        <Route exact path='/madurai/functionhalls' element={<MaduraiFunctionhalls />}/>
        <Route exact path='/madurai/theatres' element={<MaduraiTheatres />}/>

        <Route exact path='/kovai' element={<Kovai />}/>
        <Route exact path='/kovai/hospitals' element={<KovaiHospitals />}/>
        <Route exact path='/kovai/restaurants' element={<KovaiRestaurants />}/>



      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
