import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home/Home";
import Chennai from "./Cities/Chennai";
import ChennaiHospital from "./hospitals/Chennaihospital";
import ChennaiRes from "./restaurants/ChennaiRes";
import About from "./About/About";
import ChennaiSchools from "./schools/ChennaiSchools";
import ChennaiRestaurants from "./restaurants/ChennaiRes";
import ChennaiColleges from "./colleges/ChennaiColleges";
import Chennaitourist from "./tourist/Chennaitourist";
import ChennaiHotels from "./hotels/Chennaihotels";
import ChennaiShops from "./malls/ChennaiShops";
import ChennaiTheatres from "./theatres/ChennaiTheatres";
import Chennaifunctionhall from "./functionhalls/Chennaifunctionhall";
import Login from "./login/login_component";
import SignUp from "./login/signup_component";
import UserDetails from "./login/userDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cities from "./Cities/Cities";

import Salem from "./Cities/Salem";
import Salemhospital from "./hospitals/Salemhospital";
import Salemres from "./restaurants/Salemres";
import Salemschools from "./schools/Salemschool";
import Salemcolleges from "./colleges/Salemcolleges";
import Salemtourist from "./tourist/Salemtourist";
import Salemtheatre from "./theatres/Salemtheatre";
import Salemfunctionhall from "./functionhalls/Salemfunctionhall";
import SalemHotels from "./hotels/salemhotels";
import SalemMalls from "./malls/Salemmalls";

import Madurai from "./Cities/Madurai";
import MaduraiHospitals from "./hospitals/MaduraiHospitals";
import MaduraiRestaurants from "./restaurants/MaduraiRestaurants";
import MaduraiSchools from "./schools/MaduraiSchools";
import MaduraiColleges from "./colleges/MaduraiColleges";
import MaduraiTourist from "./tourist/MaduraiTourist";
import MaduraiHotels from "./hotels/MaduraiHotels";
import MaduraiMalls from "./malls/MaduraiMalls";
import MaduraiFunctionhalls from "./functionhalls/MaduraiFunctionhalls";
import MaduraiTheatres from "./theatres/Maduraitheatres";

import Kovai from "./Cities/Kovai";
import KovaiHospitals from "./hospitals/KovaiHospitals";
import KovaiRestaurants from "./restaurants/KovaiRestaurants";
import KovaiSchools from "./schools/KovaiSchools";
import KovaiColleges from "./colleges/KovaiColleges";
import KovaiTourist from "./tourist/KovaiTouristplaces";
import KovaiHotels from "./hotels/KovaiHotels";
import KovaiMalls from "./malls/KovaiMalls";
import KovaiFunctionhalls from "./functionhalls/KovaiFunctionHalls";
import KovaiTheatres from "./theatres/KovaiTheatres";

import Cuddalore from "./Cities/Cuddalore";
import Cuddalorehospitals from "./hospitals/Cuddalorehospital";
import Cuddaloreres from "./restaurants/Cuddaloreres";
import CuddaloreSchools from "./schools/CuddaloreSchools";
import Cuddalorecolleges from "./colleges/Cuddalorecolleges";
import Cuddaloretourist from "./tourist/Cuddaloretourists";
import Cuddaloretheatre from "./theatres/Cuddaloretheatre";
import CuddaloreShops from "./malls/cuddaloremalls";
import Cuddalorehotels from "./hotels/Cuddalorehotels";
import Cuddalorefunctionhalls from "./functionhalls/Cuddalorefunction";

