import REDUCER_ACTION_TYPE from "@dashboard/provinces/enum/ActionType";
import { Dispatch, useCallback } from "react";

const useDispatchFunction = (dispatch: Dispatch<any>) => {
  const addNewCityDispatch = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD_CITY, payload });
  }, []);

  const editCityDispatch = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.EDIT_CITY, payload });
  }, []);

  const editProvinceDispatch = useCallback(payload => {
    dispatch({ type: REDUCER_ACTION_TYPE.EDIT_PROVINCE, payload });
  }, []);

  const deleteCityDispatch = useCallback((payload: number) => {
    dispatch({ type: REDUCER_ACTION_TYPE.DELETE_CITY, payload });
  }, []);

  const setProvinceSelectedIdDispatch = useCallback((payload: number) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_PROVINCE_SELECTED_ID, payload });
  }, []);

  const setCitySelectedIdDispatch = useCallback((payload: number) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_CITY_SELECTED_ID, payload });
  }, []);

  const getProvinceDispatch = useCallback((payload: number) => {
    dispatch({ type: REDUCER_ACTION_TYPE.GET_PROVINCE, payload });
  }, []);

  const getCityDispatch = useCallback((payload: number) => {
    dispatch({ type: REDUCER_ACTION_TYPE.GET_CITY, payload });
  }, []);

  const searchFilterDispatch = useCallback((payload: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SEARCH_FILTER, payload });
  }, []);

  return {
    addNewCityDispatch,
    editCityDispatch,
    editProvinceDispatch,
    deleteCityDispatch,
    getCityDispatch,
    getProvinceDispatch,
    setProvinceSelectedIdDispatch,
    setCitySelectedIdDispatch,
    searchFilterDispatch,
  };
};
export default useDispatchFunction;
