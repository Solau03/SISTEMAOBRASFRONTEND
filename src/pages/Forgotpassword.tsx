import React, { useState } from "react";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import styles from "./Forgotpassword.module.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Enviando solicitud de recuperación para:", email);
    // Aquí iría la lógica para enviar el correo de recuperación
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>Recuperar Contraseña</h2>
        <p>Ingresa tu correo electrónico para recibir un enlace de recuperación.</p>
        <form onSubmit={handleResetPassword}>
          <Input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button text="Enviar enlace de recuperación" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
