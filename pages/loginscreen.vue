<template>
    <Nav />
    <div class="loginscreen my-2">
        <div class="formbox">
            <h2 class="formhead ">Welcome Back! </h2>
            <span class="formtext my-2 text-center">Welcome back! Please enter your details.</span>
            <form @submit.prevent="pressed">
                <div class="mb-3 forminput my-2">
                    <input type="email" v-model="email" class="form-control p-2 rounded-3" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="mb-3 forminput">
                    <input type="password" v-model="password" class="form-control p-2" id="exampleInputPassword1"
                        placeholder="Password">
                </div>
                <span class="forget my-3">
                    Forget Password ?
                </span>
                <button type="button" @click="signIn" class="sign">
                    Sign In
                </button>
                <button type="button" @click="login" class="google">
                    Sign in With Google
                </button>
                <nuxt-link to="/signUp"  class="" style="margin-left: 15px">Don't have a account?
                </nuxt-link>
            </form>
        </div>
    </div>
</template>
<script>

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
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
const provider = new GoogleAuthProvider();
export default {
    data: () => ({
        email: "",
        password: ""
    }),
    methods: {

        login() {
            signInWithPopup(getAuth(), provider).then((results) => {
                console.log(results);
                this.$router.push('/')

            })
        },
        signIn() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password).then((result) => {
                console.log(result)
                this.$router.push('/')
            })
        },
        createUser() {
            console.log("strted");
            console.log(this.email)
            try {
                createUserWithEmailAndPassword(getAuth(),
                    this.email,
                    this.password
                );
                this.$router.push('/')
            } catch (e) {
                handleError(e)
            }
        }
    }

}

</script>
  
<style scoped>
@import "@/assets/css/login.css";
</style>

