import './App.css';
import Header from "./components/Header/Header";
import Conversion from "./components/Conversion/Conversion";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={'conversion'}>
            <Conversion/>
        </div>
    </div>
  );
}

export default App;
