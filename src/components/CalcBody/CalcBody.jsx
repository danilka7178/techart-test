import style from "./CalcBody.module.scss";
import { useSelector } from "react-redux";
import CalcBodySelect from "../CalcBodySelect/CalcBodySelect";
import CalcContentInput from "../CalcBodyInput/CalcBodyInput";

function CalcBody() {
   const step = useSelector(state => state.calculator.step);
   const result = useSelector(state => state.calculator.result);

   return (
      <div className={style.body}>
         {(step === 1 || step === 3) ? (
            <CalcBodySelect />
         ) : (step === 2 || step === 4) ? (
            <CalcContentInput />
         ) : (step === 5) ? (
            <h4 className={style.result}>{result}</h4>
         ) : <h4 className={style.err}>{result}</h4>
         }
      </div>
   );
};

export default CalcBody;