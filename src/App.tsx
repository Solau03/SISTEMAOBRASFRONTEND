import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ForgotPassword from "./pages/Forgotpassword.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Página de inicio (Login) */}
        <Route path="/registro" element={<Register />} /> {/* Página de registro */}
        <Route path="/recuperar-contrasena" element={<ForgotPassword />} /> {/* Página de registro */}
      </Routes>
    </Router>
  );
};

export default App;
