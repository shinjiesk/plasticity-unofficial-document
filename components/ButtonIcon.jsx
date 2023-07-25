import React from 'react';

function ButtonImage({ type }) {
  const imagePath = `/img/${type}.png`;

  const imageStyle = {
    display: 'inline !important',
  };

  return (
    <span className="buttonIcon">
      <img src={imagePath} alt={type} style={imageStyle} />
    </span>
  );
}

export default ButtonImage;