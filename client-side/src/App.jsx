// import { useState, useEffect } from "react";
import Nasa from "./pages/Nasa.jsx";
import MetropolitanMuseum from "./pages/MetropolitanMuseum.jsx";
import Layout from "./components/Navbar/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Developers from "./pages/Developers.jsx";
import JACEnterprise from "./pages/JACEnterprise.jsx";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devs" element={<Developers />} />
          <Route path="/jac-enterprise" element={<JACEnterprise />} />
          {/* <Route path="/" element={<Nasa />} /> */}
          {/* <Route path="/" element={<MetropolitanMuseum />} /> */}
        </Routes>
        {/* <Nasa />
        <MetropolitanMuseum /> */}
      </Layout>
    </div>
  );
}

export default App;
