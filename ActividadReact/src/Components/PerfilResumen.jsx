import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  const {nombre, carrera, grupo, semestre } = alumno;
  return (
    <div>
      <h2>Resumen del perfil</h2>
      <p>{nombre} - {carrera} - {grupo} - {semestre} </p>
    </div>
  );
}

export default PerfilResumen;