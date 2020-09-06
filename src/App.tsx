import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Alert, { AlertType } from './components/Alert/Alert';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Alert alertType={AlertType.Default} title='提示标题'>this is alert!</Alert>


      </header>


    </div>
  );
}

export default App;
