<template>
  <div class="col">
    <nav class="navbar navbar-expand-lg navbar-light bg-light topNavbar">
      <div class="container-fluid">
        <a class="nav-link" aria-current="page" href="/">
          <img src="../assets/images/logo.svg" alt="" class="logo-img" />
        </a>
        <button class="navbar-toggler mobile-navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html" target="_blank">About Us
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



            <nuxt-link v-if="!username" to="/loginscreen" class="btn login-btn" style="margin-left: 15px">Login
            </nuxt-link>
            <div v-else class="logincomp">
              <button class="btn login-btn mx-2" @click="signoutfn">Log out
              </button>
              <img :src="img" alt="" class="profile" />
              <span>{{ username }}</span>
            </div>


          </form>
          <p></p>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import * as firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDJ7cVeohUlWMegCAWEF5MXj-ESR78T1y0",
  authDomain: "ditto-dolls.firebaseapp.com",
  projectId: "ditto-dolls",
  storageBucket: "ditto-dolls.appspot.com",
  messagingSenderId: "501056572331",
  appId: "1:501056572331:web:651a09c4ca901eee46a0ee",
  measurementId: "G-85LHP742X0"
};

firebase.initializeApp(firebaseConfig);
export default {

  data() {

    return {

      username: null,
      name: '',
      img: ""
    }
  },
  methods: {
    signoutfn() {
      signOut(getAuth()).then(() => {
        console.log("successfull");
      })
    },
  },


  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.username = user.displayName;
        this.img = user.photoURL;
        console.log(this.img)

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },
};
</script>

<style scoped>
.mobile-navbar-toggler {
  margin-top: -40px;
}

.logincomp {
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  color: #d3a466;
}

.logincomp span {
  margin-top: 5px;
}

.profile {
  padding: 10px;
  width: 20%;
  object-fit: contain;
  border-radius: 50%;
}
</style>
