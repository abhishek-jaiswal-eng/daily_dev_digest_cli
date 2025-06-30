import { createRouter, createWebHistory } from "vue-router";
import LoginScreen from "@/components/LoginScreen.vue";
import SignUpScreen from "@/components/SignUpScreen.vue";
import EventDashboard from "@/components/EventDashboard.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginScreen
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpScreen
  },
  {
    path: '/dashboard',
    name: 'EventDashboard',
    component: EventDashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
