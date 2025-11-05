import React from 'react'

function Nav() {
  return (
    <div>
        <nav>
            <div>
                <h1 className='text-3xl font-bold underline'>Career Link</h1>
            </div>
            <div className='bg-amber-500'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav