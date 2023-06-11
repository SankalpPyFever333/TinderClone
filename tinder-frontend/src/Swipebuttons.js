import React from 'react'
import './swipeButtons.css';
import { Replay } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { StarRate } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
function Swipebuttons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons_repeat'>
        <Replay fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_left'>
        <Close fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_star'>
        <StarRate fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_right'>
        <Favorite fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_lightning'>
        <FlashOn fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default Swipebuttons
