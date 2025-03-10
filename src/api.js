

const url = "http://127.0.0.1:5000/api";

export const obtenerUsuarios = async () => {
  try {
    const response = await fetch(`${url}/usuarios/mostrar`);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const registrarUsuario = async (datos) => {
  try {
    const response = await fetch(`${url}/usuarios/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const loginUsuario = async (email, password) => {
  try {
    console.log("Enviando datos:", { email, password }); 

    const response = await fetch(`${url}/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const jsonData = await response.json();
    console.log("Respuesta del backend:", jsonData);

    if (!response.ok) {
      throw new Error(jsonData.error || "Error en la autenticación.");
    }

    sessionStorage.setItem("userSessionStorageData", JSON.stringify(jsonData));
    window.location = "/";
  } catch (err) {
    console.error("Error en el inicio de sesión:", err.message);
    alert(err.message);
  }
};
