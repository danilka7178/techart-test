import style from "./CalcContentInput.module.scss";
import TextField from '@material-ui/core/TextField';
import { setStep, setHeight, setSizeX, setSizeY, getResult } from "../../store/calculator/actions";
import { useSelector, useDispatch } from "react-redux";

function CalcContentInput() {
   const dispatch = useDispatch();

   const step = useSelector(state => state.calculator.step);
   const height = useSelector(state => state.calculator.height);
   const sizeX = useSelector(state => state.calculator.sizeX);
   const sizeY = useSelector(state => state.calculator.sizeY);

   const handleChangeInputValue = (e, name) => {
      if (name === "height") {
         dispatch(setHeight(+e.target.value))
      } else if (name === "sizeX") {
         dispatch(setSizeX(+e.target.value))
      } else if (name === "sizeY") {
         dispatch(setSizeY(+e.target.value))
      }
   }

   const handleEnter = (e, name) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
         if (name === "height") {
            dispatch(setStep(+step + 1))
         } else {
            if (sizeX > 0 && sizeY > 0) {
               dispatch(getResult())
            }
         }
      }
   }

   return (
      <div className={style.input}>
         {step === 2 ? (
            <TextField
               id="outlined-number"
               type="number"
               margin="dense"
               variant="outlined"
               value={height}
               onKeyUp={(e) => handleEnter(e, "height")}
               onChange={(e) => handleChangeInputValue(e, "height")}
            />
         ) : step === 4 ? (
            <div className={style.inputsContainer}>
               <TextField
                  id="outlined-number"
                  type="number"
                  margin="dense"
                  variant="outlined"
                  label="Ширина"
                  value={sizeX}
                  onKeyUp={(e) => handleEnter(e, "sizeX")}
                  onChange={(e) => handleChangeInputValue(e, "sizeX")}
               />
               <TextField
                  id="outlined-number"
                  type="number"
                  margin="dense"
                  variant="outlined"
                  label="Длинна"
                  value={sizeY}
                  onKeyUp={(e) => handleEnter(e, "sizeY")}
                  onChange={(e) => handleChangeInputValue(e, "sizeY")}
               />
            </div>
         ) : null
         }
      </div>
   );
};

export default CalcContentInput;