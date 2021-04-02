import React from 'react';
import Paper from '@material-ui/core/Paper';
import "./app.scss";
import CalcContent from "./components/CalcContent/CalcContent";
import CalcButtons from "./components/CalcButtons/CalcButtons";
import { useSelector } from "react-redux";

function App() {
  const step = useSelector(state => state.calculator.step);

  const calcStep = !step ? "Ошибка" :
    (step === 1 || step === 2 || step === 3 || step === 4) ? `Шаг ${step}` :
      (step === 5 || step === 6) ? "Результат расчёта" : "Неизвестный шаг";

  return (
    <div className="app">
      <Paper className="calculator" elevation={3}>
        <h3 className="calculator__title">Калькулятор цены конструкций</h3>
        <p className="calculator__step">{calcStep}</p>
        <Paper className="calculator__content">
          <CalcContent />
        </Paper>
        <CalcButtons />
      </Paper>
    </div>
  );
}

export default App;
