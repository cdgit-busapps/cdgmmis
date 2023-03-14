const canvas = "canvas";

export default{
  methods:{
    async apiAddCanvas (payload){
      let res = await this.$axios.post(`${canvas}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return res
    }, 

    async apiGetAllCanvas (query){
      let res = await this.$axios.get(`${canvas}?` + query)
      return res
    },

    async apiRemoveCanvas (id){
      let res = await this.axios.delete(`${canvas}/${id}`)
      return res
    },

    async apiUpdateIsRecommended (id, payload){
      let res = await this.$axios.put(`update-isrecommended/${id}`, payload)
      return res
    },

    async apiSubmitCanvas (payload) {
      let res = await this.$axios.post(`submit-${canvas}`, payload)
      return res
    },

    async apiApproveCanvas (payload){
      let res = await this.$axios.post(`approve-${canvas}`, payload)
      return res
    } 
  }
}