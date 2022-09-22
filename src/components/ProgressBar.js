import PropTypes from 'prop-types';
import uniqid from 'uniquid';
import Bar from './Bar';
import LegendKey from './LegendKey';
import { fractionsCalс } from '../utils';

const ProgressBar = ({ items, width, height, barsAmount }) => {
  const container = {
    width: `${width}px`,
    margin: 'auto',
  };
  const barsStyle = {
    columnGap: '1px',
    display: 'flex',
    flexDirection: 'row',
    height: height,
    justifyContent: 'space-around',
    width: '100%',
  };

  const legendStyle = {
    columnGap: '1px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    justifyContent: 'space-between',
    marginTop: `${height * 0.5}px`,
    rowGap: '1px',
    width: '100%',
  };

  const total = items.reduce((per, cur) => per + cur.value, 0);
  const fractions = fractionsCalс(items, barsAmount, total);
  const bars = [];
  const legend = [];
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
    if (element.value > 0) {
      legend.push(
        <LegendKey
          key={uniqid()}
          item={element}
          height={height}
          total={total}
        />
      );
    }
  });

  const warning = (
    <span style={{ color: 'salmon' }}>Insafficient bars amount!</span>
  );
  const progressBar = (
    <>
      <div style={barsStyle}>{bars}</div>
      <div style={legendStyle}>{legend}</div>
    </>
  );
  console.log(bars);
  console.log(legend);
  return (
    <div style={container}>
      <h3>
        ProgressBar (w:{width}px; h:{height}px; bars:{barsAmount})
      </h3>
      {barsAmount < items.length ? warning : progressBar}
    </div>
  );
};

ProgressBar.propTypes = {
  barsAmount: PropTypes.number,
  height: PropTypes.number,
  items: PropTypes.array,
  width: PropTypes.number,
};
export default ProgressBar;
