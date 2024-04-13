import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleLogin from "./components/Loginwithgoogle/GoogleLogin";
import Profile from "./components/profile/Profile";

import Dashboard from "./components/dashboard/Dashboard";
import DogsList from "./components/dogslist/DogsList";
import MyProfile from "./components/myprofile/MyProfile";
import DogsStore from "./components/dogstores/DogsStore";

import DoctorList from './components/doctorlist/DoctorList'
import BottomIconDrawer from "./components/bottomicondrawer/BottomIconDrawer";
import Home from "./components/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" exact element ={<Dashboard/>}/>
        <Route path="/" exact element={<GoogleLogin />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/dogslist" exact element={<DogsList />} />
        <Route path="/myprofile" exact element={<MyProfile />} />
        <Route path="/dogsstore" exact element={<DogsStore />} />
        <Route path="/doctorlist" exact element={<DoctorList />} />
        <Route path="/bottomicondrawer" exact element={<BottomIconDrawer />} />
        <Route path="/home" exact element={<Home />} />

        
      </Routes>
    </Router>
  );
};

export default App;
