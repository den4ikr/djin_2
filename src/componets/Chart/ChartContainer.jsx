import { useEffect } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import { getData } from "../../redux/chart-reducer";

const ChartContainer = (props) => {

    useEffect ( () => {
        props.getData ()
    }, [] )

    return (
        <Chart { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.chart.data,
    }
}

export default connect (mapStateToProps, {getData} )(ChartContainer);