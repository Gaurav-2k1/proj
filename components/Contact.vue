<template>
  <div class="row contactus" id="contactus">
    <div class="col">
      <h3>Contact us</h3>
      <p>Become our Reseller or Ask Questions</p>
      <div class="row">
        <div class="col">
          <div class="formSection">
            <form id="contactForm">
              <div class="mb-3">
                <label for="username" class="form-label">Name</label
                ><span>*</span>
                <input
                  type="name"
                  class="form-control"
                  id="username"
                  aria-describedby="name"
                  required
                  minlength="4"
                />
              </div>
              <div class="mb-3">
                <label for="number" class="form-label">Contact Number</label
                ><span>*</span>
                <input
                  type="contact"
                  class="form-control"
                  id="number"
                  aria-describedby="contact"
                  required
                  minlength="10"
                  maxlength="10"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Id</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="email"
                />
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input
                  type="subject"
                  class="form-control"
                  id="subject"
                  aria-describedby="subject"
                  minlength="4"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label
                ><span>*</span>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  required
                  minlength="8"
                ></textarea>
              </div>
              <button type="submit" class="btn send-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
