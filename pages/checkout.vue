<template>
  <div>
    <div class="nav-bar" style="margin-bottom: 200px">
      <Nav />
    </div>
    <div class="main-body">
      <div class="checkout-wrapper">
        <div class="left-side">
          <div class="uploader-wrapper">
            <h2 class="heading">Uploader</h2>
            <input
              type="file"
              accept="image/*"
              @change="onFileChange($event, 'logo_url')"
              ref="imageInput"
            />
          </div>
        </div>
        <div class="right-side">
          <div class="details">
            <div>
              <ul class="list">
                <li>Number of People</li>
                <li>Number of Baby</li>
                <li>Number of Pets</li>
                <li>Upload Supporting Images</li>
                <li class="info">
                  Upload front facing images of members whose faces are not
                  clearly visible
                </li>
                <input
                  type="file"
                  accept="image/*"
                  @change="onFileChange($event, 'logo_url')"
                  ref="imageInput"
                />
                <li class="info">
                  Upload back side design, tattoo, accessories, any other
                  details
                </li>
                <input
                  type="file"
                  accept="image/*"
                  @change="onFileChange($event, 'logo_url')"
                  ref="imageInput"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
export default {
  methods: {
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
.info {
  font-size: 14px !important;
  background: none !important;
}
</style>
