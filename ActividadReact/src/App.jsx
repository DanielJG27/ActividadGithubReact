import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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

function App() {
  return (
    <>
      <section id="center">
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

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
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
      <section id="spacer"></section>
    </>
  )
}

export default App
