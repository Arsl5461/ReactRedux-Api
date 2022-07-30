import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
  return (
    <>
    <section className='bg-dark text-white mt-5 p-5' >
    <div className="container">
    <div className="row">
       <div className="col-md-6">
<h1>Get in touch with us</h1>
       </div>
       <div className="col-md-6">
        <p className='clr'>Help line Number</p>
        <h6>1800 265 24 52</h6>
        <p className="clr">Address</p>
        <h6>NH 234   Public Square San Francisco  65368</h6>
        <p className='clr'>We are open</p>
        <h6>Monday to Friday 9:00 AM to  10:00  AM</h6>

       </div>
    </div>
    </div>
    
</section>
<section className='bg-dark p-5 text-white'>
<div className="container">
    <div className="row">
        <div className="col-md-4"><Navbar.Brand href="#home">finsweet</Navbar.Brand></div>
        <div className="col-md-4">
            <ul className='list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            </ul></div>
        <div className="col-md-4 clr text-center">&copy; Copyright 2022 Finsweet</div>
    </div>
</div>
</section>
</>
  )
}

export default Footer