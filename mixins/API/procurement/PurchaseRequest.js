const purchase = "purchase-request";

export default {
  methods:{
    async apiGetAllPurchaseRequest(query){
      let res = await this.$axios.get(`${purchase}?` + query);
      return res
    },

    async apiGetPurchaseRequest (id) {
      let res = await this.$axios.get(`${purchase}/` + id);
      return res
    },

    async apiRemovePurchaseRequest (id){
      let res = await this.$axios.delete(`${purchase}/` + id)
      return res
    },

    async apiApprovePurchaseRequestItems (payload){
      let res = await this.$axios.post(`${purchase}-items/`, payload)
      return res
    },

    async apiCreatePurchaseRequest (payload){
      let res = await this.$axios.post(`${purchase}`, payload, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      return res
    }, 

    async apiUpdatePurchaseRequest (id, payload) {
      let res = await this.$axios.post(`${purchase}/` + id, payload, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      return res
    },

    async apiUpdatePurchaseRequestItemAttachment (id, payload){
      let res = await this.$axios.post(`update-item-attachment/` + id, payload, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      return res
    }, 

    async apiRemovePurchaseRequestItem (id){
      let res = await this.$axios.delete(`remove-item/` + id);
      return res
    } 
  }
}