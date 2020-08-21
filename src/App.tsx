import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Button disabled >hello</Button>
        <Button btnType={ButtonType.Default} disabled size={ButtonSize.Small}>Default</Button>
        <Button btnType={ButtonType.Primary} >Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger</Button>

        <Button btnType={ButtonType.Link} href='bing.cn' size={ButtonSize.Small}>Link 01</Button>
        <Button btnType={ButtonType.Link} disabled href='bing.cn' size={ButtonSize.Small}>Disabled Link</Button>
      </header>
    </div>
  );
}

export default App;
