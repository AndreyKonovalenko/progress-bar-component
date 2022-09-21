const LegendKey = ({ item, height }) => {
  const { name, color, value, percentage } = item;
  console.log(height);
  const dot = {
    height: `${height * 0.8}px`,
    width: `${height * 0.8}px`,
    backgroundColor: color,
    borderRadius: '50%',
  };

  return (
    <>
      <p>
        <span style={dot} />
        {name}
      </p>
    </>
  );
};

export default LegendKey;
