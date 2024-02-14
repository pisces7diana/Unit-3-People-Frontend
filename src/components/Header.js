import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/'>
                <div>People App</div>
            </Link>
        </nav>
    )
}

export default Header;

// Link is an element that lets user navigate to another page that is defined in the to property. We can do this with a tags but the benefit we get in Link is that we do not need ot the provide the entire url like we do an a tag