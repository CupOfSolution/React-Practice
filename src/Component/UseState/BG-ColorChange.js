import React, { useState } from 'react';

function ClickableButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div className={clicked ? 'clicked' : ''}>
        Background color changes after click!
      </div>
      <style>
        {`
          .clicked {
            background-color: lightblue;
          }
        `}
      </style>
    </div>
  );
}

export default ClickableButton;
