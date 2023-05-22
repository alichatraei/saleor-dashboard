import TProvinceCities from "../types/TProvinceCities";
import IProvinces from "./IProvinces";

interface IUseProvinceHook {
  provinces: IProvinces[];
  filteredProvinces: IProvinces[];
  provinceIdSelected?: number;
  cityIdSelected?: number;
  getProvince?: IProvinces;
  getCity?: TProvinceCities;
  addNewCityDispatch: (payload: any) => void;
  deleteCityDispatch: (payload: number) => void;
  editProvinceDispatch: (payload: any) => void;
  setProvinceSelectedIdDispatch: (payload: number) => void;
  getProvinceDispatch: (payload: number) => void;
  editCityDispatch: (payload: any) => void;
  getCityDispatch: (payload: number) => void;
  setCitySelectedIdDispatch: (payload: number) => void;
  searchFilterDispatch: (payload: string) => void;
}

export default IUseProvinceHook;
