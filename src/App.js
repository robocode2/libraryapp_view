import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInScreen from "./pages/SignIn";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

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
