import IProvinces from "../interfaces/IProvinces";
import IState from "../interfaces/IState";
import TProvinceCities from "../types/TProvinceCities";

export const addCityToProvince = (state: IState, action: any) =>
  state.filteredProvinces.map(item =>
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

export const editCityOnSpecificProvince = (state: IState, action: any) =>
  state.filteredProvinces.map((item: IProvinces) => {
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

export const editSpecificProvince = (state: IState, action: any) =>
  state.filteredProvinces.map(item =>
    item.province_id === action.payload.province_id
      ? {
          ...item,
          ...action.payload,
        }
      : item,
  );

export const deleteSpecificCity = (state: IState, action: any) =>
  state.filteredProvinces.map((province: IProvinces) => {
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

export const getSpecificProvince = (state: IState, action: any) =>
  state.filteredProvinces.find(
    (province: IProvinces) => province.province_id === action.payload,
  );

export const getSpecificCity = (state: IState, action: any) => {
  for (const province of state.filteredProvinces) {
    if (province.province_id === state.provinceIdSelected) {
      return {
        ...state,
        getCity: province.children.find(
          (children: TProvinceCities) => children.city_id === action.payload,
        ),
      };
    }
  }
};

export const searchFilter = (state: IState, action: any) =>
  state.provinces.filter((province: IProvinces) =>
    province.province_name.includes(action.payload),
  );
