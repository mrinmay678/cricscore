import { api } from "./base";

export async function get_series() {
    const res = await api.get("/series");
    return res.data.results;
}