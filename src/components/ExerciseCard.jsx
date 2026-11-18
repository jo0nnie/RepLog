function ExerciseCard({ id, nombre, series, repeticiones, peso, onDelete }) {
  return (
    <article>
      <h3>{nombre}</h3>
      <p>{series} series</p>
      <p>{repeticiones} repeticiones</p>
      <p>{peso} kg</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </article>
  )
}

export default ExerciseCard
