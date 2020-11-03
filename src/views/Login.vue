<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>My Receipe Book</h1>
       
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <div class="form-group col-sm-6">
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="email" required placeholder="you@email.com" id="email1" class="form-control"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" required type="password" placeholder="******" id="password1" class="form-control" />
          </div>
          <button @click="login()" class="button btn btn-primary">Log In</button>
          <div class="extras">
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Register</h1>
          <div class="form-group col-sm-6">
            <label for="name">Name</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Your Name" id="name" class="form-control"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="title">Company</label>
            <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" class="form-control"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" class="form-control"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="password2">Password</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" class="form-control"/>
          </div>
          <button @click="signup()" class="button btn btn-primary">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  }
}
</script>