import Vellore from "./Cities/Vellore";
import Erode from "./Cities/Erode";
import Tiruppur from "./Cities/Tiruppur";
import Nilgiris from "./Cities/Nilgiris";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/userdetails" element={<UserDetails />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cities" element={<Cities />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/chennai" element={<Chennai />} />
        <Route exact path="/chennai/hospitals" element={<ChennaiHospital />} />
        <Route exact path="/chennai/restaurants" element={<ChennaiRes />} />
        <Route exact path="/chennai/schools" element={<ChennaiSchools />} />
        <Route
          exact
          path="/chennai/restaurants"
          element={<ChennaiRestaurants />}
        />
        <Route exact path="/chennai/colleges" element={<ChennaiColleges />} />
        <Route exact path="/chennai/tourist" element={<Chennaitourist />} />
        <Route exact path="/chennai/hotels" element={<ChennaiHotels />} />
        <Route exact path="/chennai/shops" element={<ChennaiShops />} />
        <Route exact path="/chennai/theatres" element={<ChennaiTheatres />} />
        <Route
          exact
          path="/chennai/functionhall"
          element={<Chennaifunctionhall />}
        />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/salem" element={<Salem />} />
        <Route exact path="/salem/hospital" element={<Salemhospital />} />
        <Route exact path="/salem/restaurants" element={<Salemres />} />
        <Route exact path="/salem/schools" element={<Salemschools />} />
        <Route exact path="/salem/colleges" element={<Salemcolleges />} />
        <Route exact path="/salem/tourist" element={<Salemtourist />} />
        <Route exact path="/salem/theatre" element={<Salemtheatre />} />
        <Route
          exact
          path="/salem/functionhall"
          element={<Salemfunctionhall />}
        />
        <Route exact path="/salem/hotels" element={<SalemHotels />} />
        <Route exact path="/salem/shops" element={<SalemMalls />} />

        <Route exact path="/madurai" element={<Madurai />} />
        <Route exact path="/madurai/hospitals" element={<MaduraiHospitals />} />
        <Route
          exact
          path="/madurai/restaurants"
          element={<MaduraiRestaurants />}
        />
        <Route exact path="/madurai/schools" element={<MaduraiSchools />} />
        <Route exact path="/madurai/colleges" element={<MaduraiColleges />} />
        <Route exact path="/madurai/tourist" element={<MaduraiTourist />} />
        <Route exact path="/madurai/hotels" element={<MaduraiHotels />} />
        <Route exact path="/madurai/shops" element={<MaduraiMalls />} />
        <Route
          exact
          path="/madurai/functionhalls"
          element={<MaduraiFunctionhalls />}
        />
        <Route exact path="/madurai/theatres" element={<MaduraiTheatres />} />

        <Route exact path="/kovai" element={<Kovai />} />
        <Route exact path="/kovai/hospitals" element={<KovaiHospitals />} />
        <Route exact path="/kovai/restaurants" element={<KovaiRestaurants />} />
        <Route exact path="/kovai/schools" element={<KovaiSchools />} />
        <Route exact path="/kovai/colleges" element={<KovaiColleges />} />
        <Route exact path="/kovai/tourist" element={<KovaiTourist />} />
        <Route exact path="/kovai/hotels" element={<KovaiHotels />} />
        <Route exact path="/kovai/shops" element={<KovaiMalls />} />
        <Route
          exact
          path="/kovai/functionhalls"
          element={<KovaiFunctionhalls />}
        />
        <Route exact path="/kovai/theatres" element={<KovaiTheatres />} />

        <Route exact path="/cuddalore" element={<Cuddalore />} />
        <Route
          exact
          path="/cuddalore/hospitals"
          element={<Cuddalorehospitals />}
        />
        <Route exact path="/cuddalore/restaurants" element={<Cuddaloreres />} />
        <Route exact path="/cuddalore/schools" element={<CuddaloreSchools />} />
        <Route
          exact
          path="/cuddalore/colleges"
          element={<Cuddalorecolleges />}
        />
        <Route exact path="/cuddalore/tourist" element={<Cuddaloretourist />} />
        <Route
          exact
          path="/cuddalore/theatres"
          element={<Cuddaloretheatre />}
        />
        <Route exact path="/cuddalore/hotels" element={<Cuddalorehotels />} />
        <Route
          exact
          path="/cuddalore/functionhalls"
          element={<Cuddalorefunctionhalls />}
        />
        <Route exact path="/cuddalore/shops" element={<CuddaloreShops />} />

        <Route exact path="/vellore" element={<Vellore />} />

        <Route exact path="/erode" element={<Erode />} />

        <Route exact path="/tiruppur" element={<Tiruppur />} />

        <Route exact path="/nilgiris" element={<Nilgiris />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

