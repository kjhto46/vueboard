<template>
    <b-row>
    <b-col md="auto">
      <b-calendar class="border rounded p-2" :date-info-fn="dateClass" block locale="ko-KR"></b-calendar>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },
      dateClass(ymd, date) {
        const day = date.getDate()
        return day >= 7 && day <= 20 ? 'table-info' : ''
      }
    }
  }
</script>
