<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <strong> Sign in to continue</strong>
    </div>
    <div class="panel-body">
      <form role="form" @submit.prevent="authenticate()">
        <fieldset>
          <div class="row">
            <div class="center-block">
              <img class="profile-img"
                src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">
            </div>
          </div>
          <div class="row" v-if="authError">
            <div class="col-sm-12 col-md-10  col-md-offset-1  alert alert-danger">
              {{ authError }}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-10  col-md-offset-1 ">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span> 
                  <input class="form-control" placeholder="Email" name="email" type="email" v-model="form.email" autofocus>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-lock"></i>
                  </span>
                  <input class="form-control" placeholder="Password" name="password" type="password" v-model="form.password">
                </div>
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-lg btn-primary btn-block" value="Sign in">
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="panel-footer ">
      Don't have an account! <a href="#" onClick=""> Sign Up Here </a>
    </div>
  </div>  
</template>

<script>

import { login } from "../../helpers/auth";

export default {
  name: 'login-form',
  data(){
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },

  methods: {
    authenticate(){
      this.$store.dispatch('login');

      login(this.$data.form)
        .then((res) => {
          this.$store.commit('loginSucceed', res);
          this.$router.push({ path: '/' });
        }).catch((err) => {
          this.$store.commit('loginFailed', { err });
        })
    }
  },

  computed: {
    authError(){
      console.log("from auth error", this.$store.getters.authErrors);
      return this.$store.getters.authErrors;
    }
  }
  
}
</script>

<style scoped>
.panel-heading {
    padding: 5px 15px;
}

.panel-footer {
  padding: 1px 15px;
  color: #A0A0A0;
}

.profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
