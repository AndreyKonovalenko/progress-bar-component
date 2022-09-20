const Bar = ({ color, width, height }) => {
  const style = {
    backgroundColor: color,
    borderRadius: '6px',
    height: `${height}px`,
    margin: '1px',
    width: `${width}px`,
  };
  return <div style={style}></div>;
};

export default Bar;
