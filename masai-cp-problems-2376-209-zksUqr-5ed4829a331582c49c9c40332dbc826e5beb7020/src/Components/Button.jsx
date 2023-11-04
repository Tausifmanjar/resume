// enter code here
// button should have mentioned styling
// do a default export

import React from 'react';

const Button = () => {
  const buttonStyle = {
    backgroundColor: 'tomato',
    padding: '1rem',
  };

  return (
    <button style={buttonStyle}>
      Click me
    </button>
  );
};

export default Button;

 