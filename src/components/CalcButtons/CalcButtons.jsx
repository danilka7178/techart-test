import style from "./CalcButtons.module.scss"
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { setStep, setBuild, setHeight, setMaterial } from "../../store/calculator/actions";

function CalcButtons() {
   const dispatch = useDispatch();
   const step = useSelector(state => state.calculator.step);
   const building = useSelector(state => state.calculator.building);
   const height = useSelector(state => state.calculator.height);

   const confirm = true;

   const disabledBtnBack = !step ? false :
      step === 1 ? true : false;

   console.log(height)

   const disabledBtnNext = (!building || height <= 0) ? true : false;

   const handleClickBtnNext = () => {
      if (step === 5) {
         dispatch(setStep(1))
      } else {
         if (step === 4 && !confirm) {
            dispatch(setStep(6))
         } else { dispatch(setStep(+step + 1)) }
      }
   }

   const handleClickBtnPrev = () => {
      if (step === 4) {
         dispatch(setStep(5))
      } else {
         dispatch(setStep(1))
         dispatch(setBuild(''))
         dispatch(setHeight(''))
         dispatch(setMaterial(''))
      }
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
            {(step !== 5) ? "Отмена" : "Новый расчёт"}
         </Button>
         {(step === 1 || step === 2 || step === 3 || step === 4) ? (
            <Button
               className={style.button}
               onClick={handleClickBtnNext}
               disabled={disabledBtnNext}
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