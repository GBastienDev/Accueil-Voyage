import './Nav.scss';

const Nav = () => {

    return (
        <>
            <nav className="navbar">
                <a className="navbar__link" href="#">Destinations</a>
                <a className="navbar__link" href="#">Booking</a>
                <a className="navbar__link" href="#">Services</a>
                <a className="navbar__link" href="#">Contact</a>
            </nav>
        </>
    )
}

export default Nav;