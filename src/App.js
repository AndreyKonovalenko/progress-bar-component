import ProgressBar from './components/ProgressBar';
import './App.css';
import { data } from './__mocks__/data.js';

function App() {
  return (
    <div className='App'>
      <ProgressBar items={data} height={20} width={30} />
    </div>
  );
}

export default App;
