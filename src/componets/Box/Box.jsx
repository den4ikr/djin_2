import s from "./Box.module.css";

const Box = (props) => {
    return (
        <div>
            <div className = {s.box__title} >
                Live Cases By Country
            </div>
            <div className = {s.box} >
                {props.data.map (d => {
                    return (
                    <tr key = {d.country} >
                        <td className = {s.country} >
                            {d.country}
                        </td>
                        <td>
                            {d.cases}
                        </td>
                    </tr>
                    )
                })}
            </div>
        </div>
    )
}

export default Box;