import IUseProvinceHook from "@dashboard/provinces/interfaces/IUseProvinceHook";
import { useContext } from "react";

import { ProvinceContext } from "../context/provinceContext";

const useProvinceContext = (): IUseProvinceHook => {
  const {
    state,
    addNewCityDispatch,
    deleteCityDispatch,
    editCityDispatch,
    editProvinceDispatch,
    setProvinceSelectedIdDispatch,
    getProvinceDispatch,
    getCityDispatch,
    setCitySelectedIdDispatch,
    searchFilterDispatch,
  } = useContext(ProvinceContext);

  return {
    ...state,
    addNewCityDispatch,
    deleteCityDispatch,
    editProvinceDispatch,
    setProvinceSelectedIdDispatch,
    getProvinceDispatch,
    editCityDispatch,
    getCityDispatch,
    setCitySelectedIdDispatch,
    searchFilterDispatch,
  };
};

export default useProvinceContext;
