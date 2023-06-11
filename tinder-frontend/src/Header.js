import React from 'react'
import "./Header.css";
import { IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';




// IconButton is used to make an icon as a clickable button.
function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person className='header_icon' fontSize='large'/>
        {/* Person Icon now act as a clickable button. */}
        {/* By default, Iconbutton have a ripple effect. If you do not want that you can pass the disableRipple = {true} prop. */}
      </IconButton>
      <img
        className="header_logo"
        src="https://img.icons8.com/?size=1x&id=fhR9BQCtlv5C&format=png"
        alt=""
      />
      <IconButton>
        <Chat/>
      </IconButton>

      

    </div>
  );
}

export default Header
