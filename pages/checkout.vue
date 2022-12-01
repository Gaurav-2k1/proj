<template>
  <div>
    <div class="nav-bar" style="margin-bottom: 200px">
      <Nav />
    </div>
    <div class="main-body" v-if="!show">
      <div class="checkout-wrapper">
        <div class="left-side">
          <div class="uploader-wrapper">
            <h2 class="heading" v-if="!image">Uploader</h2>
            <div class="imagePreviewWrapper" v-else :style="{ 'background-image': `url(${image})` }">

            </div>
            <!-- <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${image})` }">
            </div> -->
            <input type="file" accept="image/*" @change="onFileChange($event)" ref="fileInput" />

            <!-- <input ref="fileInput" type="file" @input="pickFile"> -->
            <button @click="uploadimage">upload</button>
          </div>

        </div>
        <div class="right-side">
          <div class="details">
            <div>
              <ul class="list">
                <li class="d-flex justify-content-between">
                  Number of Peoples
                  <input type="number" v-model="people" min="0" />
                </li>
                <li class="d-flex justify-content-between">Number of Baby
                  <input type="number" v-model="Baby" min="0" />
                </li>
                <li class="d-flex justify-content-between">Number of Pets
                  <input type="number" v-model="Pets" min="0" />
                </li>
                <li>Upload Supporting Images</li>
                <li class="info">
                  Upload front facing images of members whose faces are not
                  clearly visible
                </li>
                <input type="file" accept="image/*" @change="pickFile2($event)" ref="imageInput" />
                <li class="info">
                  Upload back side design, tattoo, accessories, any other
                  details
                </li>
                <input type="file" accept="image/*" @change="pickFile3($event)" ref="imageInput" />
              </ul>
            </div>
          </div>
          <div class="processbutton">

            <button v-if="!total" type="button" @click="uploadimage">Add to Cart</button>
            <div v-else>
              <span>
                $ {{ total }}
              </span>
              <!-- <nuxt-link :to="{ name: 'Checkout-Payment', params: { userId: 123 } }"> Continue ➡️</nuxt-link> -->

              <button type="button" @click="onpress">
                Continue
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import * as firebase from 'firebase/app'
import { getAuth, } from "firebase/auth";
import { getFirestore, setDoc, serverTimestamp, doc } from "@firebase/firestore";
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

const storage = getStorage();
// const auth = getAuth();
const db = getFirestore();

export default {
  name: 'checkout',
  data: () => ({
    people: 0,
    Baby: 0,
    Pets: 0,
    total: 0,
    image: null,
    image1: null,
    image2: null,
    image3: null,
    show: false,
    image1url: "",
    image2url: "",
    image3url: ""
  }),
  methods: {
    async uploadOrders() {
      const uid = getAuth().currentUser.uid;

      let docref = doc(db, "orders",uid);
      const data = {
        peoples: this.people,
        baby: this.Baby,
        pets: this.pets,
        uid: uid,
        price: this.total,
        image1: this.image1url,
        image2: this.image2url,
        image3: this.image3url,
        timestamp: serverTimestamp,
      }
      await setDoc(docref, data);

    },
    uploadimage() {
      const uid = getAuth().currentUser.uid;
      let storageref = ref(storage, `/images/${uid}/${this.image1.name}`);
      let storageref2 = ref(storage, `/images/${uid}/${this.image2.name}`);
      let storageref3 = ref(storage, `/images/${uid}/${this.image3.name}`);

      let uploadfiles = uploadBytesResumable(storageref, this.image1);
      let uploadfiles2 = uploadBytesResumable(storageref2, this.image2);
      let uploadfiles3 = uploadBytesResumable(storageref3, this.image3);

      if (this.image1) {
        uploadfiles.on("state_changed", (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          console.log(prog);
        }, (err) => {
          console.log(err);
        }, () => {
          getDownloadURL(uploadfiles.snapshot.ref).then((url) => {
            this.image1url = url
            console.log(url);
          })
        })
      }
      if (this.image2) {
        uploadfiles2.on("state_changed", (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          console.log(prog);
        }, (err) => {
          console.log(err);
        }, () => {
          getDownloadURL(uploadfiles.snapshot.ref).then((url) => {
            this.image1url = url;
            console.log(url);

          })
        })
      }
      if (this.image3) {
        uploadfiles3.on("state_changed", (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          console.log(prog);
        }, (err) => {
          console.log(err);
        }, () => {
          getDownloadURL(uploadfiles.snapshot.ref).then((url) => {
            this.image1url = url;
            console.log(url);

          })
        })
      }
      console.log(this.people * 299);
      console.log(this.Baby);
      console.log(this.Pets);
      let p = this.people * 299;
      let b = this.Baby * 29;
      let pe = this.Pets * 99;
      let add = p + b + pe;
      this.total = add;
      this.uploadOrders();
    },
    onpress() {
      // this.show= true
      this.$router.push({ name: 'Payment', params: { total: this.total } })


    },
    ondata() {
      this.total = this.people * 299 + this.Baby * 29 + this.pets * 99;
      console.log(this.total);
    },
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.image = e.target.result;
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])

      }
    },
    pickFile2({ target }) {
      const file = target && target.files && target.files[0];
      this.pickFile();
      this.image2 = file;
    },
    pickFile3({ target }) {
      const file = target && target.files && target.files[0];
      this.pickFile();
      this.image3 = file;
    },
    onFileChange({ target }) {
      const file = target && target.files && target.files[0];
      this.pickFile();
      this.image1 = file;

    },
  },
};
</script>

<style scoped>
.main-body {
  margin: 0 auto;
  /* background: aliceblue;
  padding: 40px 40px; */
}

.checkout-wrapper {
  display: flex;
  gap: 100px;
  justify-content: center;
}

.heading {
  font-size: 24px;
  margin-bottom: 10px;
}

.uploader-wrapper {
  width: 500px;
  height: 500px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list li {
  background: rgb(217 217 217 / 57%);
  font-size: 20px;
  width: 446px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 2px;
}

.list li input {
  margin-right: 10%;
  border: none;
  width: 10%;
  outline: none;

}

.info {
  font-size: 14px !important;
  background: none !important;
}

.processbutton {
  margin: 10% 0;
  margin-right: 1rem;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  color: rgb(3, 75, 51);
  align-items: center;

}

.imagePreviewWrapper {
  width: 70%;
  height: 70%;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.processbutton button {
  padding: 1rem 2rem;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  background-color: rgb(38, 113, 88);
}

.processbutton span {
  margin: 0 1rem;
  font-weight: 800;
  font-size: 1.5rem;
}
</style>
