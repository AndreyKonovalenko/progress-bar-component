import ProgressBar from './components/ProgressBar';
import './App.css';
import { data1, data2, data3, data4, data5 } from './__mocks__/data.js';

function App() {
  return (
    <div className='App'>
      <ProgressBar items={data1} width={800} height={25} barsAmount={100} />
      <ProgressBar items={data2} width={700} height={20} barsAmount={75} />
      <ProgressBar items={data3} width={600} height={15} barsAmount={50} />
      <ProgressBar items={data4} width={500} height={30} barsAmount={20} />
      <ProgressBar items={data5} width={400} height={35} barsAmount={10} />
    </div>
  );
}

export default App;
