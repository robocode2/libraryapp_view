import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInScreen from "./components/SignInOut/SignInScreen";
import Layout from "./components/BrowsePage/Layout";
import UserPage from "./components/Profile/UserPage";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/profile" element={<UserPage />} />
          <Route exact path="/browse" element={<Layout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
