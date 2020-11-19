import s from "./Map.module.css";
import GoogleMapReact from "google-map-react";

const Map = (props) => {

    const location = props.data.map (d => {
        return (
            <div key = {d.countryInfo._id} className = {s.case__block} lat = {d.countryInfo.lat} lng = {d.countryInfo.long}  >
                {d.cases}
            </div>
        )
    })
    return (
        <div>
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDL7ptqxqlYvhsrT5UE1iMSmvne9C8dm8M"}}
            defaultCenter={{ lat: 59.95, lng: 30.33, }} defaultZoom= {4}>
                {location}
            </GoogleMapReact>
        </div>
        </div>
    )
}

export default Map