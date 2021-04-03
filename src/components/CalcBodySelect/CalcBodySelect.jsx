import { useSelector, useDispatch } from "react-redux";
import { setStep, setBuild, setHeight, setMaterial } from "../../store/calculator/actions";

function CalcBodySelect() {
   const dispatch = useDispatch();
   const step = useSelector(state => state.calculator.step);
   const building = useSelector(state => state.calculator.building);

   const handleClickBtnSelect = (e, name) => {
      if (name === "build") {
         if (e.target.innerHTML === "Жилой дом") {
            dispatch(setBuild(1))
            dispatch(setStep(2))
         } else {
            dispatch(setHeight(1))
            dispatch(setBuild(2))
            dispatch(setStep(3))
         }
      } else if (name === "material") {
         switch (e.target.innerHTML) {
            case "Кирпич":
               dispatch(setMaterial(1))
               dispatch(setStep(+step + 1))
               return
            case "Шлакоблок":
               dispatch(setMaterial(2))
               dispatch(setStep(+step + 1))
               return
            case "Деревянный брус":
               dispatch(setMaterial(3))
               dispatch(setStep(+step + 1))
               return
            case "Металл":
               dispatch(setMaterial(4))
               dispatch(setStep(+step + 1))
               return
            case "Сендвич-панели":
               dispatch(setMaterial(5))
               dispatch(setStep(+step + 1))
               return
            default:
               return;
         }
      }
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
                  {building === 1 ? "Кирпич" : "Шлакоблок"}
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "material")}>
                  {building === 1 ? "Шлакоблок" : "Металл"}
               </li>
               <li onClick={(e) => handleClickBtnSelect(e, "material")}>
                  {building === 1 ? "Деревянный брус" : "Сендвич-панели"}
               </li>
            </ul>
         ) : null}
      </div>
   )
}

export default CalcBodySelect;