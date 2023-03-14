const iteasandservices = "items-and-services";
export default {
  methods:{
    async apiGetAllItemsAndServices (query){
      let res = await this.$axios.get(`${iteasandservices}?` + query)
      return res
    },

    async apiCreateItemandServices (payload) {
      let res = await this.$axios.post(`${iteasandservices}`, payload);
      return res
    },

    async apiUpdateItemandServices (id, payload) {
      let res = await this.$axios.post(`${iteasandservices}/` + id, payload);
      return res
    },
    
    async apiRemoveItemsAndServices (id) {
      let res = await this.$axios.delete(`${iteasandservices}/` + id);
      return res
    },

    async apiItemServicesToLocation (id) {
      let res = await this.$axios.post(`add-to-location/` + id);
      return res
    } 
  }
}