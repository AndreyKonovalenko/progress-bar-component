import PropTypes from 'prop-types';

const Bar = ({ color }) => {
  const flexItem = {
    backgroundColor: color,
    borderRadius: '5px',
    flex: 1,
  };
  return <div style={flexItem} />;
};
Bar.propTypes = {
  color: PropTypes.string,
};

export default Bar;
