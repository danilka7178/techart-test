import React from 'react';
import app from "./app.scss"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="app">
      <Paper className="calculator" elevation={3}>
        <h3 className="calculator__title">Калькулятор цены конструкций</h3>
        <p className="calculator__step">Шаг 1</p>
        <Paper className="calculator__content">
          {/* <CalcContent /> */}
        </Paper>
        <div className="calculator__buttons">
          <Button className="calculator__button" variant="outlined" color="primary">
            Отмена
          </Button>
          <Button className="calculator__button" variant="contained" color="primary">
            Далее
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
