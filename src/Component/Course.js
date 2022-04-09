import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <div className='flex items-center max-w-sm mx-auto bg-blue-500'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
      <TextField id="outlined-basic" label="Course" variant="outlined" />


     <div className='grid gap-x-8 gap-y-4 grid-cols-2 border'>
     <TextField id="outlined-basic" label="Course" variant="outlined" />
     <TextField id="outlined-basic" label="Course" variant="outlined" />
     <TextField id="outlined-basic" label="Course" variant="outlined" />
     <TextField id="outlined-basic" label="Course" variant="outlined" />
     
     </div>

     <div className='w-96 h-96 border-2 border-black-900'></div>
      
        
    </Box>


    
    
    </div>
  );
}
