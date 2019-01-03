<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Create Customer</h4>
        </div>
        <div class="panel-body">
        <form class="form-horizontal" @submit.prevent="add()">
          <div class="form-group">
            <div class="col-md-12">
              <div class="alert alert-danger" v-if="errors">
                <ul>
                  <li v-for="(fieldError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldError.join('\n') }}
                  </li>
                </ul>
              </div>              
            </div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="name" placeholder="Name" v-model="customer.name">
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="customer.email">
            </div>
          </div>          
          <div class="form-group">
            <label for="phone" class="col-sm-2 control-label">Phone</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="phone" placeholder="phone" v-model="customer.phone">
            </div>
          </div>          
          <div class="form-group">
            <label for="website" class="col-sm-2 control-label">Website</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="website" placeholder="Website" v-model="customer.website">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-2 pull-right">
              <router-link to="/customers" class="btn btn-primary">Cancel</router-link>
            </div>

            <div class="col-md-2 col-md-offset-8">
              <input type="submit" class="btn btn-primary" value="Create" />
            </div>            
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validate from 'validate.js';

export default {
  name : 'create-customer-form',

  data(){
    return {
      customer: {
        name: '',
        email: '',
        phone: '',
        website: ''
      },
      errors: null
    }
  },

  computed: {
    currentUser(){
      return this.$store.getters.currentUser;
    }
  },

  methods: {
    add(){
      this.errors = null;
      const rules = this.validatorRules();
      const errors = validate(this.$data.customer, rules);

      if (errors) {
        this.errors = errors;
        return;
      }

      axios.post('/api/customers/store', this.$data.customer ).then((resp) => {
        console.log(resp);
        this.$router.push('/customers');
      }).catch((err) => {
        console.log(err);
      })
    },

    validatorRules(){
      return {
        name: {
          presence: true,
          length: {
            minimum: 3,
            message: "Name should be minimum 3 characters"
          }
        },

        email: {
          presence: true,
          email: true
        },

        phone: {
          presence: true,
          numericality: true,
          length: {
            minimum: 6,
            message: "Phone number should be minimum 6 characters"
          }
        },

        website: {
          presence: true,
          url: true
        }
      }
    }
  }
}
</script>

<style>

</style>
