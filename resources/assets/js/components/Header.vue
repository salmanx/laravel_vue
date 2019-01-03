<template>
  <!-- Static navbar -->
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>        
        <router-link class="navbar-brand" to="/">Project name</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <template v-if="!currentUser">
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li>
              <router-link to="/register">Register</router-link>
            </li>
          </template>
          <template v-else>
            <li>
              <router-link to="/customers">Customers</router-link>
            </li>
            <li class="dropdown">
              <router-link to="#!" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hi! {{ currentUser.name }} <span class="caret"></span></router-link>
              <ul class="dropdown-menu">
                <li><a href="#!" @click.prevent="logout()">Logout</a></li>
              </ul>              
            </li>
          </template>          
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'app-header',
        
        methods: {
          logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
          }
        },

        computed: {
          currentUser(){
            return this.$store.getters.currentUser;
          }
        }
    }
</script>
