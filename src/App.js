import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleLogin from "./components/Loginwithgoogle/GoogleLogin";
import Profile from "./components/profile/Profile";
import DogsStore from "./components/dogstores/DogsStore";
import BottomIconDrawer from "./components/bottomicondrawer/BottomIconDrawer";
import Home from "./components/home/Home";
import Accountsetting from "./components/profile/accountsetting/Accountsetting";
import PlanSetting from "./components/profile/plansetting/PlanSetting";
import CurrentLocation from './components/profile/mylocation/MyLocation'
import ShowMe from "./components/profile/showme/ShowMe";
import Match from "./components/love/match/Match";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GoogleLogin />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/dogsstore" exact element={<DogsStore />} />\
        <Route path="/bottomdrawer" exact element={<BottomIconDrawer />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/accountsetting" exact element={<Accountsetting />} />
        <Route path="/plansetting" exact element={<PlanSetting/>} />
        <Route path="/currentlocation" exact element={<CurrentLocation/>} />
        <Route path="/showme" exact element={<ShowMe/>} />
        <Route path="/match" exact element={<Match/>} />

        
      </Routes>
    </Router>
  );
};

export default App;
