import React, { useState } from "react";
import { loginUsuario } from "../api";

function Login() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    async function handleSubmit(event) {
        event.preventDefault(); 
        
        if (!correo || !contraseña) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            await loginUsuario(correo, contraseña); 
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error en el inicio de sesión. Verifica tus credenciales.");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        placeholder="Ingrese el correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese la contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;
