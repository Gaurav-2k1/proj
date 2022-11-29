<template>
    <Nav />
    <div class="signUp">
        <div class="formbox">
            <h2 class="formhead my-3">Create Account</h2>
            <span class="formtext my-3">Hello New User,Please enter your details.</span>
            <form @submit.prevent="pressed">
                <div class="mb-3 forminput  p-2 rounded-3">
                    <input type="name" v-model="name" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Name">
                </div>

                <div class="mb-3 forminput p-2 rounded-3">
                    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="mb-3 forminput p-2 rounded-3">
                    <input type="number" v-model="phone" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Phone Number">
                </div>
                <div class="mb-3 forminput p-2 rounded-3">
                    <input type="email" v-model="password" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Password">
                </div>


                <button type="button" @click="createUser" class="sign">
                    Create Account
                </button>
               
                <nuxt-link to="/loginscreen" class="" style="margin-left: 15px">Already have an account ? Sign In
                </nuxt-link>
            </form>
        </div>

    </div>

</template>
  
<script>
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
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

<!-- methods: {
    login() {
        let that = this;
        alert(this);
        auth
            .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
            .catch(function (error) {
                that.snackbarText = error.message
                that.snackbar = true
            }).then((user) => {
                //we are signed in
                alert(user);
                $nuxt.$router.push('/')
            })
    },
    forgotPassword() {
        let that = this
        this.$fire.auth.sendPasswordResetEmail(this.auth.email)
            .then(function () {
                that.snackbarText = 'reset link sent to ' + that.auth.email
                that.snackbar = true
            })
            .catch(function (error) {
                that.snackbarText = error.message
                that.snackbar = true
            })
    }
} -->