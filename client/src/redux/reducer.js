import {
  GET_ALL_COUNTRIES,
  CREATE_ACTIVITY,
  GET_COUNTRY_BY_ID,
  SEARCH_COUNTRY,
  FILTER_STATUS,
  FILTER_ALFABETIC,
  FILTER_POPULATION,
  GET_ACTIVITIES,
  FILTRO_ACT,
} from "./actions";

const initialState = {
  countriesAll: [],
  activityCreate: [],
  buscarCountry: [],
  countryId: [],
  allCountries: [],
  getActivities: [],
  filtroCountries: [],
  activitiesGet: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countriesAll: action.payload,
        allCountries: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activityCreate: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryId: action.payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        buscarCountry: action.payload,
      };
    case FILTER_STATUS:
      const allCountries = state.allCountries;

      const filtroStatus =
        action.payload === "All"
          ? state.allCountries
          : allCountries.filter((e) => e.continents === action.payload);

      return {
        ...state,
        countriesAll: filtroStatus,
      };
    case FILTER_ALFABETIC:
      const countriesAz = state.allCountries;
      let ordenamiento =
        action.payload === "asc"
          ? countriesAz.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              } else if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "desc"
          ? countriesAz.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : state.countriesAll;
      return {
        ...state,
        countriesAll: ordenamiento,
      };
    case FILTER_POPULATION:
      const ordenamientoP =
        action.payload === "max"
          ? state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              } else if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : action.payload === "min"
          ? state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            })
          : state.countriesAll;

      return {
        ...state,
        countriesAll: ordenamientoP,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        getActivities: action.payload,
        activitiesGet: action.payload,
      };
    case FILTRO_ACT:
      const todosPaises = state.activitiesGet;
      const filtroFinal = todosPaises.filter((e) => e.name === action.payload);
      return {
        ...state,
        countriesAll: action.payload !== "" ? filtroFinal : state.allCountries,
      };
    default:
      return state;
  }
}
