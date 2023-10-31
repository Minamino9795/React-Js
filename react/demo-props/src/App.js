import './App.css';
import Welcome from './components/Welcome';
import MayTinh from './components/MayTinh';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
    <Welcome name="Caculator" />
    <MayTinh/>
    <Example/>
</div>
  );
}

export default App;
