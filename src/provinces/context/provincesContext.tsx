/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useReducer,
} from "react";

import IProvinces from "../interfaces/IProvinces";
import provincesList from "../utils/provincesList";

interface TStateType {
  provinces: IProvinces[];
}

const initState: TStateType = {
  provinces: provincesList,
};

const enum REDUCER_ACTION_TYPE {
  ADD_CITY = "ADD_CITY",
  EDIT_CITY = "EDIT_CITY",
  DELETE_CITY = "DELETE_CITY",
  EDIT_PROVINCE = "EDIT_PROVINCE",
}

const reducer = (state: TStateType, action: any): TStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CITY:
      const addedCityToProvince = state.provinces.map(item =>
        item.province_id === action.payload.province_id
          ? {
              ...item,
              children: [...item.children, action.payload],
            }
          : item,
      );

      return {
        ...state,
        provinces: [...addedCityToProvince],
      };

    default:
      return state;
  }
};

const UseProvinceContext = (initState: TStateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addNewCity = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD_CITY, payload });
  }, []);

  const editCity = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.EDIT_CITY, payload });
  }, []);

  const editProvince = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.EDIT_PROVINCE, payload });
  }, []);

  const deleteCity = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.DELETE_CITY, payload });
  }, []);

  return { state, addNewCity, editCity, editProvince, deleteCity };
};

type TUseProvinceContextType = ReturnType<typeof UseProvinceContext>;

const initContextState: TUseProvinceContextType = {
  state: initState,
  addNewCity: () => {},
  editCity: () => {},
  editProvince: () => {},
  deleteCity: () => {},
};

export const ProvinceContext =
  createContext<TUseProvinceContextType>(initContextState);

interface TChildrenType {
  children?: ReactElement | undefined;
}

export const ProvinceProvider = ({
  children,
  ...initState
}: TChildrenType & TStateType): ReactElement => (
  <ProvinceContext.Provider value={UseProvinceContext(initState)}>
    {children}
  </ProvinceContext.Provider>
);

interface TUseProvinceHook {
  provinces: IProvinces[];
  addNewCity: (payload: any) => void;
  editCity: (payload: any) => void;
  editProvince: (payload: any) => void;
  deleteCity: (payload: any) => void;
}

export const useProvinceContext = (): TUseProvinceHook => {
  const {
    state: { provinces },
    addNewCity,
    deleteCity,
    editCity,
    editProvince,
  } = useContext(ProvinceContext);

  return { provinces, addNewCity, deleteCity, editCity, editProvince };
};
