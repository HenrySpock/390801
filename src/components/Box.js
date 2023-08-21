import React from 'react';

function Box({ width, height, bgColor, idx, removeBox }) {
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: bgColor }}>
      <button onClick={() => removeBox(idx)}>X</button>
    </div>
  );
}

export default Box;
