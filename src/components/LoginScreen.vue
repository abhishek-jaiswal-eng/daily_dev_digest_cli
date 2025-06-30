<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <div class="default_layout p-8">
        <div class="text-3xl">
          <h2>User Login</h2>
        </div>
        <div class="relative" style="margin: 3rem;">
          <input class="input-class" type="text" id="email" v-model="email" placeholder="user@email.com"/>
        </div>
        <div class="relative" style="margin: 3rem;">
          <input class="input-class" type="text" id="password" v-model="password" placeholder="Password"/>
        </div>

        <div class="relative" style="margin: 3rem;">
          <button class="button success" @click="handleLogin" type="submit">Login</button>
          <div class="text-3xl">
            <h4>Don't have account?
              <router-link to="/signup" class="text-blue-600 underline">Sign Up</router-link></h4>
          </div>
        </div>
      </div>
    </div>
    <AlertComponent
      v-if="showAlert"
      :message="alertMessage"
      @close="showAlert = false"
    />
  </div>
</template>
<script>
import { LoginRequest  } from '@/utils/apis/users';
import AlertComponent from './shared/AlertComponent.vue';
export default {
  name: "LoginScreen",
  components: {
    AlertComponent
  },
  data() {
    return {
      email: null,
      password: null,
      loading: false,
      alertMessage: '',
      showAlert: false
    }
  },
  methods: {
    handleLogin() {
      this.fetchLoginresponse()
    },

    async fetchLoginresponse() {
      try {
        this.loading = true;
        const { data } = await LoginRequest(this.payload())
        this.setUserToken(data.user_token)
        this.showAlert = true;
        this.alertMessage = data.message
        // alert(data.message)
        this.$router.push({ name: 'EventDashboard' });
      }
      catch(error) {
        this.resetToken();
        alert(error.response.data.errors.message)
        console.log(error.response.data.errors.message)
      }
      finally {
        this.loading = false;
      }
    },

    payload() {
      return {
        email: this.email,
        password: this.password
      }
    },
    setUserToken(token) {
      localStorage.setItem('token', token);
    },
    resetToken() {
      localStorage.removeItem('token')
    }
  }
}
</script>
<style scoped>
.default_layout {
  width: 40rem;
  box-shadow: -9px 12px 8px 9px lightgrey;
  border-radius: 2rem;
  height: 24rem;
}

.input-class{
  width: 30rem;
  height: 2rem;
  border-radius: .5rem;
  box-shadow: -9px 12px 8px 9px lightgrey;
  border: none;
}

input {
  font-size: 1.2rem;
  padding-left: 12px;
}
input::placeholder {
  font-size: 1.2rem;
  padding-left: 2px;
}
</style>
