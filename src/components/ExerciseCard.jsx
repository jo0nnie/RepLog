function ExerciseCard({ nombre, series, repeticiones, peso }) {
  return (
    <article>
      <h3>{nombre}</h3>
      <p>{series} series</p>
      <p>{repeticiones} repeticiones</p>
      <p>{peso} kg </p>
    </article>
  )
}

export default ExerciseCard

