import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import Starter from "./Starter";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import End from "./End";
function App() {
  return (
    <div>

      <BrowserRouter>
        {/* کامپوننتی که میخواهیم تو همه صفحات باشه در اینجا استفاده میشود */}
        <Routes>


          {/* for call multipile component in one path */}
          <Route exact path="/" element={(<><Navbar /><Slider /><Starter /><Products /> <End /><Footer /></>)} />

          <Route exact path="/LoginPage" element={(<><Navbar /><LoginPage/></>)} />

          <Route exact path="/Profile" element={(<><Navbar /><Profile/></>)} />

          <Route exact path="/ShoppingCart" element={<ShoppingCart/>} />

          
        </Routes>
        {/* کامپوننتی که میخواهیم تو همه صفحات باشه در اینجا استفاده میشود */}
      </BrowserRouter>
    </div>
  );
}

export default App;
