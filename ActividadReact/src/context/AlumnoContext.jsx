import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno, setAlumno ] = useState({
    nombre: "Jesus Daniel Jimenez Guerrero",
    carrera: " Licenciatura en Informática",
    grupo: "4-1",
    semestre: "8vo"
  });

const actualizarAlumno = (nuevosDatos) => {
    setAlumno(nuevosDatos);
};

  return (
    <AlumnoContext.Provider value={{ alumno, actualizarAlumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}