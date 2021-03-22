<template>
    <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Picture 1">
        <b-card-img bottom fluid :src="require('../static/vpic5.jpg')" alt="Image 1"></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>

      <b-tab no-body title="Picture 2">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Image 25"></b-card-img>
        <b-card-footer>Picture 2 footer</b-card-footer>
      </b-tab>

      <b-tab no-body title="Picture 3">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
        <b-card-footer>Picture 3 footer</b-card-footer>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
 export default {
    
}
</script>