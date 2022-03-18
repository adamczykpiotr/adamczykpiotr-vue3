<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import CvService from '@/services/cv.service';

export default {
  name: 'HomeView',
  methods: {
    getCv: async function () {
      let z = await CvService.getCv('en');
      console.log('aaa');
      console.log(z);
    },
  },
  mounted() {

    this.getCv();
  }
}
</script>
