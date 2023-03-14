// import { httpApiClient } from "@global/axios";
// import { store } from "@global/store"
const iteasandservices = "items-and-services";
// httpApiClient.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.user.api_token

export const apiGetAllItemsAndServices = (query) => axios.get(`${iteasandservices}?` + query);
export const apiCreateItemandServices = (payload) => axios.post(`${iteasandservices}`, payload);
export const apiUpdateItemandServices = (id, payload) => axios.post(`${iteasandservices}/` + id, payload);
export const apiRemoveItemsAndServices = (id) => axios.delete(`${iteasandservices}/` + id);