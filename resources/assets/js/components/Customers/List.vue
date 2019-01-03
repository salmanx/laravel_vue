<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="pull-right">            
            <router-link to="customers/new" class="btn btn-primary">Create Customer</router-link>
          </div>
          <h4>Customers</h4>
        </div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Website</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <template v-if="!customers.length">
                <tr>
                  <td colspan="4">No customers available</td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.website }}</td>
                  <td>
                    <router-link :to="`customers/${customer.id}`">View</router-link>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customers-list',
  
  mounted() {
    if(this.customers.length > 0){
      return;
    }
    
    return this.$store.dispatch('getAllCustomers');
  },

  computed: {
    customers(){
      return this.$store.getters.customers;
    }
  }
}
</script>

<style>

</style>
