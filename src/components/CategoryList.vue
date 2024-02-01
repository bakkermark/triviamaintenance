<template>
  <div class="post-list">
    <div v-for="category in categories" :key="category.id">
      <SingleCategory :category="category" />
    </div>
  </div>
</template>

<script>
// component imports
import SingleCategory from './SingleCategory.vue'

export default {
  props: ['categories'],
  components: { SingleCategory },
  setup() {

  }
}
</script>