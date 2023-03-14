<template>
  <v-form ref="form" lazy-validation>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-row no-gutters>
          <v-col cols="12" xs="12" md="12">
            <p class="pa-0 ma-0">Name</p>
            <v-text-field
              v-model="payload.item_name"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="12">
            <p class="pa-0 ma-0">Description</p>
            <v-text-field
              v-model="payload.item_Description"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Item Group</p>

            <v-autocomplete
              v-model="payload.item_InventoryGroup_Id"
              :rules="[rules.required]"
              required
              :items="item_groups"
              item-text="name"
              item-value="id"
              @change="fetchCategory"
              dense
              solo
              hide-details="auto"
              class="mb-2 mr-1"
              attach
              :readonly="!isedit"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Category Group</p>
            <v-autocomplete
              v-model="payload.item_Category_Id"
              :rules="[rules.required]"
              required
              :items="categories"
              @change="fetchSubcategory"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2"
              attach
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Sub Category</p>
            <v-autocomplete
              v-model="payload.item_SubCategory_Id"
              :rules="[rules.required]"
              required
              solo
              :items="sub_categories"
              item-text="name"
              item-value="id"
              dense
              hide-details="auto"
              class="mb-2 mr-1"
              attach
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Brand</p>
            <v-autocomplete
              v-model="payload.item_Brand_Id"
              :rules="[rules.required]"
              required
              :items="brands"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2"
              attach
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Manufacturer</p>
            <v-text-field
              v-model="payload.item_Manufacturer_Id"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Specification</p>
            <v-text-field
              v-model="payload.item_specsification"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">SKU</p>
            <v-text-field
              v-model="payload.item_SKU"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Barcode</p>
            <v-text-field
              v-model="payload.item_Barcode"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Unit of Measure</p>
            <v-autocomplete
              v-model="payload.item_UnitOfMeasure_Id"
              :items="units"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2 mr-1"
              attach
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Prescription</p>
            <v-text-field
              v-model="payload.item_Med_Prescription"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Indication</p>
            <v-text-field
              v-model="payload.item_Med_Indication"
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Dosage</p>
            <v-text-field
              v-model="payload.item_Med_Dosage"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Pecaution</p>
            <v-text-field
              v-model="payload.item_Med_Precaution"
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Adverse Reaction</p>
            <v-text-field
              v-model="payload.item_Med_AdverseReaction"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Interaction</p>
            <v-text-field
              v-model="payload.item_Med_Interaction"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col cols="12" xs="12" md="12">
            <p class="pa-0 ma-0">Remarks</p>
            <v-textarea
              v-model="payload.item_Remarks"
              rows="4"
              dense
              solo
              hide-details="auto"
              class="mb-2"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-row no-gutters>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Reconstitution</p>
            <v-text-field
              v-model="payload.item_Med_Reconstitution"
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Stability</p>
            <v-text-field
              v-model="payload.item_Med_Stability"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Storage</p>
            <v-text-field
              v-model="payload.item_Med_Storage"
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Preperation</p>
            <v-text-field
              v-model="payload.item_Med_Preparation"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">DOH Code</p>
            <v-text-field
              v-model="payload.item_Med_DOH_Code"
              solo
              dense
              class="mb-2 mr-1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Model No.</p>
            <v-text-field
              v-model="payload.item_Model_No"
              :rules="[rules.required]"
              required
              solo
              dense
              class="mb-2"
              hide-details="auto"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Drug Administration</p>
            <v-autocomplete
              v-model="payload.item_Med_DrugAdministration_Id"
              :items="drug_administrations"
              item-text="method_name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2 mr-1"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Antibiotic Class</p>

            <v-autocomplete
              v-model="payload.item_Med_AntibioticClass_Id"
              :items="antibiotic_classes"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Generic Name</p>
            <v-autocomplete
              v-model="payload.item_Med_GenericName_Id"
              :items="generic_names"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2 mr-1"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <p class="pa-0 ma-0">Therapeutic Class</p>
            <v-autocomplete
              v-model="payload.item_Med_TherapeuticClass_Id"
              :items="therapeutic_classes"
              item-text="name"
              item-value="id"
              dense
              solo
              hide-details="auto"
              class="mb-2"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <v-radio-group column>
              <v-checkbox
                hide-details
                v-model="payload.isSupplies"
                label="Is Supplies"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isMedicines"
                label="is Medicine"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isFixedAsset"
                label="is Fixed Asset"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isReagents"
                label="is Reagents"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isMDRP"
                label="is MDRP"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isConsignment"
                label="is Consignment"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isSerialNo_Required"
                label="is Serial No. Required"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isLotNo_Required"
                label="is Lot No. Required"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isExpiryDate_Required"
                label="is Expiry Date Required"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isForProduction"
                label="is For Production"
                value="1"
              ></v-checkbox>
            </v-radio-group>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <v-radio-group column>
              <v-checkbox
                hide-details
                v-model="payload.isPersihable"
                label="is Perishable"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isVatable"
                label="is Vatable"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isVatExempt"
                label="is VatExempt"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isAllowDiscount"
                label="is Allow Discount"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isZeroRated"
                label="is Zero Rated"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isOpenPrice"
                label="is Open Price"
                value="1"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isAllowStatOrder"
                label="is Allow Stat Order"
                value="1"
              ></v-checkbox>
              <v-checkbox hide-details label="is Stat" value="1"></v-checkbox>
              <v-checkbox
                hide-details
                v-model="payload.isIncludeInStatement"
                label="is Include in Statement"
                value="1"
              ></v-checkbox>
            </v-radio-group>
          </v-col>
          <v-col cols="12" xs="12" md="12">
            <p class="pa-0 ma-0">Stat Percent</p>
            <v-text-field
              v-model="payload.item_StatPercent"
              solo
              dense
              class="mb-2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    payload: {
      type: Object,
      default: () => {},
    },
    isedit: {
      type: Boolean,
      default: () => false,
    },
    isapprove: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      required_date: false,
      sub_categories: [],
      categories: [],
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    async fetchSubcategory(val) {
      let params = `category_id=${val}`;
      let res = await this.apiGetAllSubCategories(params);
      this.sub_categories = res.data.subcategories;
    },
    async fetchCategory(val) {
      let params = `invgroup_id=${val}`;
      let res = await this.apiGetAllCategories(params);
      this.categories = res.data.categories;
    },
  },
  computed: {
    ...mapGetters([
      "item_groups",
      "brands",
      "units",
      "drug_administrations",
      "antibiotic_classes",
      "therapeutic_classes",
      "generic_names",
    ]),
  },
  mounted() {
    if (this.isedit) {
      this.payload.item_Brand_Id = parseInt(this.payload.item_Brand_Id);
      this.payload.item_Med_AntibioticClass_Id = parseInt(
        this.payload.item_Med_AntibioticClass_Id
      );
      this.payload.item_Med_DrugAdministration_Id = parseInt(
        this.payload.item_Med_DrugAdministration_Id
      );
      this.payload.item_Med_GenericName_Id = parseInt(
        this.payload.item_Med_GenericName_Id
      );
      this.payload.item_Med_TherapeuticClass_Id = parseInt(
        this.payload.item_Med_TherapeuticClass_Id
      );

      this.payload.item_InventoryGroup_Id = parseInt(
        this.payload.item_InventoryGroup_Id
      );
      this.payload.item_Category_Id = parseInt(this.payload.item_Category_Id);
      this.fetchCategory(this.payload.item_InventoryGroup_Id);
      this.fetchSubcategory(this.payload.item_Category_Id);
      this.payload.item_SubCategory_Id = parseInt(
        this.payload.item_SubCategory_Id
      );
    }
  },
  created() {
    this.fetchCategory(this.payload.item_InventoryGroup_Id);
  },
};
</script>