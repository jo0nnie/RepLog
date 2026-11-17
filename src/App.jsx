import './App.css'
import { useState } from 'react'
import ExerciseCard from './components/ExerciseCard'

function App() {
  const [exercises, setExercises] = useState([
      { id: 1, nombre: 'Sentadillas', series: 3, repeticiones: 12, peso: 30 },
      { id: 2, nombre: 'Press de banca', series: 4, repeticiones: 12, peso: 30 },
      { id: 3, nombre: 'Peso muerto', series: 4, repeticiones: 12, peso: 30 }
    ])
  const [nombre, setNombre] = useState('Sentadillas')
  const [series, setSeries] = useState(3)
  const [repeticiones, setRepeticiones] = useState(12)
  const [peso, setPeso] = useState(30)


  function addExercise() {
    setExercises([
      ...exercises,
      {
        id: Date.now(),
        nombre: nombre,
        series: series,
        repeticiones: repeticiones,
        peso: peso

      }
    ])
  }

  return (
    <main>
      <h1>RepLog</h1>
      <p>Your personal workout tracker</p>
      <label>
        Ejercicio
        <select
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        >
          <option value="Sentadillas">Sentadillas</option>
          <option value="Press de banca">Press de banca</option>
          <option value="Peso muerto">Peso muerto</option>
          <option value="Curl de bíceps">Curl de bíceps</option>
        </select>
      </label>

      <label>
        Series
        <input
          type="number"
          value={series}
          onChange={(e) => setSeries(Number(e.target.value))}
        />
      </label>

      <label>
        Repeticiones
        <input
          type="number"
          value={repeticiones}
          onChange={(e) => setRepeticiones(Number(e.target.value))}
        />
      </label>

      <label>
        Peso (kg)
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
        />
      </label>
      <button onClick={addExercise}>
        Agregar ejercicio
      </button>

      {exercises.map(exercise => (
        <ExerciseCard
          key={exercise.id}
          nombre={exercise.nombre}
          series={exercise.series}
          repeticiones={exercise.repeticiones}
          peso={exercise.peso}
        />
      ))}
    </main>
  )
}

export default App