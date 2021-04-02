export const SET_STEP = "SET_STEP";
export const SET_BUILD = "SET_BUILD";
export const SET_HEIGHT = "SET_HEIGHT";
export const SET_MATERIAL = "SET_MATERIAL";

export const SET_SIZEX = "SET_SIZEX";
export const SET_SIZEY = "SET_SIZEY";

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