<template>
  <div class="col">
    <nav class="navbar navbar-expand-lg navbar-light bg-light topNavbar">
      <div class="container-fluid">
        <a class="nav-link" aria-current="page" href="/">
          <img src="../assets/images/logo.svg" alt="" class="logo-img" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html" target="_blank"
                >About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#OurProducts">Our Products</a>
            </li>
          </ul>
          <form class="d-flex NavrightSide">
            <!-- <a
              href="https://wa.me/+918700101645?text=hello I'm interested in buying your miniatures kindly guide me the order instructions…"
              class="btn login-btn"
              target="_blank"
              type="submit"
              >Order Now</a
            > -->
            <!-- <nuxt-link to="/login" class="btn login-btn">Login</nuxt-link> -->
            <nuxt-link
              to="/checkout"
              class="btn login-btn"
              style="margin-left: 15px"
              >Order Now</nuxt-link
            >
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
