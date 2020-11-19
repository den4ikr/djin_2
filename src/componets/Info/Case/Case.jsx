import s from "./Case.module.css";

import global from "../../../assets/images/Group 13.png"
import cases from "../../../assets/images/Group 17 (1).png"
import deaths from "../../../assets/images/Group 17 (2).png"
import recovered from "../../../assets/images/Group 17.png"


const Case = (props) => {
    return (
        <div className = {s.row} >
            <div className = {s.sub__row} >
                <div>
                    <img alt = "img" className = {s.img} src = {global} />
                </div>
                <div className = {s.sub__sub__row} >
                    <div className = {s.info__title} >
                        Stats Overview
                    </div>
                    <div className = {s.info__text} >
                        Global
                    </div>
                </div>
            </div>
            <div className = {s.sub__row} >
                <div>
                    <img alt = "img" src = {recovered} />
                </div>
                <div className = {s.sub__sub__row} >
                    <div className = {s.info__title} >
                        Total Coronavirus Cases
                    </div>
                    <div className = {s.info__text} >
                        {props.data.cases}
                    </div>
                </div>
            </div>
            <div className = {s.sub__row} >
                <div>
                    <img alt = "img" src = {cases} />
                </div>
                <div className = {s.sub__sub__row} >
                    <div className = {s.info__title} >
                        Total Recovered
                    </div>
                    <div className = {s.info__text} >
                        {props.data.recovered}
                    </div>
                </div>
            </div>
            <div className = {s.sub__row} >
                <div>
                    <img alt = "img" src = {deaths} />
                </div>
                <div className = {s.sub__sub__row} >
                    <div className = {s.info__title} >
                        Total Deaths
                    </div>
                    <div className = {s.info__text} >
                        {props.data.deaths}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Case;