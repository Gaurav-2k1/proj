<template>
  <div>
    <div class="nav-bar" style="margin-bottom: 200px">
      <Nav/>
    </div>
    <div class="main-body">
      <div class="checkout-wrapper">
        <div class="left-side">
          <div class="uploader-wrapper">
            <h2 class="heading">Uploader</h2>
            <input type="file" accept="image/*" @change="onFileChange($event, 'logo_url')" ref="imageInput" />
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
                  <input type="number" v-model="Pets" min="0" @change="ondata" />
                </li>
                <li>Upload Supporting Images</li>
                <li class="info">
                  Upload front facing images of members whose faces are not
                  clearly visible
                </li>
                <input type="file" accept="image/*" @change="onFileChange($event, 'logo_url')" ref="imageInput" />
                <li class="info">
                  Upload back side design, tattoo, accessories, any other
                  details
                </li>
                <input type="file" accept="image/*" @change="onFileChange($event, 'logo_url')" ref="imageInput" />
              </ul>
            </div>
          </div>
          <div class="processbutton">
            
            <button type="button" @click="onpress">
              Continue ➡️


            </button>
          </div>
        </div>

      </div>


    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
export default {
  data: () => ({
    people: "0",
    Baby: "0",
    Pets: "0",
    total: "0"
  }),



  methods: {
    onpress() {
      this.$router.push({ path: '/payment/payment', props: { total: '5' } })
    },
    ondata() {
      total = this.people * 299 + this.Baby * 29 + this.pets * 99;
      return total;
    },
    onFileChange({ target }, prop) {
      const file = target && target.files && target.files[0];
      if (file) {
        this.activeElement[prop] = URL.createObjectURL(file);
      }
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
