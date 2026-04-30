import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Nombre: Jesus Daniel Jimenez Guerrero",
    carrera: "Carrera: Licenciatura en Informática",
    grupo: "Grupo: 4-1",
    semestre: "Semestre: 8vo"
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}