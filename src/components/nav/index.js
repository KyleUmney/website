import React from 'react';
import "./nav.css";
import { 
    Link,
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className= "navStyle">
                    <ul>
                    <li><Link to="/Home">Home</Link></li>    
                    <li><Link to="/Projects">Projects</Link></li> 
                    <li><Link to="/About">About</Link></li>    
                    <li><Link to="/Contact">Contact</Link></li> 
                    </ul>
                    </div>
            </React.Fragment>
        )
    }
}
export default Index;



