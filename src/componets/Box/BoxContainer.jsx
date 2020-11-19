import { useEffect } from "react";
import { connect } from "react-redux"
import { getCountries } from "../../redux/box-reducer";
import Box from "./Box";

const BoxContainer = (props) => {

    useEffect ( () => {
        props.getCountries ();
    }, [] )

    return (
        <Box { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.box.data,
    }
}

export default connect (mapStateToProps, {getCountries} )(BoxContainer);