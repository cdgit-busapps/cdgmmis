<template>
  <v-row class="test-width">
    <v-col cols="6">
      <v-autocomplete 
        v-model="setting.branch_id"
        :items="branchs"
        item-text="name"
        item-value="id" 
        placeholder="Branch"
        hide-details="auto"
      ></v-autocomplete>
    </v-col>
    <v-col cols="6">
      <v-autocomplete 
        v-model="setting.department_id" 
        placeholder="Department"
        hide-details="auto"
      ></v-autocomplete>
    </v-col>
    <v-col cols="6">
      <v-autocomplete 
        v-model="setting.item_Category_Id" 
        label="Category"
        :items="categories"
        item-text="name"
        item-value="id"
        hide-details="auto"
      ></v-autocomplete>
    </v-col>
    <v-col cols="6">
      <v-autocomplete 
        v-model="setting.item_SubCategory_Id" 
        label="Subcategory"
        :items="subcategories"
        item-text="name"
        item-value="id"
        hide-details="auto"
      ></v-autocomplete>
    </v-col>
    <!-- <v-col cols="6">
      <v-menu
        v-model="requested_date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            clearable
            v-model="setting.requested_date"
            label="Requested date"
            hide-details="auto"
            @click:clear="setting.requested_date = null"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="setting.requested_date"
          @change="requested_date = false"
          no-title
          scrollable
        >
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6">
      <v-menu
        v-model="required_date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            clearable
            v-model="setting.required_date"
            label="Required date"
            hide-details="auto"
             @click:clear="setting.required_date = null"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="setting.required_date"
          @change="required_date = false"
          no-title
          scrollable
        >
        </v-date-picker>
      </v-menu>
    </v-col> -->
  </v-row>
</template>
<script>
import PurchaseHelper from '~/mixins/PurchaseHelper.vue'
import {mapGetters} from "vuex"
export default {
  mixins:[PurchaseHelper],
  props:{
    setting:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      required_date:false,
      requested_date:false,
      categories:[],
      subcategories:[],
    }
  },
  methods:{
    async fetchCategories(){
      let params = ''
      if(this.setting.param_tab){
        this.setting.category = null
        params += 'invgroup_id='+this.setting.param_tab
      }
      let res = await this.apiGetAllCategories(params)
      if(res.status == 200){
        this.categories = res.data.categories
      }
    },
    async fetchSubCategories(){
      let params = ''
      if(this.setting.category){
        this.setting.subcategory = null
        params += 'category_id='+this.setting.category
      }
      let res = await this.apiGetAllSubCategories(params)
      if(res.status == 200){
        this.subcategories = res.data.subcategories
      }
    }
  },
  watch:{
    setting:{
      handler(){
        this.fetchCategories()
        this.fetchSubCategories()
      },
      deep:true, immediate: true
    }
  },
  computed:{
    ...mapGetters(['branchs'])
  }
  // created(){
  //   this.fetchCategories()
  //   this.fetchSubCategories()
  // }
}
</script>
<style lang="scss" scoped>
.test-width{
  width: 500px !important;
}
</style>