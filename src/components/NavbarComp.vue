<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black custom-navbar">
    <div class="container-fluid">
      <!-- Logo on the left -->
      <a class="navbar-brand" href="#">Navbar</a>
      <!-- Toggler for smaller screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-dark"></span>
      </button>
      <!-- Navbar Content -->
      <div
        class="collapse navbar-collapse"
        :class="isSmallScreen ? 'position-fixed vh-100 bg-dark end-0 top-0 w-50' : ''"
        id="navbarSupportedContent"
      >
        <ul
          class="navbar-nav ms-auto mb-2 mb-lg-0"
          :class="isSmallScreen ? 'pt-5 w-100' : ''"
        >
          <!-- Close Button for smaller screens -->
          <li v-if="isSmallScreen" class="nav-item">
            <button
              @click="closeNavbar"
              class="btn-close btn-close-white position-absolute end-0 top-0 m-3"
              aria-label="Close"
            ></button>
          </li>
          <!-- Nav Links -->
          <li class="nav-item"
              :class="isSmallScreen ? 'w-100 text-center pb-2' : ''">
            <router-link @click="closeNavbar" class="nav-link nav-hover" to="/">Home</router-link>
          </li>
          <li class="nav-item"
              :class="isSmallScreen ? 'w-100 text-center pb-2' : ''">
            <router-link @click="closeNavbar" class="nav-link nav-hover" to="/aboutme">About Me</router-link>
          </li>
          <li class="nav-item"
              :class="isSmallScreen ? 'w-100 text-center pb-2' : ''">
            <router-link @click="closeNavbar" class="nav-link nav-hover" to="/timeline">Timeline</router-link>
          </li>
          <li class="nav-item dropdown"
              :class="isSmallScreen ? 'w-100 text-center pb-2' : ''">
            <a
              class="nav-link dropdown-toggle nav-hover"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Experiences
            </a>
            <ul class="dropdown-menu">
              <li><router-link @click="closeNavbar" class="dropdown-item" to="/collegework">College Work</router-link></li>
              <li><router-link @click="closeNavbar" class="dropdown-item" to="/internships">Internships</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link @click="closeNavbar" class="dropdown-item" to="/mythoughts">My Thoughts</router-link></li>
            </ul>
          </li>
          <li class="nav-item"
              :class="isSmallScreen ? 'w-100 text-center pb-2' : ''">
            <router-link @click="closeNavbar" class="nav-link nav-hover" to="/contactme">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      isSmallScreen: window.innerWidth <= 991
    };
  },
  methods: {
    closeNavbar() {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 991;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>

.dropdown-menu{
  transition: 0.5s;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar-collapse {
  z-index: 1050;
}

@media (max-width: 991px) {
  .navbar-collapse {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .navbar-collapse.show {
    transform: translateX(0);
  }
}

.nav-hover:hover{
  background-color: #fff;
  color: #000 !important;
}

.nav-hover {
  transition: background-color 0.3s, color 0.3s;
}
</style>
