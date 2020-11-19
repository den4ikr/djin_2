import  preloader  from "../../assets/images/Blocks-1s-200px.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className = {s.preloader} >
            <img alt = "preloader" src = {preloader} />
        </div>
    )
}

export default Preloader;