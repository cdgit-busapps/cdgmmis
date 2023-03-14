<template>
  <v-card elevation="1" v-if="can('browse_ItemMaster')">
    <AppHeader :setting="setting" @change="changeTab" />
    <custom-table
      :data="setting"
      :tableData="tableData"
      :headers="headers"
      @view="viewRecord"
      @search="search"
      @add="addItem"
      @edit="editItem"
      @remove="removeConfirmation"
      @fetchPage="initialize"
      @resetFilters="resetFilters"
      @filterRecord="initialize"
      @refresh="initialize"
      :hide="checkPermission"
    >
      <!-- <template v-slot:custom_filter>
        <FilterForm :setting="setting" />
      </template> -->
      <template v-slot:prnumber="{ item }">
        {{
          item.pr_Document_Prefix +
          "-" +
          item.pr_Document_Number +
          "-" +
          item.pr_Document_Suffix
        }}
      </template>
      <template v-slot:daterequested="{ item }">
        {{ _dateFormat(item.daterequested) }}
      </template>
      <template v-slot:item_InventoryGroup_Id="{ item }">
        {{ item.item_InventoryGroup_Id ? item.item_group.name : "..." }}
      </template>
      <template v-slot:item_Category_Id="{ item }">
        {{ item.item_Category_Id ? item.item_category.name : "..." }}
      </template>

      <template v-slot:item_UnitOfMeasure_Id="{ item }">
        {{ item.item_UnitOfMeasure_Id ? item.unit.name : "..." }}
      </template>

      <template v-slot:warehouse="{ item }">
        {{ item.warehouse.warehouse_description }}
      </template>
      <!-- <template v-slot:custom-action="{ item }">
        <v-icon small color="success" class="mr-1" @click.stop="viewPR(item)">
          mdi-plus-outline
        </v-icon>
      </template> -->
    </custom-table>
    <DataForm
      :show="showForm"
      :isedit="isedit"
      :isapprove="isapprove"
      :payload="payload"
      @submit="forConfirmation"
      @close="(showForm = false), clearForm()"
    />
    <Confirmation
      @cancel="cancelConfirmation"
      @confirm="submit"
      :show="isconfirmation"
    />
    <SnackBar
      @close="isnotification = false"
      :data="notification"
      :show="isnotification"
    />
  </v-card>
