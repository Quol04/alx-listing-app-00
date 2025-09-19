import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image 
            src="/assets/logo_dark.png"
            alt="Logo"
            height={200}
            width={200}
        />
        <div>
            <p>Location <span>Search for destination</span></p>
            <p>Check In <span>Add date</span></p>
            <p>Check Out <span>Add date</span></p>
            <p>People <span>Add guest</span></p>
            <button>
                search
            </button>
        </div>
        <div>
            <button>Sign In </button>
            <button>Sign Up </button> 
        </div>
    </div>
  )
}

export default Header