import axios from "axios"

export const SET_STEP = "SET_STEP";
export const SET_BUILD = "SET_BUILD";
export const SET_HEIGHT = "SET_HEIGHT";
export const SET_MATERIAL = "SET_MATERIAL";
export const SET_SIZEX = "SET_SIZEX";
export const SET_SIZEY = "SET_SIZEY";

export const SET_LOAD = "SET_LOAD";
export const GET_RESULT = "GET_RESULT";
export const SET_RESULT = "SET_RESULT";

export const setStep = (data) => ({
   type: SET_STEP,
   payload: data
})

export const setBuild = (data) => ({
   type: SET_BUILD,
   payload: data
})

export const setHeight = (data) => ({
   type: SET_HEIGHT,
   payload: data
})

export const setMaterial = (data) => ({
   type: SET_MATERIAL,
   payload: data
})

export const setSizeX = (data) => ({
   type: SET_SIZEX,
   payload: data
})

export const setSizeY = (data) => ({
   type: SET_SIZEY,
   payload: data
})

export const setLoad = (data) => ({
   type: SET_LOAD,
   payload: data
})

export const setResult = (data) => ({
   type: SET_RESULT,
   payload: data
})

export const getResult = () => async (dispatch, getState) => {
   const state = getState();
   const build = state.calculator.building;
   const height = state.calculator.height;
   const material = state.calculator.material;
   const sizeX = state.calculator.sizeX;
   const sizeY = state.calculator.sizeY;

   dispatch(setLoad(true))
   const { data } = await axios.get(`https://data.techart.ru/lab/json/?building=${build}&height=${height}&material=${material}&sizex=${sizeX}&sizey=${sizeY}`)
   dispatch(setLoad(false))
   if (data.result === "ok") {
      dispatch(setResult(data.message))
      dispatch(setStep(5))
   } else {
      dispatch(setResult(data.message))
      dispatch(setStep(6))
   }
}