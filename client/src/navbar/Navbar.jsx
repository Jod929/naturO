import React from 'react';
import YourArea from './yourArea.jsx';
import Region from './regionChoose.jsx';
import People from './people.jsx';

function Navbar(props) {
  return (
    <div>
      <YourArea />
      <Region />
      <People />
    </div>
  )
}

export default Navbar;