import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className='bg-gray-900 text-white'>
            <div>
                <Image 
                    src="/assets/logo_light.png"
                    alt="Logo"
                    height={200}
                    width={200}
                />
                <p className='text-16'>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
            </div>
            <div>
                <div>
                    <h3>Explore</h3>
                    <ul>
                        <li>Apartments in Dubai</li>
                        <li>Hotels in New York</li>
                        <li>Villa in Spain</li>
                        <li>Mansion in Indonesia</li>

                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Customers</li>
                        <li>Brand</li>

                    </ul>
                </div>
                <div>
                    <h3>Help</h3>
                    <ul>
                        <li>Support</li>
                        <li>Cancel booking</li>
                        <li>Refunds Process</li>

                    </ul>
                </div>
            </div>
        </div>
        <div>
            <p>Some hotel requires you to cancel more than 24 hours before check-in. Details here</p>
            <ul>
                <li>Terms of Service</li>
                <li>Policy service</li>
                <li>Cookies Policy</li>
                <li>Partners</li>

            </ul>
        </div>

    </div>

  )
}

export default Footer