import style from "./CalcBody.module.scss";
import { useSelector } from "react-redux";
import CalcBodySelect from "../CalcBodySelect/CalcBodySelect";
import CalcContentInput from "../CalcBodyInput/CalcBodyInput";

function CalcBody() {
   const step = useSelector(state => state.calculator.step);

   return (
      <div className={style.body}>
         {(step === 1 || step === 3) ? (
            <CalcBodySelect />
         ) : (step === 2 || step === 4) ? (
            <CalcContentInput />
         ) : null
         }
      </div>
   );
};

export default CalcBody;