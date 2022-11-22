<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <Nav />
      <div class="col-1"></div>
    </div>
    <Banner />
    <Row />
    <Comparison />
    <Products />
    <ChooseTheBest />
    <HowItWorks />
    <!-- <Video /> -->
    <Printer />
    <Avtar />
    <FAQ />
    <Contact />
    <div class="row minitureworld">
      <div class="col">
        <p>
          We Craft The Most <b>Realistic</b> 3D <b>Miniatures</b> in the world
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Ditto Dolls",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
    ],
    // link: [{ rel: "icon", type: "image", href: "@/assets/images/logo.svg" }],
  },
};
</script>

<style>
@import "assets/css/styles.css";
</style>
