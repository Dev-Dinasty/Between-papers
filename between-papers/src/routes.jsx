import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AdminRoute from "./structure/adminView";
import ClientView from "./structure/clientView";
import Navigation from "./components/navigation";
const GeneralRoutes = () => {
  return( 
      <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<ClientView />} />     
          <Route exact path="/adminView/*" element={<AdminRoute />} />        
        </Routes>
      </Router>
    </div>
  );
}

export default GeneralRoutes;