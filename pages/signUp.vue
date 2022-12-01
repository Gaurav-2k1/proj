<template>
    <Nav />
    <div class="signUp">
        <div class="formbox">
            <h2 class="formhead my-3">Create Account</h2>
            <span class="formtext my-3">Hello New User,Please enter your details.</span>
            <form @submit.prevent="pressed">
                <div class="mb-3 forminput  p-2 rounded-3">
                    <input type="name" v-model="displayName" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Name">
                </div>

                <div class="mb-3 forminput p-2 rounded-3">
                    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="mb-3 forminput p-2 rounded-3">
                    <input type="number" v-model="phoneNumber" class="form-control" id="exampleInputEmail1"
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
import { doc, getFirestore, getDoc, where, setDoc } from "@firebase/firestore";
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
const db = getFirestore();

export default {
    data: () => ({
        displayName: "",
        phoneNumber: "",
        email: "",
        password: ""
    }),
    methods: {

        login() {
            signInWithPopup(getAuth(), provider).then(async (results) => {
                console.log(results);
                let uid = results.user.uid;
                console.log(uid);

                this.$router.push('/');


            }).then((user) => {
                console.log(user);
                // const docref = doc(db,"")
            })
        },

        createUser() {
            console.log("strted");
            console.log(this.email)
            try {
                createUserWithEmailAndPassword(getAuth(),
                    this.email,
                    this.password
                ).then(async (results) => {
                    console.log(results);
                    let uid = results.user.uid;

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
                            name: this.displayName,
                            address: "",
                            email: this.email,
                            phoneNumber: this.phoneNumber
                        }
                        await setDoc(docref, data);
                        console.log("created");

                    }
                });
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