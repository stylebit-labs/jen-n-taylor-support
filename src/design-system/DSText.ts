import React from 'react';

const DSText = ({ size, color }) => {
  const style = {
    fontSize: `${size}px`,
    color: color,
  };

  return <span style={style}> Hello Mock </span>;
};

export default DSText;

