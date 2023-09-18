import './App.css';
import ComponentWithData from './components/ComponentWithData';
import ComponentWithError from './components/ComponentWithError';
import ComponentWithLoading from './components/ComponentWithLoading';

function App() {

  return (
    <div className="App">
      <div>Response from component
        <ComponentWithLoading/>
      </div>
      <div>Response from component
        <ComponentWithData/>
      </div>
      <div>Response from component
        <ComponentWithError/>
      </div>
    </div>
  );
}

export default App;
