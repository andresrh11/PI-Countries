export default function validaciones(input) {
  const { name, countries, duracion, dificultad, temporada } = input;

  let errors = {};
  if (!name) errors.name = "Se requiere un nombre";
  if (name.length > 15 && name !== "")
    errors.name = "Debe tener no mas de 15 caracteres";
  if (name.length < 2 && name !== "")
    errors.name = "Debe tener almenos 2 caracteres";
  if (temporada === "") errors.temporada = "Se requiere una temporada";
  if (duracion === "") errors.duracion = "Se requiere un tiempo de duración";
  if (dificultad === "") errors.dificultad = "Se requiere una dificultad";
  if (countries.length < 1) errors.countries = "debes seleccionar uno";

  return errors;
}
