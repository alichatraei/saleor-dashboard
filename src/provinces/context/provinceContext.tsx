/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactElement, useReducer } from "react";

import useDispatchFunction from "../hooks/useDispatchFunction";
import IState from "../interfaces/IState";
import provincesList from "../utils/provincesList";
import reducer from "./reducers";

const initState: IState = {
  provinces: provincesList,
  filteredProvinces: [],
  provinceIdSelected: 1,
  cityIdSelected: 0,
  getProvince: null,
  getCity: null,
};

type TUseProvinceContextType = ReturnType<typeof UseProvinceContext>;

const UseProvinceContext = (initState: IState) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const dispatchFunctions = useDispatchFunction(dispatch);
  return {
    state,
    ...dispatchFunctions,
  };
};

export const initContextState: TUseProvinceContextType = {
  state: initState,
  addNewCityDispatch: () => {},
  editCityDispatch: () => {},
  editProvinceDispatch: () => {},
  deleteCityDispatch: () => {},
  setProvinceSelectedIdDispatch: () => {},
  getProvinceDispatch: () => {},
  getCityDispatch: () => {},
  setCitySelectedIdDispatch: () => {},
  searchFilterDispatch: () => {},
};

export const ProvinceContext =
  createContext<TUseProvinceContextType>(initContextState);

interface TChildrenType {
  children?: ReactElement | undefined;
}

export const ProvinceProvider = ({
  children,
  ...initState
}: TChildrenType & IState): ReactElement => (
  <ProvinceContext.Provider value={UseProvinceContext(initState)}>
    {children}
  </ProvinceContext.Provider>
);
