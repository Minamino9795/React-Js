import './App.css';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
    <Welcome name="Admin" />
    <AddComponent firstNumber={10} secondNumber={8} />
    <FunctionComponent firstNumber={10} secondNumber={8} />
</div>
  );
}

export default App;
