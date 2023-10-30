import './App.css';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';

function App() {
  return (
    <div className="App">
    <Welcome name="Admin" />
    <AddComponent firstNumber={8} secondNumber={10} />
</div>
  );
}

export default App;
