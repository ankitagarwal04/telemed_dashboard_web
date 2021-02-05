<template>
  <!-- eslint-disable -->
  <section class="testimonial-section">
    <div class="container">
      <div class="testimonial-header text-center mb-5">
        <h4>Our Testimonials</h4>
      </div>
      <carousel
        :per-page=1
        :loop='true'
        :autoplay='true'
        :autoplayTimeout=5000
        class='ml-3 mr-3'
      >
        <slide v-for="testimonial in testimonials" :key="testimonial.name">
          <div class="row quote-container">
            <div class="col-md-2 col-sm-12">
              <img src="telemed.png" class="img-rounded">
            </div>
            <div class="col-md-10 col-sm-12 quote-text">
              <p class='audience-quote text-justify pb-3'>{{ testimonial.excerpt }}</p>
              <p class='audience-name text-muted mb-0 pb-0'>{{ testimonial.name }}</p>
              <p class='audience-designation small text-muted'>({{ testimonial.position }})</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Testimonial',
    data () {
      return {
        testimonials: [
          {
            name: 'Ankit',
            excerpt: 'As defined by WHO The delivery of health care services, where distance is a critical factor, by all health care professionals using information and communication',
            position: 'Senior Software Developer',
          },
          {
            name: 'Madhur',
            excerpt: "A diagnostic test is an examination to identify an individual's specific areas of weakness and strength in order determine a condition, disease or illness.",
            position: 'Lead Clinical Research Analyst',
          },
          {
            name: 'Arya',
            excerpt: 'PRADHAN MANTRI BHARTIYA JAN AUSHADHI PARIYOJANA - It is a scheme to provide quality medicines at affordable prices to the masses through JAN AUSHADHI KENDRA.',
            position: 'Lead Clinical Research Analyst',
          },
          {
            name: 'Beatle',
            excerpt: 'CSC-SPV is also into selling products of reputed brands like PATANJALI AYURVEDA, Jiva Ayurveda and ESSILOR PVT LTD. CSC offers distributorship and retailership of various products.',
            position: 'Senior Software Developer',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .testimonial-section {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
    .quote-container {
      .img-rounded {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      .quote-text {
        text-align: left;
      }
    }
  }
</style>
