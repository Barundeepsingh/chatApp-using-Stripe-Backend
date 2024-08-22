import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Chat from './components/Chat/Chat'
import Session from "./components/Session/Session";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
            path="/chat"
            element={getToken() ? <Chat /> : <Navigate to="/" />}
          />
      <Route path="/session" element={<Session />}/>
    </Routes>
  );
};

export default AppRoutes;