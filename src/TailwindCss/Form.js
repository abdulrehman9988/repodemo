import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Form() {
  return (
    <div className='grid md:grid-cols-1 justify-center border p-5 gap-5 shadow-md '>
        <div className='grid gap-4'>
       
      <TextField fullWidth label="Name" id="fullWidth" />
      <TextField fullWidth label="Name" id="fullWidth" />
      <TextField fullWidth label="Name" id="fullWidth" />
    
    </div>
    <div>
    
      
      <Button variant="contained">Submit</Button>
      
    
    </div>
    </div>
  )
}
