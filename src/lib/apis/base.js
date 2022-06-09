import axios from "axios";

const baseURL = "https://cricket-live-data.p.rapidapi.com/"

const headers = {
    "X-RapidAPI-Key": "1cbdedfd4emshec851c4d9f694a5p12db26jsn332194045ffc",
    "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com"
}

export const api = axios.create({
    baseURL,
    headers
});
