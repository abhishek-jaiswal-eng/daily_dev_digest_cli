<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <div class="default_layout p-8">
        <div class="text-3xl">
          <h2>User Sign Up</h2>
        </div>
        <div class="relative" style="margin: 3rem;">
          <input class="input-class" type="text" id="email" v-model="email" placeholder="user@email.com" required/>
        </div>
        <div class="relative" style="margin: 3rem;">
          <input class="input-class" type="text" id="password" v-model="password" placeholder="Password" required/>
        </div>

        <div class="relative" style="margin: 3rem;">
          <button class="button success" @click="handleSignUp" type="submit">Sign Up</button>
          <div class="text-3xl">
            <h4>Already have account?
              <router-link to="/login" class="text-blue-600 underline">Log In</router-link></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SignUpRequest } from '@/utils/apis/users';
export default {
  name: "SignUpScreen",
  data() {
    return {
      email: null,
      password: null,
      loading: false
    }
  },
  methods: {
    handleSignUp() {
      this.createUser();
    },
    async createUser() {
      try {
        this.loading = true;
        const { data } = await SignUpRequest(this.payload());
        this.setToken(data.user_token)
        alert(data.message)
        this.$router.push({ name: 'EventDashboard' });
      }
      catch(error) {
        alert(error.response.data.errors.message)
      }
      finally {
        this.loading = false;
      }
    },
    payload() {
      return {
        user: {
          email: this.email,
          password: this.password
        }
      }
    },
    setToken(token) {
      localStorage.setItem('token', token)
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
