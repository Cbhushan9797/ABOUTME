import "./Projects.css"
import portfolio from "../../assets/portfolio.png"
import netflix from "../../assets/netflixlogo.png"
import white from "../../assets/whiteboard.png"


export default function Projects(){
    return (
        <div className="projects">
           <div className="headingprojects">
            <h1>My Projects</h1>
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Portfolio</h4>
                    </div>
                    <img src={portfolio} alt=""  className="portfolioimg"/>
                </div>
                <div className="box1">
                    <div className="headingspotify">
                        <h4>NetFlix clone</h4>
                    </div>
                    <img src={netflix} alt="" className="spotifyimg"/>
                </div>
                <div className="box1">
                    <div className="headingecommerce">
                        <h4>White Board</h4>
                    </div>
                    <img src={white} alt="" className="ecommerceimg"/>
                </div>
            </div>
           </div>
        </div>
    )
}