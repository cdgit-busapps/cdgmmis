// import {httpApiClient} from "@global/axios";
// import { store } from "../store"
const categories = "categories";
const subCategories = "sub-categories";
const classifications = "classifications";
// httpApiClient.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.user.api_token
export default {
  methods: {
    async apiGetAllClassifications (query){
      let res = await this.$axios.get(`${classifications}?`+query)
      return res
    }, 
    async apiGetAllCategories (query){
      let res = await this.$axios.get(`${categories}?`+query)
      return res
    }, 
    async apiGetAllSubCategories (query){
      let res = await this.$axios.get(`${subCategories}?`+query)
      return res
    }
  }
}