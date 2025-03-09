const API_URL = "http://127.0.0.1:5000";

export const obtenerUsuarios = async () => {
  try {
    const response = await fetch(`${API_URL}/api/usuarios/mostrar`);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const registrarUsuario = async (datos) => {
  try {
    const response = await fetch(`${API_URL}/usuarios/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
