import REDUCER_ACTION_TYPE from "../enum/ActionType";
import IProvinces from "../interfaces/IProvinces";
import IState from "../interfaces/IState";
import TProvinceCities from "../types/TProvinceCities";

const reducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CITY:
      const addedCityToProvince = state.filteredProvinces.map(item =>
        item.province_id === action.payload.province_id
          ? {
              ...item,

              children: [
                ...item.children,
                { city_id: new Date().getTime(), ...action.payload },
              ],
            }
          : item,
      );
      return {
        ...state,
        provinces: addedCityToProvince,
        filteredProvinces: addedCityToProvince,
      };
    case REDUCER_ACTION_TYPE.EDIT_CITY:
      const editedCity = state.filteredProvinces.map((item: IProvinces) => {
        if (item.province_id === state.provinceIdSelected) {
          return {
            ...item,
            children: item.children.map((city: TProvinceCities) =>
              city.city_id === state.cityIdSelected ? action.payload : city,
            ),
          };
        }
        return item;
      });
      return {
        ...state,
        provinces: editedCity,
        filteredProvinces: editedCity,
      };
    case REDUCER_ACTION_TYPE.EDIT_PROVINCE:
      const editedProvince = state.filteredProvinces.map(item =>
        item.province_id === action.payload.province_id
          ? {
              ...item,
              ...action.payload,
            }
          : item,
      );
      return {
        ...state,
        provinces: editedProvince,
        filteredProvinces: editedProvince,
      };
    case REDUCER_ACTION_TYPE.DELETE_CITY:
      const newArray = state.filteredProvinces.map((province: IProvinces) => {
        if (province.province_id === state.provinceIdSelected) {
          return {
            ...province,
            children: province.children.filter(
              (city: TProvinceCities) => city.city_id !== action.payload,
            ),
          };
        }
        return province;
      });
      return { ...state, provinces: newArray, filteredProvinces: newArray };

    case REDUCER_ACTION_TYPE.SET_PROVINCE_SELECTED_ID:
      return { ...state, provinceIdSelected: action.payload };

    case REDUCER_ACTION_TYPE.SET_CITY_SELECTED_ID:
      return { ...state, cityIdSelected: action.payload };

    case REDUCER_ACTION_TYPE.GET_PROVINCE:
      const searchedProvinces = state.filteredProvinces.find(
        (province: IProvinces) => province.province_id === action.payload,
      );
      return {
        ...state,
        getProvince: searchedProvinces,
      };
    case REDUCER_ACTION_TYPE.GET_CITY:
      for (const province of state.filteredProvinces) {
        if (province.province_id === state.provinceIdSelected) {
          return {
            ...state,
            getCity: province.children.find(
              (children: TProvinceCities) =>
                children.city_id === action.payload,
            ),
          };
        }
      }
    case REDUCER_ACTION_TYPE.SEARCH_FILTER:
      const provinceArray = state.provinces.filter((province: IProvinces) =>
        province.province_name.includes(action.payload),
      );
      return {
        ...state,
        filteredProvinces: provinceArray,
      };
    default:
      return state;
  }
};

export default reducer;
