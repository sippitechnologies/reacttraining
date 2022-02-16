import logo from './logo.svg';
import './App.css';
import Student from './components/propsexample/studentwithprops';
import Student1 from './components/propsexample/studentwithoutprops';
import Animal from './components/classcomponent/Animal';
import ButtonClick from './components/eventhandling/ButtonClickWithFunction';
import ButtonClick1 from './components/eventhandling/ButtonClickWithClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student age="10" name="Kuldeep" address={{state:"Punjab"}}/>
        <ButtonClick name="Deepak" age={36}/>
        <ButtonClick1 name="Deepak" age={40}/>

        <Student1/>
        <Animal name="Deepak"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
