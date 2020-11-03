<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>My Receipe Book</h3>
        </div>

        <ul class="navbar-nav">
            <li>
                <router-link to="/ingredients">Ingredients</router-link>
            </li>
          
        </ul>
    </nav>
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>