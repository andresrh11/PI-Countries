export default function Activity(props) {
  return (
    <div>
      {props.activities && props.activities.length ? (
        props.activities.map((e) => (
          <div key={e.id}>
            <h1> {e.name} </h1>
            <h1> {e.duracion} </h1>
            <h1> {e.temporada} </h1>
            <h1> {e.dificultad} </h1>
          </div>
        ))
      ) : (
        <div> No hay actividades</div>
      )}
    </div>
  );
}
