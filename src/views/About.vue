<template>
<div>
  <h1>789</h1>
  <b>{{ food }}</b>
</div>
  
</template>


<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>