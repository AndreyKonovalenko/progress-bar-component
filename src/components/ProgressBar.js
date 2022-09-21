import PropTypes from 'prop-types';
import uniqid from 'uniquid';
import Bar from './Bar';
import { fractionsCalс } from '../utils';

const ProgressBar = ({ items, height, width, barsAmount }) => {
  const container = {
    width: `${width}px`,
    margin: 'auto',
  };
  const flex = {
    columnGap: '1px',
    display: 'flex',
    height: height,
    flexDirection: 'row',
    justifyContent: 'flex-around',
    width: '100%',
  };

  const fractions = fractionsCalс(items, barsAmount);
  const bars = [];
  items.forEach((element, index) => {
    for (let i = 0; i < fractions[index]; i++) {
      bars.push(
        <Bar
          key={uniqid()}
          color={element.color}
          width={width}
          height={height}
          barsAmount={barsAmount}
        />
      );
    }
  });

  const warning = (
    <span style={{ color: 'salmon' }}>Insafficient bars amount!</span>
  );
  const progressBar = <div style={flex}>{bars}</div>;
  console.log(bars);
  return (
    <div style={container}>
      <h2>Progress Bar Component</h2>
      {barsAmount < items.length ? warning : progressBar}
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  barsAmount: PropTypes.number,
  items: PropTypes.array,
};
export default ProgressBar;
