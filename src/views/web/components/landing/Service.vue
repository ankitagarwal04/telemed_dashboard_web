<template>
  <!-- eslint-disable -->
  <section class="service-section">
    <div class="container service-container mt-5 mb-5">
      <div class="service-header">
        <h4>Health Services</h4>
        <p>CSC Health Services serve thousands of people from their earliest years to retirement. Our mission is to help rural masses live healthier lives and make the health system work better and the vision is to play our best part in creating a more sustainable health care system: one that works for the betterment for everyone.</p>
      </div>
      <div class="card-deck flex-wrap">
        <div v-for="service in services" :key="service.title" class="card service-card-holder p-3 mb-3">
          <div class="service-icon">
            <img class="card-img-top center" src="logo.png" alt="Card image cap">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Service',
    data () {
      return {
        services: [
          {
            title: 'TELEMEDICINE',
            text: 'As defined by WHO The delivery of health care services, where distance is a critical factor, by all health care professionals using information and communication',
          },
          {
            title: 'DIAGNOSTIC SERVICES',
            text: "A diagnostic test is an examination to identify an individual's specific areas of weakness and strength in order determine a condition, disease or illness.",
          },
          {
            title: 'MEDICINES',
            text: 'PRADHAN MANTRI BHARTIYA JAN AUSHADHI PARIYOJANA - It is a scheme to provide quality medicines at affordable prices to the masses through JAN AUSHADHI KENDRA.',
          },
          {
            title: 'PRODUCTS',
            text: 'CSC-SPV is also into selling products of reputed brands like PATANJALI AYURVEDA, Jiva Ayurveda and ESSILOR PVT LTD. CSC offers distributorship and retailership of various products.',
          },
          {
            title: 'HEALTH PACKAGES',
            text: 'This service is a cost effective homeopathy treatment for rural masses. It has various duration plans which include Tele-consultation and doorstep delivery of medicines.',
          },
          {
            title: 'CSC WELLNESS CENTER',
            text: 'A wellness centre is a well organized set up for providing all the health services under one roof. CSC Wellness Centre endeavours to provide preventive and curative primary health care services.',
          },
          {
            title: 'DIGIGAON',
            text: 'CSC SPV is implementing the Digi Gaon initiative in rural and remote villages of the country, with the mandate of the Ministry of Electronics & IT.',
          },
          {
            title: 'TRAINING',
            text: 'Phlebotomy is a process of making an incision in a vein with a needle. It is an act of drawing or removing blood from the circulatory system through a cut (incision) or puncture in order to obtain a sample for analysis and diagnosis.',
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
  @import "@/assets/style/web/_service.scss";
</style>
