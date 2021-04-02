import style from "./CalcBody.module.scss";
import { setStep, setBuild, setHeight, setMaterial } from "../../store/calculator/actions";
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';

function CalcBody() {
   const dispatch = useDispatch();

   const step = useSelector(state => state.calculator.step);
   const build = useSelector(state => state.calculator.build);
   const height = useSelector(state => state.calculator.height);

   const handleClickBtnSelect = (e, name) => {
      if (name === "build") {
         dispatch(setBuild(e.target.innerHTML))
      } else if (name === "material") {
         dispatch(setMaterial(e.target.innerHTML))
      }
      dispatch(setStep(+step + 1))
   }

   const handleChangeInputValue = (e, name) => {
      if (name === "height") {
         dispatch(setHeight(e.target.value))
      } else return
   }

   return (
      <div className={style.body}>
         {step === 1 ? (
            <ul>
               <li onClick={(e) => handleClickBtnSelect(e, "build")}>
                  Жилой дом
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "build")}>
                  Гараж
               </li>
            </ul>
         ) : step === 2 ? (
            <div className={style.input}>
               <TextField
                  id="outlined-number"
                  type="number"
                  margin="dense"
                  variant="outlined"
                  value={height}
                  onChange={(e) => handleChangeInputValue(e, "height")}
               />
            </div>
         ) : step === 3 ? (
            <ul>
               <li onClick={(e) => handleClickBtnSelect(e, "material")}>
                  Кирпич
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "material")}>
                  Шлакоблок
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "material")}>
                  Деревянный брус
               </li>
            </ul>
         ) : null
         }
      </div>
   );
};

export default CalcBody;