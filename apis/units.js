// import {httpApiClient} from "@global/axios";
const items = "units";

export const apiGetAllUnits = (query)  => axios.get(`${items}?`+query);