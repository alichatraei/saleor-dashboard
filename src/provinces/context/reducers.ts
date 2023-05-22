import REDUCER_ACTION_TYPE from "../enum/ActionType";
import {
  addCityToProvince,
  deleteSpecificCity,
  editCityOnSpecificProvince,
  editSpecificProvince,
  getSpecificCity,
  getSpecificProvince,
  searchFilter,
} from "../helpers/reducerHelpersFunctions";
import IState from "../interfaces/IState";

const reducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CITY:
      const addedCityToProvince = addCityToProvince(state, action);
      return {
        ...state,
        provinces: addedCityToProvince,
        filteredProvinces: addedCityToProvince,
      };
    case REDUCER_ACTION_TYPE.EDIT_CITY:
      const editedCity = editCityOnSpecificProvince(state, action);
      return {
        ...state,
        provinces: editedCity,
        filteredProvinces: editedCity,
      };
    case REDUCER_ACTION_TYPE.EDIT_PROVINCE:
      const editedProvince = editSpecificProvince(state, action);
      return {
        ...state,
        provinces: editedProvince,
        filteredProvinces: editedProvince,
      };
    case REDUCER_ACTION_TYPE.DELETE_CITY:
      const filterNewCities = deleteSpecificCity(state, action);
      return {
        ...state,
        provinces: filterNewCities,
        filteredProvinces: filterNewCities,
      };

    case REDUCER_ACTION_TYPE.SET_PROVINCE_SELECTED_ID:
      return { ...state, provinceIdSelected: action.payload };

    case REDUCER_ACTION_TYPE.SET_CITY_SELECTED_ID:
      return { ...state, cityIdSelected: action.payload };

    case REDUCER_ACTION_TYPE.GET_PROVINCE:
      const searchedProvinces = getSpecificProvince(state, action);
      return {
        ...state,
        getProvince: searchedProvinces,
      };
    case REDUCER_ACTION_TYPE.GET_CITY:
      const searchedCity = getSpecificCity(state, action);
      return searchedCity;
    case REDUCER_ACTION_TYPE.SEARCH_FILTER:
      const provinceArray = searchFilter(state, action);
      return {
        ...state,
        filteredProvinces: provinceArray,
      };
    default:
      return state;
  }
};

export default reducer;
