import produce from "immer";

import {
   SET_STEP, SET_BUILD, SET_HEIGHT,
   SET_MATERIAL, SET_SIZEX, SET_SIZEY,
   SET_LOAD, SET_RESULT
} from "./actions";

const initialState = {
   step: 1,
   building: "",
   height: "",
   material: "",
   sizeX: "",
   sizeY: "",
   loading: false,
   result: ""
}

export const calculatorReducer = produce((draftState, action) => {
   if (action.type === SET_STEP) {
      draftState.step = action.payload
   } else if (action.type === SET_BUILD) {
      draftState.building = action.payload
   } else if (action.type === SET_HEIGHT) {
      draftState.height = action.payload
   } else if (action.type === SET_MATERIAL) {
      draftState.material = action.payload
   } else if (action.type === SET_SIZEX) {
      draftState.sizeX = action.payload
   } else if (action.type === SET_SIZEY) {
      draftState.sizeY = action.payload
   } else if (action.type === SET_LOAD) {
      draftState.loading = action.payload
   } else if (action.type === SET_LOAD) {
      draftState.loading = action.payload
   } else if (action.type === SET_RESULT) {
      draftState.result = action.payload
   }
}, initialState)
