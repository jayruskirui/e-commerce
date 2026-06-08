import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>  
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online plateform that facilitates the 
                buying and selling of products or services over the internet.Its 
                serves as a virtual marketplace where business and individual can 
                showcase their product,interact with customers and conduct 
                trasaction without the need of physical presence.E-commerce 
                website have gained immense popularity due to their convinience, 
                accesibility and the global reach they offer.</p>
            <p>E-commerce websites typically displays product or services doing with 
               detailed description, images, prices, and any available variations
               (e.g sizes,colors).Each product product ussually has its own dedicated page
                with relevant information</p>
        </div>
    </div>
  )
}

export default DescriptionBox