</template>
<script>
import ItemsHelper from "~/mixins/ItemsHelper.vue";
import ItemServices from "~/mixins/API/item_management/item_services";
import DataForm from "~/forms/item_managements/item_and_services.vue";
import AppHeader from "~/includes/item_management/AppHeader.vue";
// import FilterForm from "~/forms/item_managements/filter_forms/ItemServices.vue"
export default {
  name: "item-services",
  mixins: [ItemsHelper, ItemServices],
  components: {
    DataForm,
    AppHeader,
    // FilterForm,
  },
  data() {
    return {
      setting: {
        title: "Items by locations",
        keyword: "",
        loading: false,
        filter: {},
        tab: 0,
        param_tab: 1,
      },
      tableData: {
        items: [],
        options: {
          itemsPerPage: 15,
        },
        total: 0,
        selected: [],
      },
      loading: false,
      showForm: false,
      payload: {},
      // hideActions:[],
      isconfirmation: false,
      isnotification: false,
      isedit: false,
      isdelete: false,
      isaction: false,
      isapprove: false,
      isremarks: false,
      notification: {
        messages: [],
      },
      selected_item: {},
    };
  },
  methods: {
    async initialize() {
      this.setting.loading = true;
      let params = this._createParams(this.tableData.options);
      params = params + this._createFilterParams(this.setting.filter);
      if (this.setting.keyword)
        params = params + "&keyword=" + this.setting.keyword;
      params = params + `&tab=${this.setting.param_tab}`;
      params = params + `&warehouse_id=${this.$auth.user.details.warehouse_id}`;
      // params = params + `&branch_id=${this.$auth.user.details.branch_id}`;

      let res = await this.apiGetAllItemsAndServices(params);
      console.log(res, "item and services");
      if (res.status == 200) {
        this.tableData.selected = [];
        this.clearForm();
        this.tableData.items = res.data.data;
        this.tableData.total = res.data.total;
        this.setting.loading = false;
      }
    },
    addItem() {
      this.tableData.selected = [];
      this.isedit = false;
      this.clearForm();
      this.payload.item_InventoryGroup_Id = this.setting.param_tab

      this.showForm = true;
      if (this.user) {
      }
    },
    editItem(item) {
      if (item) {
        console.log(item, "edit");
        this.viewRecord(item);
      }
      setTimeout(() => {
        this.showForm = true;
      }, 50);
    },
    async remove(item) {
      let res = await this.apiRemoveItemsAndServices(this.payload.id);
      if (res.status == 200) {
        this.notification.messages = [];
        this.notification.messages.push("Record successfully removed");
        this.notification.color = "success";
        this.isnotification = true;
        this.isconfirmation = false;
        this.isdelete = false;
        this.initialize();
      }
    },
    viewRecord(item) {
      Object.assign(this.payload, item);

      this.isaction = true;
      this.isedit = true;
      console.log(this.payload, "payloadddd");
    },
    clearForm() {
      if (!this.isedit) {
        this.tableData.selected = [];
        this.payload = {};
        this.payload.requested_date = new Date();
        this.payload.items = [];
        this.tableData.selected = [];
        this.isedit = false;
        this.isapprove = false;
        this.isaction = false;
      }
      // this.isedit = false
    },
    resetFilters() {
      this.setting.filter = {};
      this.initialize();
    },
    search() {
      this.tableData.options.page = 1;
      this.initialize();
    },
    changeTab(tab) {
      this.setting.param_tab = tab;
      this.initialize();
      console.log(tab);
    },
    forConfirmation() {
      this.isconfirmation = true;
    },
    removeConfirmation() {
      this.isdelete = true;
      this.isconfirmation = true;
    },
    cancelConfirmation() {
      this.isdelete = false;
      this.isconfirmation = false;
    },
    async submit(code) {
      if (this.isdelete) return this.remove();
      let res = {};
      if (this.isedit)
        res = await this.apiUpdateItemandServices(
          this.payload.id,
          this.payload
        );
      else res = await this.apiCreateItemandServices(this.payload);
      if (res.status == 200) {
        this.notification.messages = [];
        this.notification.messages.push("Record successfully saved");
        this.notification.color = "success";
        this.isnotification = true;
        this.isconfirmation = false;
        this.showForm = false;
        this.isedit = false;
        this.initialize();
      }
    },
  },
  computed: {
    checkPermission() {
      let hideActions;
      hideActions = ["floater-btn", "filter-btn"];
      if (!this.can("delete_ItemMaster"))
        hideActions.push("delete-btn");
      if (!this.can("add_ItemMaster"))
        hideActions.push("add-btn");
      if (!this.can("edit_ItemMaster"))
        hideActions.push("edit-btn");
      if (!this.can("read_ItemMaster")) hideActions.push("show-btn");
      if (!this.isAuthorize("pr") || this.hasActions(this.setting))
        hideActions.push("approve-btn");
      return hideActions;
    },

    headers() {
      let headerItems = [
        {
          text: "Code",
          sortable: false,
          value: "id",
        },
        { text: "Item Category", value: "item_Category_Id" },
        { text: "Item Name", value: "item_name" },
        { text: "Description", value: "item_Description" },
        { text: "Unit", value: "item_UnitOfMeasure_Id" },
        { text: "Barcode ID", value: "item_Barcode" },
      ];
      if (!this.drawer) {
        headerItems.push({ text: "Action", value: "action" });
      }
      return headerItems;
    },
  },
  created() {
    this.$store.dispatch("fetchUnits");
    this.$store.dispatch("fetchBrands");
    this.$store.dispatch("fetchDrugAdministrations");
    this.$store.dispatch("fetchAntibioticClasses");
    this.$store.dispatch("fetchGenericNames");
    this.$store.dispatch("fetchTherapeuticClasses");
  },
};
</script>