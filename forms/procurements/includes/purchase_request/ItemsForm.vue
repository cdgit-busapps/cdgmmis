<template>
  <v-dialog
    v-model="show"
    hide-overlay
    width="700"
    transition="dialog-top-transition"
    scrollable
    persistent
  >
    <v-card>
      <v-card-text>
        <custom-table
          class="pr-form-if-bg-white"
          :data="setting"
          :tableData="tableData"
          :headers="tableData.headers"
          :show_select="true"
          :single_select="false"
          @search="search"
          @fetchPage="fetchBuildItems"
          @refresh="fetchBuildItems"
          :height="'59vh'"
          :hide="['add-btn', 'filter-btn', 'floater-btn']"
        >
          <template v-slot:item_OnHand="{ item }">
            {{ item.ware_house_item.item_OnHand }}
          </template>
        </custom-table>
        <div class="d-flex flex-row-reverse">
          <v-btn color="primary" @click="$emit('selected', tableData.selected)"
            >Select</v-btn
          >
          <v-btn class="mr-2" color="error" @click="$emit('cancel')"
            >Cancel</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    payload: {
      type: Object,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: () => false,
    },
    isedit: {
      type: Boolean,
      default: () => false,
    }
  },
  data() {
    return {
      setting: {
        title: "List of Items",
        keyword: "",
        loading: false,
        filter: {},
      },
      tableData: {
        headers: [
          {
            text: "Code",
            sortable: true,
            value: "id",
          },
          {
            text: "Item name",
            sortable: true,
            value: "item_name",
          },
          {
            text: "Current stocks",
            sortable: true,
            value: "item_OnHand",
          },
        ],
        items: [],
        options: {
          itemsPerPage: 15,
        },
        total: 0,
        selected: [],
      },
    };
  },
  methods: {
    initialize() {},
    search() {},
    async fetchBuildItems() {
      this.setting.loading = true;
      let params = `warehouse_id=${this.$auth.user.details.warehouse.id}&category_id=${this.payload.item_Category_Id}`;
      params =
        params +
        `&subcategory_id=${this.payload.item_SubCategory_Id}&item_InventoryGroup_Id=${this.payload.invgroup_id}`;
      let res = await this.apiGetAllBuildItems(params);
      if (res.status == 200) {
        this.tableData.items = res.data.data;
        this.tableData.total = res.data.total;
        this.setting.loading = false;
        // if(this.isedit){
        //   this.payload.items.forEach((item) => {
        //     this.tableData.selected.push(item.item_master);
        //   });
        //     console.log(this.tableData, "items");
        // }
      }
    },
  },
  watch: {
    show: {
      handler(val) {
        if (val) {
          this.tableData.selected = []
          if(this.isedit){
            this.payload.items.forEach((item) => {
              this.tableData.selected.push(item.item_master);
            });
              console.log(this.tableData, "items");
          }
        }
      },
    },
  },
};
</script>
