import "./HeroSection.css";
import myimg from "../../assets/file.png"

export default function HeroSection(){
    return (
        <div className="herosection">
           <div className="left">
         <div className="para">
           <p> Web Developer,</p>
         </div>
         <div className="herosectionh1">
            <h1>I'm <span>Chandra Bhushan</span></h1>
         </div>
         <div className="stack">
            <h1>FrontEnd Developer</h1>
         </div>
         <div className="para2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quam voluptatibus totam velit rem? Dolorem, eligendi exercitationem dolore .</p>
         </div>
           </div>
           <div className="right">
          <img src={myimg} alt="" />
           </div>
           
        </div>
    )
}