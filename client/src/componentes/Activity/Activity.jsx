import "./activity.css";
export default function Activity(props) {
  return (
    <div>
      {props.activities && props.activities.length ? (
        props.activities.map((e) => (
          <div key={e.id} className="actividades">
            <h1> {e.name} </h1>
            <h3> Duracion: {e.duracion} </h3>
            <h3>Temporada: {e.temporada} </h3>
            <h3> Dificultad: {e.dificultad} </h3>
          </div>
        ))
      ) : (
        <div className="no__hay"> No hay actividades</div>
      )}
    </div>
  );
}
