import PropTypes from 'prop-types';
const LegendKey = ({ item, height, total }) => {
  const { name, color, value } = item;
  const percentage = ((value / total) * 100).toFixed(1);

  const container = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: `${height * 0.8}px`,
  };
  const dot = {
    backgroundColor: color,
    borderRadius: '50%',
    height: `${height * 0.7}px`,
    marginRight: '3px',
    width: `${height * 0.7}px`,
  };
  const text = {
    fontSize: `${height * 0.6}px`,
  };

  return (
    <div style={container}>
      <span style={dot} />
      <span style={text}>
        {name}: {value} ({percentage}%)
      </span>
    </div>
  );
};
LegendKey.propTypes = {
  height: PropTypes.number,
  item: PropTypes.object,
  total: PropTypes.number,
};

export default LegendKey;
