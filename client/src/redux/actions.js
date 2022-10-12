import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const FILTER_STATUS = "FILTER_STATUS";
export const FILTER_ALFABETIC = "FILTER_ALFABETIC";
export const FILTER_POPULATION = "FILTER_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTRO_ACT = "FILTRO_ACT";
export const getAllCountries = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/countries");
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const countryPorId = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createActivity = (payload) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/activities", payload);

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const searchCountr = (name) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3001/countries?name=${name}`);
  dispatch({
    type: SEARCH_COUNTRY,
    payload: res.data,
  });
};

export const filterCountries = (payload) => {
  return {
    type: FILTER_STATUS,
    payload,
  };
};

export const ordenamientoFilter = (payload) => {
  return {
    type: FILTER_ALFABETIC,
    payload,
  };
};
export const ordenamientoP = (payload) => {
  return {
    type: FILTER_POPULATION,
    payload,
  };
};
export const filtroActividades = (payload) => {
  console.log(payload);
  return {
    type: FILTRO_ACT,
    payload,
  };
};
export const getActivitiesDb = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/activities");
    console.log(res);
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
