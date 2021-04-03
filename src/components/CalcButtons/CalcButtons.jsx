import style from "./CalcButtons.module.scss"
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import {
   setStep, setBuild, setHeight,
   setMaterial, setSizeX, setSizeY,
   getResult
} from "../../store/calculator/actions";

function CalcButtons() {
   const dispatch = useDispatch();
   const step = useSelector(state => state.calculator.step);
   const height = useSelector(state => state.calculator.height);
   const sizeX = useSelector(state => state.calculator.sizeX);
   const sizeY = useSelector(state => state.calculator.sizeY);

   const disabledBtnBack = !step ? true :
      step === 1 ? true : false;

   const disabledBtnNext = () => {
      if (step === 1 || step === 3 || height <= 0) {
         return true
      } else if (step === 4 && (sizeX <= 0 || sizeY <= 0)) {
         return true
      }
   }

   const handleClickBtnNext = () => {
      if (step === 5) {
         dispatch(setStep(1))
      } else {
         if (step === 4) {
            dispatch(getResult())
         } else {
            dispatch(setStep(+step + 1))
         }
      }
   }

   const handleClickBtnPrev = () => {
      dispatch(setStep(1))
      dispatch(setBuild(''))
      dispatch(setHeight(''))
      dispatch(setMaterial(''))
      dispatch(setSizeX(''))
      dispatch(setSizeY(''))
   }

   return (
      <div className={style.buttons}>
         <Button
            className={style.button}
            onClick={handleClickBtnPrev}
            disabled={disabledBtnBack}
            variant={step === 5 ? "contained" : "outlined"}
            color="primary"
         >
            {(step !== 5) ? (step === 6) ? "Новый расчёт" : "Отмена" : "Новый расчёт"}
         </Button>
         {(step === 1 || step === 2 || step === 3 || step === 4) ? (
            <Button
               className={style.button}
               onClick={handleClickBtnNext}
               disabled={disabledBtnNext()}
               variant="contained"
               color={step === 4 ? "secondary" : "primary"}
            >
               {step === 4 ? "Рассчитать" : "Далее"}
            </Button>
         ) : null}
      </div>
   )
}

export default CalcButtons;