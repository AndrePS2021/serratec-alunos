import './App.css';
import Cliente from './Cliente';

const App = () => {
  const somaValores = () => {
    return 2 + 2;
  }
  
  return (
    <div>
      teste de compontene
      {'' + somaValores()}
      <Cliente />
    </div>
  );
}

export default App;
