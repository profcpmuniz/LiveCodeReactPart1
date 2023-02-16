import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld title="Hello" name="Carlos" />
      <HelloWorld title="World" name="Muniz" />
      <HelloWorld title="from" profession="Teacher"  />
      
    </div>
  );
}

export default App;
