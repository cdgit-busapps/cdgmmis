<template>
  <v-main class="login-main">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dense dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  append-icon="mdi-account"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="payload.email"
                ></v-text-field>
                <v-text-field
                  id="password"
                  append-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="payload.password"
                  @keypress.enter="login"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>
<script>
export default {
  layout: "black",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {data: this.payload});
        if(response.status == 200){
          this.$router.push({name: "inspire"});
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// .login-main{
// background-image: url('/default/bg-login.png');
// }
</style>