import TProvinceCities from "../types/TProvinceCities";
import IProvinces from "./IProvinces";

interface IState {
  provinces: IProvinces[];
  filteredProvinces: IProvinces[];
  provinceIdSelected: number;
  cityIdSelected: number;
  getProvince: IProvinces;
  getCity: TProvinceCities;
}

export default IState;
