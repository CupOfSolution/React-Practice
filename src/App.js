import React, { useState } from 'react';

function ClickableButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Click me
      </button>
      <div className={`mt-4 p-4 ${clicked ? 'bg-blue-200' : ''}`}>
        Background color changes after click!
      </div>
    </div>
  );
}

export default ClickableButton;
