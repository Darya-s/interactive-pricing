import "./Header.css";
import circles from "./images/pattern-circles.svg"
export default function Header(){

    return(
    <div id="header">
        
        <div id="text-container">
        <img alt="circles" src={circles}/>
<p id="title" >Simple, traffic-based pricing</p>
<p id="sub-title" >Sign-up for our 30-day trial. No credit card required.</p>
</div>
</div>
    
    );
}