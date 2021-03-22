<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="headerColor">
      <b-navbar-brand to="/">블로그</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">자유게시판</b-nav-item>
          <b-nav-item to="/Login">로그인</b-nav-item>
          <b-nav-item to="/gallery">갤러리</b-nav-item>
          <b-nav-item to="/boardlist">일기장</b-nav-item>
          <b-nav-item to="/calendar">달력</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  }
};
</script>
<style>
  .headerColor {background-color: #483964}
</style>
