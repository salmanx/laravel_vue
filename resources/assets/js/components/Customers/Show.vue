<template>
  <div class="row">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Customer Details</h4>
      </div>
      <div class="panel-body" v-if="customer">
        <div class="well profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <figure>
                      <img src="#" alt="" class="img-circle" style="width:75px;" id="user-img">
                </figure>
                <h5 style="text-align:center;"><strong id="user-name">{{ customer.name }}</strong></h5>
                <p style="text-align:center;font-size: smaller;" id="user-frid">{{ customer.phone }} </p>
                <p style="text-align:center;font-size: smaller;overflow-wrap: break-word;" id="user-email">{{ customer.website }} </p>

            </div>
        </div>        
      </div>
    </div>  
  </div>  
</template>

<script>
export default {
  name: 'customers-show',

  data(){
    return {
      customer: null
    }
  },

  computed: {
    currentUser(){
      return this.$store.getters.currentUser;
    },

    customers(){
      return this.$store.getters.customers;
    }
  },

  created(){
    if (this.customers.length > 0) {
      this.customer = this.customers.find((cusotmer) => cusotmer.id == this.$route.params.id)      
    } else {
      axios.get(`/api/customers/${this.$route.params.id}`).then((resp) => {
        console.log(resp);
        this.customer = resp.data.customer;
      });      
    }

  }
}
</script>

<style>

</style>
