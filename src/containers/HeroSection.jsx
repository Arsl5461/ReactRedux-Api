import React from 'react'
import Cars from "../assets/cars.png"
function HeroSection() {
  return (
    <div>
        <div className='d-flex'>
        <div style={{ backgroundImage: `url(${Cars})`, backgroundRepeat: 'no-repeat',
  width:'250px',height:'500px' }} className="w-50 position-relative mh-50">
      <h1 className=' d-flex align-items-center justify-content-center h-100 text-white'>OUR BLOG</h1>
    </div>
    <div className='bg-dark text-white text-center w-50'>
        <h4 className='heading h-50 d-flex align-items-center w-50 mt-5' >Diagnose Car Problems if You Don't Know Much About Cars</h4>       
        </div>
        </div>
        </div>
    
  )
}

export default HeroSection