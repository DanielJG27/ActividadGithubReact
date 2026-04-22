import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../App.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 10) {
      alert("¡Límite alcanzado! El valor máximo es 10.");
      setCount(10);
    }

    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className="contador-container">
      <h2>Valor actual: {count}</h2>

      <div className="button-group">

        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>


        <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
          Decrementar
        </button>
      </div>
    </div>
  );
}

function createData(Nombre, Apellido, Edad) {
  return { Nombre, Apellido, Edad };
}

const Personas = [
  {
    Nombre: 'Daniel',
    Apellido: 'Jimenez',
    Edad: 22
  },
  {
     Nombre: 'Hector',
    Apellido: 'Lopez',
    Edad: 15
  },
    {

     Nombre: 'Mario',
    Apellido: 'Chavez',
    Edad: 13
    },
    {

     Nombre: 'Santiago',
    Apellido: 'Hernandez',
    Edad: 22
    },
    {

     Nombre: 'Carlos',
    Apellido: 'Osuna',
    Edad: 11
    },
    {

     Nombre: 'Valeria',
    Apellido: 'Yogurt',
    Edad: 21
    },
    {

     Nombre: 'Hugo',
    Apellido: 'Sanchez',
    Edad: 26
    },
]
const rows = [];

Personas.forEach(Persona => {
  rows.push(createData(Persona.Nombre, Persona.Apellido, Persona.Edad))
})

function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Nombre}
              </TableCell>
              <TableCell align="right">{row.Apellido}</TableCell>
              <TableCell align="right">{row.Edad}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CreateTable() {
  const {count, setCount} = useState(0)
  return (
    <>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started with Hooks</h1>
          <p>Interactúa con el contador personalizado:</p>
        </div>


        <Contador />

      </section> */}

      <DenseTable />
      <div className="ticks"></div>

      {/* <section id="next-steps">
        <div id="docs">
          <h2>Documentación de Hooks</h2>
          <p>Conceptos clave utilizados:</p>
          <ul>
            <li><strong>useState:</strong> Para el estado local.</li>
            <li><strong>useEffect:</strong> Para efectos secundarios y validaciones.</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}




function Tablas() {
  return (
    <div>
      <h1>Tabla</h1>
      <CreateTable />
    </div>
  );
}

export default Tablas;