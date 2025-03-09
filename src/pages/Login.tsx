import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Rutas
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // Hook de navegación

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login con:", email, password);
    // Aquí iría la lógica de autenticación
  };

  // Función para manejar el registro
  const handleRegister = () => {
    navigate("/registro"); 
  };

  // Función para recuperar contraseña
  const handleForgotPassword = () => {
    navigate("/recuperar-contrasena"); 
  };

  return (
    <div className={styles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {/* Botón de Login (único que mantiene type="submit") */}
        <button type="submit">Entrar</button>

        {/* Botones secundarios con navegación */}
        <div className={styles.secondaryButtons}>
          <button 
            type="button" 
            onClick={handleRegister}
          >
            Registrarse
          </button>
          
          <button 
            type="button"
            onClick={handleForgotPassword}
          >
            Olvidé mi contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;