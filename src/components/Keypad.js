// Code Keypad Component Here
import React, { useState } from 'react';

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <input 
      type="password" 
      onChange={handleChange} 
      placeholder="Enter password"
    />
  );
}

export default Keypad;

