import s from "./Header.module.css";
import logo from "../../assets/images/Logo.png";

const Header = (props) => {
    return (
        <div className = {s.header} >
            <div className = {s.row} >
                <div>
                    <img alt = "logo" src = {logo} />
                </div>
                <div className = {s.header__title} >
                    Corona tracker
                </div>
            </div>
        </div>
    )
}

export default Header;