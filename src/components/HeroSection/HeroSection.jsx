import React from 'react'
import "./HeroSection.css"
import myimg from "../../assets/file.png"

function HeroSection() {
  return (
    <div className='heroSection'>
       <div className="left">
     <div className="para">
       <p>Web Devloper</p> 
     </div>
     <div className="heroSectionh1">
        <h1>I'm C<span>handra Bhushan</span></h1>
     </div>
     <div className="stack">
        <h1>FrontEnd Devloper</h1>
     </div>
     <div className="para2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo fugit, tempora ea repellendus iste facilis, nesciunt consequuntur minus officiis ullam earum sunt, at similique distinctio accusamus laudantium! Reiciendis, sapiente!</p>
     </div>
       </div>
       <div className="right">
        <img src={myimg} alt='' className='myImage'></img>
       </div>
    </div>
  )
}

export default HeroSection
