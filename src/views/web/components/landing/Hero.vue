<template>
  <!-- eslint-disable -->
  <section class="top-hero-section">
    <div class="bg-image">
      <div class="layer" />
      <div class="hero-content">
        <div class="hero-content-flex-box d-flex flex-column">
          <h2>TELEMEDICINE</h2>
          <lorem add="5s" class='mt-3 mb-3' />
          <div class="hero-contact-us d-flex flex-row">
            <div class="hero-contact-item via-caller pr-3">
              <img class='pr-2' src='~@/assets/images/caller.png' />
              <span>{{ contactNumber }}</span>
            </div>
            <div class="hero-contact-item via-email pl-3">
              <img class='pr-2' src='~@/assets/images/mailer.png' />
              <span>{{ contactEmail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
    components: {
      Lorem: () => import('vue-lorem-ipsum'),
    },
    data () {
      return {
        contactNumberr: '',
        contactEmaill: '',
      }
    },
    created () {
      this.updateContactDetails()
    },
    methods: {
      updateContactDetails: function () {
        this.contactNumber = this.$contactNumber
        this.contactEmail = this.$contactEmail
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_hero.scss";
</style>
