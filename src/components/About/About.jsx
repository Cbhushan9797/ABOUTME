
import "./About.css"
import about from "../../assets/aiimage.jpg"

export default function About(){
    return(
        <div className="about">
         <div className="img">
            <img src={about} alt="" className="aboutimg" />
         </div>
         <div className="aboutsection">
            <div className="headingabout">
                <h1>ABOUT</h1>
            </div>
            <div className="headingh3about">
                <h3>Web Designer & Developer </h3>
            </div>
            <div className="paraabout">
                <p>Lorem ipsum dolor sit amet  adipisicing elit. Quos nam modi tempore tempora nostrum ad molestiae veritatis illo, corrupti inventore perferendis hello hii reprehenderit! Animi consequatur minima hello voluptatum suscipit voluptates!</p>
            </div>
            <div className="para1about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi ratione blanditiis possimus ex quisquam autem vero voluptas maiores quibusdam sed atque necessitatibus ducimus ab vitae consequatur consequuntur magni?</p>
            </div>
            <div className="btnabout">
                <button className="btnabout1">Download CV</button>
            </div>
         </div>
        </div>
    )
}
