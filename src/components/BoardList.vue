<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="dark">2021-02-01</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>성산일출봉에 가다.</b-card-text>
          <b-card-text>
            <img src='../static/login.jpg' alt='pic1'/> 
          <!-- <b-img :src="require('../static/pic1.jpg')" alt='pic1'></b-img> -->
          &nbsp;{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="dark">2021-01-21</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>제주도의 말들과 함께</b-card-text>
          <b-card-text>
           <img src='../static/p15.jpg' alt='pic2'/>
          &nbsp;{{ text2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="dark">2021-01-05</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>새해 기념 한라산에 오르다.</b-card-text>
          <b-card-text>
          <img src='../static/p16.jpg' alt='pic3'/>
          &nbsp;{{ text3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          자세한 내용은 회원가입 후 확인 부탁드립니다.
        `,
        text2: `
          자세한 내용은 회원가입 후 확인 부탁드립니다.
        `,
        text3: `
         자세한 내용은 회원가입 후 확인 부탁드립니다.
        `
      }
    }
  }
</script>