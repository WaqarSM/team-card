import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div className="card">
          <div className="cover-photo"></div>
          <div className="display-photo">photo</div>
          <div className="card-content">Waqar Muhammad</div>
          <div className="pronoun">
            <p>He/Him</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
