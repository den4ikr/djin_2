import { useState } from "react"
import axios from "axios";
import s from "./Search.module.css";

const Search = (props) => {

    const [ query, setQuery ] = useState ("");
    const [ data, setData ] = useState ({});

    const onChange = (e) => {
        setQuery (e.target.value);
    }

    const getSearch = (e) => {
        if (e.key === "Enter") {
            axios.get (`https://corona.lmao.ninja/v3/covid-19/countries/${query}`)
                .then (response => {
                    setData (response.data);
                })
        }
    }

    return (
        <div className = {s.main__block} >
            <div>
                <input placeholder = "Enter your country..." className ="form-control" onKeyPress = {getSearch} onChange = {onChange} type = "text" value = {query} />
            </div>
            <div className = {s.country} >
                { data.country ? data.country : "Your Country" }
            </div>
            <div>
                <img className = {s.flag} src = { data.country ? data.countryInfo.flag : null } />
            </div>
            <div className = {s.row} >
                <div className = {s.cases} >
                    <div className = {s.title} >
                        cases
                    </div>
                    <div className = {s.num} >
                        { data.cases ? data.cases : "0" }
                    </div>
                </div>
                <div className = {s.deaths} >
                    <div className = {s.title} >
                        deaths
                    </div>
                    <div className = {s.num} >
                        { data.deaths ? data.deaths : 0 }
                    </div>
                </div>
                <div className = {s.recovered} >
                    <div className = {s.title} >
                        recovered
                    </div>
                    <div className = {s.num} >
                        { data.recovered ? data.recovered : 0 }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search