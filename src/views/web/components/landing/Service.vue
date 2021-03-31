<template>
  <!-- eslint-disable -->
  <!-- <section class="service-section bg-light"> -->
  <section class="service-section">
    <div class="container">
      <h2 class="section-header">Health Services</h2>
      <p class="text-center mb-3">CSC Health Services serve thousands of people from their earliest years to retirement. Our mission is to help rural masses live healthier lives and make the health system work better and the vision is to play our best part in creating a more sustainable health care system: one that works for the betterment for everyone.</p>
      <div class="card-deck flex-wrap justify-content-between">
        <!-- use @mouseover for hover effect-->
        <div v-for="service in services" :key="service.title"  @click="showModal(service)" class="card service-card-holder pb-0 pt-3 pl-2 pr-2 mb-3 ml-0 mr-0">
          <div class="service-card-header">
            <img class="card-img-top center service-icon mb-3" :src="service.icon" alt="service.title">
            <h5 class="card-title">{{ service.title }}</h5>
          </div>
          <!-- <hr class='m-0'>
          <div class="card-body">
            <p class="card-text">{{ service.text }}</p>
          </div> -->
        </div>
      </div>
      <b-modal id="bv-modal-service" centered hide-footer>
        <template #modal-title>
          {{ modal.title }}
        </template>
        <div class="d-block text-center">
          <p>{{ modal.text }}</p>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Service',
    data () {
      return {
        modal: {
          title: '',
          text: '',
        },
        services: [
          {
            title: 'TELEMEDICINE',
            text: 'As defined by WHO The delivery of health care services, where distance is a critical factor, by all health care professionals using information and communication',
            icon: require('@/assets/images/services/telemed.png'),
          },
          {
            title: 'DIAGNOSTIC',
            text: "A diagnostic test is an examination to identify an individual's specific areas of weakness and strength in order determine a condition, disease or illness.",
            icon: require('@/assets/images/services/diagnostic.png'),
          },
          {
            title: 'MEDICINES',
            text: 'PRADHAN MANTRI BHARTIYA JAN AUSHADHI PARIYOJANA - It is a scheme to provide quality medicines at affordable prices to the masses through JAN AUSHADHI KENDRA.',
            icon: require('@/assets/images/services/medicines.png'),
          },
          {
            title: 'PRODUCTS',
            text: 'CSC-SPV is also into selling products of reputed brands like PATANJALI AYURVEDA, Jiva Ayurveda and ESSILOR PVT LTD. CSC offers distributorship and retailership of various products.',
            icon: require('@/assets/images/services/products.png'),
          },
          {
            title: 'HEALTH PACKAGES',
            text: 'This service is a cost effective homeopathy treatment for rural masses. It has various duration plans which include Tele-consultation and doorstep delivery of medicines.',
            icon: require('@/assets/images/services/health_packages.jpg'),
          },
          {
            title: 'CSC WELLNESS CENTER',
            text: 'A wellness centre is a well organized set up for providing all the health services under one roof. CSC Wellness Centre endeavours to provide preventive and curative primary health care services.',
            icon: require('@/assets/images/services/wellness_center.png'),
          },
          {
            title: 'DIGIGAON',
            text: 'CSC SPV is implementing the Digi Gaon initiative in rural and remote villages of the country, with the mandate of the Ministry of Electronics & IT.',
            icon: require('@/assets/images/services/digigaon.jpg'),
          },
          {
            title: 'TRAINING',
            text: 'Phlebotomy is a process of making an incision in a vein with a needle. It is an act of drawing or removing blood from the circulatory system through a cut (incision) or puncture in order to obtain a sample for analysis and diagnosis.',
            icon: require('@/assets/images/services/training.png'),
          },
        ],
      }
    },
    methods: {
      showModal: function (service) {
        this.modal.title = service.title
        this.modal.text = service.text
        this.$bvModal.show('bv-modal-service')
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_service.scss";
  @import "@/assets/style/web/_shared.scss";
</style>
