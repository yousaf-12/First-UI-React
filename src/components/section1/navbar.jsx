import React from 'react'

const Navbar = () =>{
    return (
        <div className='flex justify-between px-12 py-6 items-center'>
            <h4 className='uppercase bg-black color-white text-white rounded-full px-4 py-2 text-xs tracking-widest'>Target Audience</h4>
            <button className='bg-gray-300 px-4 py-2 rounded-full text-xs uppercase tracking-widest cursor-pointer'>Digital Banking Platform</button>
        </div>
    )
}

export default Navbar