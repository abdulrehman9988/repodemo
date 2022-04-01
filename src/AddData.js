import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function AddData() {
    return (
        <div className='container-fluid border-2 mt-5 p-2 w-full flex justify-center'>
            <div className=' border-2 p-2 border-blue-500 w-full rounded-md  mx-10 '>
                <div  className='grid grid-cols-1 gap-2 m-2 mr-3' >
                <Box
                    sx={{
                        
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Course" id="fullWidth" />
                </Box>
                </div>

                <div className='grid grid-cols-2 gap-2 m-2 mr-3'>
                    <div>
                        <Box
                            sx={{
                                
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Enter Topic" id="fullWidth" />
                        </Box>
                    </div>
                    <div>
                        <Box
                            sx={{
                               
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Enter Description" id="fullWidth" />
                        </Box>
                    </div>

                </div>


                <div className='flex justify-center'>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '80ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField id="outlined-basic w-300" label="Enter Fee" variant="outlined" />
                        </Box>
                    </div>
                    <div>
                        <Stack className='mt-4' direction="row" spacing={2} >

                            <Button variant="contained" href="#contained-buttons">
                                -
                            </Button>
                            <Button variant="contained" href="#contained-buttons">
                                +
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div>
                <Stack className=' flex justify-center' spacing={2} direction="row">
      
      <Button variant="contained">Add</Button>
      
    </Stack>
    </div>

            </div>
        </div>
    );
}
