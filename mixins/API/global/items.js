// import {httpApiClient} from "@global/axios";
// import { store } from "../store"
const items = "items";
// httpApiClient.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.user.api_token
export default{
  methods:{
    async apiGetAllBuildItems (query){
      let res = await this.$axios.get(`${items}?`+query);
      return res
    } 
  }
}
