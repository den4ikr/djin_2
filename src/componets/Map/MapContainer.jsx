import { useEffect } from "react";
import { connect } from "react-redux"
import { getCountries } from "../../redux/box-reducer";
import Map from "./Map";
const MapContainer = (props) => {

    useEffect ( () => {
        props.getCountries ();
    }, [] )

    return (
        <Map { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.box.data,
    }
}

export default connect (mapStateToProps, {getCountries} )(MapContainer);