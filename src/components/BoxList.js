import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes(boxes => [...boxes, box]);
  };

  const removeBox = (idx) => {
    setBoxes(boxes => boxes.filter((_, index) => idx !== index));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, idx) => (
        <Box key={idx} idx={idx} {...box} removeBox={removeBox} />
      ))}
    </div>
  );
}

export default BoxList;
