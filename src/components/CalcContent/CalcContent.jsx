import style from "./CalcContent.module.scss";
import { useSelector } from "react-redux";
import CalcBody from "../CalcBody/CalcBody";

function CalcContent() {
   const step = useSelector(state => state.calculator.step);

   const textHeader = !step ? "Ошибка" :
      step === 1 ? "Что будем строить?" :
         step === 2 ? "Колличество этажей (число):" :
            step === 3 ? "Материал стен:" :
               step === 4 ? "Длинна стен (в метрах):" :
                  step === 5 ? "Успешно" : "Ошибка"

   return (
      <div className={style.content}>
         <div className={`${step === 6 ? style.content__headerErr : style.content__header}`}>
            <p>{textHeader}</p>
         </div>
         <CalcBody />
      </div >
   )
}

export default CalcContent;