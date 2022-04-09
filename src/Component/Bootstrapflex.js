import React, { useState } from 'react'
import { Button } from 'bootstrap'
import Basic from './Basic'

export default function Bootstrapflex() {

    


   
    
    
    return (

      <div className='container d-flex flex-wrap w-50 border-2 h-50 bg-blue-500 gap-2'>
            <div className='column1 border w-25 h-25'>column1</div>
            <div className='column2 border w-25 h-25'>column2</div>
            <div className='column3 border w-25 h-25'>column3</div>
            <div className='column4 border w-25 h-25'>column4</div>
            <div className='column5 border w-25 h-25'>column5</div>
            <div className='column6 border w-25 h-25'>column6</div>
         

        
         <button type='button' onClick={()=>(<Basic/>)}>add</button>
         <button type='button' onClick={()=>alert("hello")}>call</button>


        </div>
    
       

    )
}
