<template>
  <v-toolbar width="100%" color="transparent" dense flat>
    <v-toolbar-items class="hidden-xs-only">
      <template v-for="item in items">
        <v-menu offset-y open-on-hover :key="item.name" v-if="item.children && item.children.length">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              small
              v-bind="attrs"
              v-on="on"
              color="primary"
              :class="{'active-route':item.alias==$route.fullPath.split('/')[1]}"
              dark
            >
              <v-icon left dark>{{ item.icon }}</v-icon>
              {{ item.name }}
            </v-btn>
          </template>
          <v-list dense>
            <template v-for="(children, index) in item.children">
              <template v-if="children.sub_childrens && children.sub_childrens.length">
                <v-list-group
                  :key="index"
                  dense
                  @click.stop=""
                >
                  <template v-slot:activator>
                    <v-btn
                      text
                      small
                      color="primary"
                      dark
                      plain
                      :ripple="false"
                    >
                       <v-icon left dark>{{ children.icon }}</v-icon>
                      {{ children.name }}
                    </v-btn>
                    <v-list-item-title></v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="(sub_children, i) in children.sub_childrens"
                    @click="selectedRoute(sub_children)"
                    :key="i" dense
                    :class="{ 'active-route': sub_children.alias==$route.fullPath.split('/')[3]}"
                  >
                    <v-btn
                      text small
                      color="primary"
                      plain
                      :ripple="false"
                      class="ml-2"
                    >
                      <v-icon left dark>{{ sub_children.icon }}</v-icon>
                      {{ sub_children.name }}
                    </v-btn>
                  </v-list-item>
                </v-list-group>
              </template>
              <v-list-item v-else :key="index" class="">
                <v-btn
                  text
                  small
                  color="primary"
                  dark
                  plain
                  :ripple="false"
                >
                  <v-icon left dark>{{ children.icon }}</v-icon>
                  {{ children.name }}
                </v-btn>
              </v-list-item>
            </template>
        </v-list>
        </v-menu>
        <v-btn
          v-else
          :key="item.name"
          text
          small
          color="primary"
          :to="item.path"
          plain
          :ripple="false"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </template>
      </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import MenuItems from "~/static/MenuItems";
export default {
  data: () => ({
    items: MenuItems,
    isHovered: false,
    main_active_route:null
  }),
  methods: {
    selectedRoute(route) {
      this.main_active_route = route.route;
      this.$router.push({name: route.route});
    },
  },
  created() {
    console.log(this.$route)
    console.log(this.$route.fullPath.split("/")[1])
  }
};
</script>