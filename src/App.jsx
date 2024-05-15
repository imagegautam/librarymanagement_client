import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import SignIn from "./pages/sigin-signup/SignIn";
import SignUp from "./pages/sigin-signup/SignUp";
import Product from "./pages/product/Product";
import Dashobard from "./pages/dashboard/Dashobard";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        {/* private routes */}

        <Route path="/dashboard" element={<Dashobard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
