import uniqid from 'uniquid';
import Bar from './Bar';

const ProgressBar = ({ items, height, width }) => {
  const total = items.reduce((per, cur) => per + cur.value, 0);
  // fraction;
  const BarsEmount = 60;

  const bars = items.map((element) => (
    <Bar key={uniqid} color={element.color} />
  ));
  return (
    <div style={container}>
      <h2>Progress Bar Component</h2>
      <p>{total}</p>
      <div
        style={{
          width: '100%',
          padding: '10px',
          height: height,
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
        }}>
        {bars}
      </div>
    </div>
  );
};

export default ProgressBar;
