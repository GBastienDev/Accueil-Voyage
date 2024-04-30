import './Header.scss';
import Nav from './Nav/Nav';

const Header = () => {

    return(
        <>
            <header className="header">
                <a href="#" className="header__logo">Tours.</a>

                <div className="header__social">
                    <a className="header__link" href="#"><i class='bx bxl-twitter'></i></a>
                    <a className="header__link" href="#"><i class='bx bxl-facebook'></i></a>
                    <a className="header__link" href="#"><i class='bx bxl-telegram'></i></a>
                    <a className="header__link" href="#"><i class='bx bxl-instagram-alt'></i></a>
                </div>
                
                <Nav />
            </header>
        </>
    )
}

export default Header;