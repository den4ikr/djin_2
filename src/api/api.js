import axios from "axios";

const instance = axios.create ( {
    baseURL: "https://disease.sh/v3/covid-19/",
} )

export const API = {
    getAll () {
        return instance.get (`all`);
    },
    getCountries () {
        return instance.get (`countries`);
    },
    getCountry (query) {
        return axios.get (`https://corona.lmao.ninja/v3/covid-19/apple/countries/${query}`)
    },
    getCases () {
        return axios.get (`https://disease.sh/v3/covid-19/historical/all?lastdays=7`);
    },
}