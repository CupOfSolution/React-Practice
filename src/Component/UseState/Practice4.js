import React, { useState } from 'react';

const SimpleComponent = () => {
  const [buttonTexts, setButtonTexts] = useState({ 0: false, 1: false, 2: false });
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setButtonTexts(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
    setClickedIndex(index);
  }

  return (
    <div>
      <button onClick={() => handleClick(0)}>{buttonTexts[0] ? 'Closed' : 'Open'}</button>
      <button onClick={() => handleClick(1)}>{buttonTexts[1] ? 'Closed' : 'Open'}</button>
      <button onClick={() => handleClick(2)}>{buttonTexts[2] ? 'Closed' : 'Open'}</button>
      <p>Clicked index: {clickedIndex !== null ? clickedIndex : 'None clicked'}</p>
    </div>
  );
}

export default SimpleComponent;
