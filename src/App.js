import { useEffect, useState } from "react";
import { obtenerUsuarios } from "./api";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>{user.nombre} - {user.correo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;

