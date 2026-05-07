import { useState } from "react";
import { useAlumnoContext } from "../context/AlumnoContext";
// Importaciones de Material UI
import { 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Box, 
  Paper 
} from "@mui/material";

function EditarAlumno() {
  const { alumno, actualizarAlumno } = useAlumnoContext();

  const [formulario, setFormulario] = useState({
    nombre: alumno.nombre,
    carrera: alumno.carrera,
    grupo: alumno.grupo,
    semestre: alumno.semestre,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarAlumno(formulario);
    alert("Información actualizada correctamente");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Editar información del alumno
        </Typography>

        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Carrera"
            variant="outlined"
            name="carrera"
            value={formulario.carrera}
            onChange={handleChange}
            fullWidth
            required
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Grupo"
              variant="outlined"
              name="grupo"
              value={formulario.grupo}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Semestre"
              variant="outlined"
              name="semestre"
              value={formulario.semestre}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ marginTop: 2 }}
          >
            Guardar cambios
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default EditarAlumno;