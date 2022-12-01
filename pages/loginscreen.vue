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
                <button class="forget my-3" @click="forget">
                    Forget Password ?
                </button>
                <button type="button" @click="signIn" class="sign">
                    Sign In
                </button>
                <button type="button" @click="login" class="google">
                    Sign in With Google
                </button>
                <nuxt-link to="/signUp" class="" style="margin-left: 15px">Don't have a account?
                </nuxt-link>
            </form>
        </div>
    </div>
</template>
<script>

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import * as firebase from 'firebase/app';
import { addDoc, doc, getFirestore, getDoc, where, setDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJ7cVeohUlWMegCAWEF5MXj-ESR78T1y0",
    authDomain: "ditto-dolls.firebaseapp.com",
    projectId: "ditto-dolls",
    storageBucket: "ditto-dolls.appspot.com",
    messagingSenderId: "501056572331",
    appId: "1:501056572331:web:651a09c4ca901eee46a0ee",
    measurementId: "G-85LHP742X0"
};
const db = getFirestore();
firebase.initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export default {
    data: () => ({
        email: "",
        password: ""
    }),
    methods: {
        forget() {
            sendPasswordResetEmail(getAuth(), this.email)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    console.log("send");
                    alert("Reset link send !");
                    this.email = "";
                    this.password = "";
                    this.$router.push('/');

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        },
        login() {
            signInWithPopup(getAuth(), provider).then(async (results) => {
                console.log(results);
                let uid = results.user.uid;
                console.log(uid);
                let docref = doc(db, "users", uid);
                const docSnap = await getDoc(docref);
                // console.log(docSnap);
                if (docSnap.exists()) {
                    const data = {
                        name: results.user.displayName,
                        address: "",
                        email: results.user.email,
                        phoneNumber: results.user.phoneNumber
                    }
                    await setDoc(docref, data);
                    console.log("Exist");
                } else {
                    // doc.data() will be undefined in this case
                    const data = {
                        name: results.user.displayName,
                        address: "",
                        email: results.user.displayName,
                        phoneNumber: results.user.phoneNumber
                    }
                    await setDoc(docref, data);
                    console.log("created");

                }
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

