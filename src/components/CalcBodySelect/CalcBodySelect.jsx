import { useSelector, useDispatch } from "react-redux";
import { setStep, setBuild, setMaterial } from "../../store/calculator/actions";

function CalcBodySelect() {
   const dispatch = useDispatch();
   const step = useSelector(state => state.calculator.step);

   const handleClickBtnSelect = (e, name) => {
      if (name === "build") {
         dispatch(setBuild(e.target.innerHTML))
      } else if (name === "material") {
         dispatch(setMaterial(e.target.innerHTML))
      }
      dispatch(setStep(+step + 1))
   }

   return (
      <div>
         { step === 1 ? (
            <ul>
               <li onClick={(e) => handleClickBtnSelect(e, "build")}>
                  Жилой дом
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "build")}>
                  Гараж
               </li>
            </ul>
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
         ) : null}
      </div>
   )
}

export default CalcBodySelect;