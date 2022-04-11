import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className=' w-full shadow-md bg-gray-50 '>

                <nav className='flex text-2xl list-none justify-between p-5'>
                    <div>
                        <li><a href='#'>Logo</a></li>
                    </div>
                    <div className='flex space-x-12 ml-12'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Login</a></li>
                    </div>
                </nav>
           
            </div>
            <div className='grid md-4 '>

            </div>

        </div>
    )
}
