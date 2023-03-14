<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>
      <v-img
        lazy-src="/default/logo.png"
        max-height="50"
        max-width="150"
        src="/default/logo.png"
      ></v-img>
    </v-toolbar-title>
    <main-app-header/>
    <v-spacer></v-spacer>
    <v-menu left bottom offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </template>
      <v-list dense>
        <v-list-item>
          <v-btn
            text small
            color="primary"
            dark plain
            :ripple="false"
            @click="logout"
          >
            <v-icon left dark>mdi-logout</v-icon>
            Logout
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapGetters } from 'Vuex'
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Material Management Information System",
    };
  },
  created(){
    this.$store.dispatch("fetchSettings")
    this.$store.dispatch("fetchPriorities")
    this.$store.dispatch("fetchStatus")
    this.$store.dispatch("fetchUnits")
    this.$store.dispatch("fetchItemGroups")
  },
  methods: {
    async logout() {
      try {
        let res = await this.$auth.logout();
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed:{
    ...mapGetters(['units'])
  },
  watch: {
    $route(to, from) {
      console.log('route change to', to)
      console.log('route change from', from)
    },
  },
};
</script>
