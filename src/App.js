import ProgressBar from './components/ProgressBar';
import './App.css';
import { data1, data2, data3, data4 } from './__mocks__/data.js';

function App() {
  return (
    <div className='App'>
      <ProgressBar items={data1} height={15} width={700} barsAmount={60} />
      <ProgressBar items={data2} height={15} width={400} barsAmount={4} />
      <ProgressBar items={data3} height={15} width={400} barsAmount={20} />
      <ProgressBar items={data3} height={15} width={400} barsAmount={60} />
      <ProgressBar items={data4} height={15} width={400} barsAmount={35} />
    </div>
  );
}

export default App;
