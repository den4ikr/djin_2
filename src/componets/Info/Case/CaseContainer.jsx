import { useEffect } from "react"
import { connect } from "react-redux"
import Case from "./Case";
import {getResults} from "../../../redux/case-reducer";

const CaseContainer = (props) => {

    useEffect ( () => {
        props.getResults ()
    }, [] )

    return (
        <Case { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.case.data,
    }
}

export default connect (mapStateToProps, {getResults} )(CaseContainer);