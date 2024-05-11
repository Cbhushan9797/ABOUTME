import {Link} from "react-scroll";
import "./NavBar.css"
export default function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1">C<span>handra Bhushan</span></h1>
            </div>
            <div className="listItems">
                <Link className="list">Home</Link>
                <Link className="list">About</Link>
                <Link className="list">Skills</Link>
                <Link className="list">Projects</Link>
            </div>
            <div className="btnNav">
                <button className="btn">Contact me</button>
            </div>

        </div>
    )
}