<template>
  <h1>Trivia Categories</h1>
  <div v-if="categories.length">
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import getCategories from '../composables/getCategories'

// component imports
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: 'About',
  components: { CategoryList },
  setup() {
    const { categories, error, load } = getCategories()

    load()

    return { categories, error }
  },
}
</script>

<style scoped lang="scss">

</style>