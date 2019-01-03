import Home from "./components/Home.vue";
import Login from "./components/Auth/Login.vue";
import CustomersMain from "./components/Customers/Main.vue";
import CustomersList from "./components/Customers/List.vue";
import CustomersCreateForm from "./components/Customers/Create.vue";
import CustomersShow from "./components/Customers/Show.vue";

export const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      requireAuth: true
    } 
  },

  { 
    path: '/login', 
    component: Login 
  },

  {
    path: '/customers',
    component: CustomersMain,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/',
        component: CustomersList
      },
      {
        path: 'new',
        component: CustomersCreateForm
      },
      {
        path: ':id',
        component: CustomersShow
      }
    ]
  }
];