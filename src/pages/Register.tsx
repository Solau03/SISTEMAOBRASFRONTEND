import React, { useState } from "react";
import Input from "../components/Input.tsx"; 
import Button from "../components/Button.tsx"; 
import styles from "./Register.module.css";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event: React.FormEvent) => {  // Aqui debemos cambiarlo a la hora de conectar con el backend.
    event.preventDefault();
    console.log("Registrando usuario:", name, email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleRegister}>
          <Input 
            type="text" 
            placeholder="Nombre completo" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button 
            text="Registrarse" 
            type="submit" 
          />
        </form>
      </div>
    </div>
  );
};

export default Register;