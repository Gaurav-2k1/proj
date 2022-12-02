<template>
    <Nav />
    <div class="paymentdiv ">
        <div class="paymenthead ">
            Checkout
        </div>
        <div class="cardsdiv">
            <div class="card">
                <div class="cardhead">
                    1. User's Details
                </div>
                <span class="carddetail" v-if="address">
                    {{ address }}
                </span>
                <span class="addaddress" v-else>
                    <p class="add">
                        No address ,Please enter your address!

                    </p>
                    <form @submit.prevent="pressed" class="addressform">
                        <input type="text" v-model="setaddress" placeholder="Add address" />
                        <button class="buttonaddress" @click="submitaddress">Add</button>
                    </form>

                </span>
            </div>
            <div class="card">
                <div class="cardhead" @click="print">
                    2. Select a payment method
                </div>
                <span class="carddetail">
                    <div v-if="!paid" id="paypal-button-container"></div>
                    <div v-else id="confirmation">Order complete!</div>
                </span>
            </div>

        </div>
    </div>
</template>
  
<script>

import { getAuth } from "firebase/auth";
import * as firebase from 'firebase/app';
import { doc, getFirestore, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import { loadScript } from '@paypal/paypal-js';


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

const auth = getAuth();
let uid = auth.currentUser.uid;

const db = getFirestore();
export default {

    name: "Payment",
    beforeCreate: function () {
        loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
            paypal
                .Buttons({
                    createOrder: this.createOrder,
                    onApprove: this.onApprove,
                })
                .render('#paypal-button-container');
        });
    },
    methods: {
        press() {

        },
        createOrder: function (data, actions) {
            console.log('Creating order...');
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: this.cartTotal,
                        },
                    },
                ],
            });
        },
        onApprove: function (data, actions) {
            console.log('Order approved...');
            return actions.order.capture().then(() => {
                this.paid = true;
                console.log('Order complete!');
                $this.router.push("/");
            });
        },
        async submitaddress() {
            this.address = this.setaddress
            let docref = doc(db, "users", uid);
            await updateDoc(docref, {
                address: this.address
            })
        }
    },
    data: () => ({
        address: "",
        setaddress: "",
        paid: false,
        cartTotal: 1,
        total: 0
    }),
    async created() {
        let email = auth.currentUser.email;
        console.log(email);
        let docref = doc(db, "users", uid);
        // let q = query(collection(db, "users"), where("email", "==", `${email}`))
        // const result = await getDoc(q);
        getDoc(docref).then((result) => {
            this.address = result.data().address
        });
        this.total = this.$route.params.userid;
        console.log(this.$route.params.userid)
        // result.forEach((doc) => {
        //     console.log(doc.data());
        // })
        // console.log(auth.currentUser);
    }
};
const CLIENT_ID = 'ASnj0tx7P9TgXwc5I0aWvO_dsA6VvmZYgMNEmfej3h0p3Gr_AVOYUinz4CasL7iB-C6BhoMWSuXpaqvp';

</script>
  
<style>
#paypal-button-container {
    margin: 30px 0;
}

#confirmation {
    color: green;
    margin-top: 1em;
    font-size: 2em;
}

.paymentdiv {
    background-color: #FDF9EA;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
}


.paymenthead {
    width: 100vw;
    height: 25vh;
    padding-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 3rem;
    color: white;
    background-color: #322C2C;
}

.cardsdiv {
    margin: 5% 0;
    width: 40%;
    height: 100%;
    background-color: transparent;

}

.card {
    background-color: transparent;
    border: none;
    margin: 2% 0;
    height: 50%;
}

.cardhead {
    padding-left: 1rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 600;
    color: #D3A466;
    align-items: center;
    background: #FDF9EA;
    border: 1px solid #000000;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
}

.carddetail {
    padding: 2% 10%;
    width: 60%;
    height: 10rem;
    font-weight: 400;
    font-size: 21px;
    line-height: 1.5;
    /* or 16px */
}

.addaddress {
    padding: 2% 10%;
    width: 100%;
    height: 10rem;

}

.add {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 400;
}

.addressform {
    display: flex;
    height: 30%;
}
.addressform input{
    display: flex;
    width: 80%;
    padding-left: 1rem;
    outline: none;
    border-radius: 10px;
}
.buttonaddress{
    margin-left: 10px;
    width: 30%;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: rgb(6, 100, 6);
    color: white;
    border: 1px white ;
}
</style>
  