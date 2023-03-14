import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      user_permissions: [],
      prsn_settings: null,
      item_groups: [],
      units: [],
      status: [],
      priorities: [],
      brands: [],
      drug_administrations: [],
      antibiotic_classes: [],
      therapeutic_classes: [],
      generic_names: [],
    },

    mutations: {
      setUserPermissions(state, value) {
        state.user_permissions = value;
      },
      setPRSNSettings(state, value) {
        state.prsn_settings = value;
      },
      setItemGroups(state, value) {
        state.item_groups = value;
      },
      setUnits(state, value) {
        state.units = value;
      },
      setStatus(state, value) {
        state.status = value;
      },
      setPriorities(state, value) {
        state.priorities = value;
      },
      setBrands(state, value) {
        state.brands = value;
      },
      setDrugAdministrations(state, value) {
          state.drug_administrations = value;
      },
      setAntibioticClasses(state, value) {
          state.antibiotic_classes = value;
      },
      setGenericNames(state, value) {
          state.generic_names = value;
      },
      setTherapeuticClasses(state, value) {
          state.therapeutic_classes = value;
      },
    },

    actions: {
      async fetchSettings({ commit, state }) {
        this.$axios.get('system-settings').then(({ data }) => {
          commit("setPRSNSettings", data.settings)
        })
      },
      async fetchPriorities({ commit, state }) {
        if (state.priorities.length) return
        this.$axios.get('priorities').then(({ data }) => {
          commit("setPriorities", data.priorities)
        })
      },
      async fetchStatus({ commit, state }) {
        if (state.status.length) return
        this.$axios.get('status').then(({ data }) => {
          commit("setStatus", data.status)
        })
      },

      async fetchUnits({ commit, state }) {
        if (state.units.length) return
        this.$axios.get('units').then(({ data }) => {
          commit("setUnits", data.units)
        })
      },

      async fetchItemGroups({ commit, state }) {
        if (state.item_groups.length) return
        this.$axios.get('items-group').then(({ data }) => {
          commit("setItemGroups", data.item_groups)
        })
      },

      async fetchBrands({ commit, state }) {
        if (state.brands.length) return
        this.$axios.get('brand').then(({ data }) => {
            commit("setBrands", data.brand)
        })
      },

      async fetchDrugAdministrations({ commit, state }) {
        if (state.drug_administrations.length) return
        this.$axios.get('drug-administration').then(({ data }) => {
            commit("setDrugAdministrations", data.drug_administration)
        })
      },

      async fetchAntibioticClasses({ commit, state }) {
        if (state.antibiotic_classes.length) return
        this.$axios.get('antibiotic').then(({ data }) => {
            commit("setAntibioticClasses", data.antibiotics)
        })
      },

      async fetchGenericNames({ commit, state }) {
        if (state.generic_names.length) return
        this.$axios.get('generic-name').then(({ data }) => {
            commit("setGenericNames", data.generic_name)
        })
      },

      async fetchTherapeuticClasses({ commit, state }) {
        if (state.therapeutic_classes.length) return
        this.$axios.get('therapeutic-class').then(({ data }) => {
            commit("setTherapeuticClasses", data.therapeutic_class)
        })
      },
    },

    getters: {
      user_permissions: state => state.user_permissions,
      prsn_settings: state => state.prsn_settings,
      item_groups: state => state.item_groups,
      units: state => state.units,
      status: state => state.status,
      priorities: state => state.priorities,
      brands: state => state.brands,
      drug_administrations: state => state.drug_administrations,
      antibiotic_classes: state => state.antibiotic_classes,
      therapeutic_classes: state => state.therapeutic_classes,
      generic_names: state => state.generic_names,
    }

  })
}

export default store
