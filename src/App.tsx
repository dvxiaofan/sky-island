import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Button disabled >hello</Button>
        <Button btnType={ButtonType.Primary} >primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>danger</Button>

        <Button btnType={ButtonType.Link} disabled href='bing.cn' size={ButtonSize.Small}>link</Button>
      </header>
    </div>
  );
}

export default App;
