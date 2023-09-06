import Header from "./Header"
import Container from "./Container"
import "./MainPage.css"
import background from './images/bg-pattern.svg';
export default function MainPage(){

    return(
        <div id="main" style={{ backgroundImage: `url(${background})` }}>
            
        <Header/>
        <Container/>
        </div>
    )
}